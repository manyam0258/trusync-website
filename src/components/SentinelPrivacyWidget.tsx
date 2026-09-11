import React, { useState, useEffect } from 'react';

export interface ConsentPurposeItem {
  purpose_id: string;
  purpose_name: string;
  description?: string | null;
  lawful_basis?: string;
  is_mandatory?: boolean;
}

export interface SentinelPrivacyWidgetProps {
  formId?: string;
  onLanguageChange?: (lang: string) => void;
  onMarketingChange?: (consent: boolean) => void;
  onPreferencesChange?: (prefs: Record<string, boolean>) => void;
  onPolicyLoaded?: (policy: any) => void;
}


const UI_LABELS: Record<string, { specified: string; optional: string }> = {
  English: {
    specified: "Specified Purpose",
    optional: "{(UI_LABELS[selectedLang] || UI_LABELS.English).optional}"
  },
  Telugu: {
    specified: "నిర్దేశిత ప్రయోజనం",
    optional: "ఐచ్ఛిక ప్రాధాన్యతలు (విభజించబడిన సమ్మతి - సెక్షన్ 6):"
  },
  Hindi: {
    specified: "निर्दिष्ट उद्देश्य",
    optional: "वैकल्पिक प्राथमिकताएं (अलग सहमति - धारा 6):"
  },
  Tamil: {
    specified: "குறிப்பிடப்பட்ட நோக்கம்",
    optional: "விருப்ப முன்னுரிமைகள் (பிரித்தெடுக்கப்பட்ட ஒப்புதல் - பிரிவு 6):"
  },
  Kannada: {
    specified: "ನಿರ್ದಿಷ್ಟ ಉದ್ದೇಶ",
    optional: "ಐಚ್ಛಿಕ ಆದ್ಯತೆಗಳು (ವಿಭಜಿತ ಒಪ್ಪಿಗೆ - ವಿಭಾಗ 6):"
  }
};

export default function SentinelPrivacyWidget({
  formId = 'contact-us-pilot',
  onLanguageChange = () => {},
  onMarketingChange = () => {},
  onPreferencesChange = () => {},
  onPolicyLoaded = () => {},
}: SentinelPrivacyWidgetProps) {
  const [languages, setLanguages] = useState<string[]>(['English', 'Telugu', 'Hindi', 'Tamil', 'Kannada']);
  const [selectedLang, setSelectedLang] = useState('English');
  const [notice, setNotice] = useState({ title: 'Enterprise DPDP Privacy Notice', version: '1.0', notice_name: 'NOT-2026-0003' });
  const [specifiedPurposes, setSpecifiedPurposes] = useState<ConsentPurposeItem[]>([]);
  const [optionalPurposes, setOptionalPurposes] = useState<ConsentPurposeItem[]>([]);
  const [preferences, setPreferences] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  // Fetch multilingual policy from Sentinel Gateway (via Same-Origin Next.js Proxy)
  useEffect(() => {
    async function loadPolicy() {
      setLoading(true);
      try {
        const res = await fetch(`/api/sentinel/get_form_policy?form_id=${encodeURIComponent(formId)}&language=${encodeURIComponent(selectedLang)}`);
        const json = await res.json();
        const data = json.message || json;
        if (data.notice) {
          setNotice(data.notice);
          if (onPolicyLoaded) onPolicyLoaded(data);
        }
        if (data.specified_purposes) {
          setSpecifiedPurposes(data.specified_purposes);
        }
        if (data.optional_consent_purposes && data.optional_consent_purposes.length > 0) {
          setOptionalPurposes(data.optional_consent_purposes);
          // Initialize preferences state
          const initialPrefs: Record<string, boolean> = {};
          let anyMarketingChecked = false;
          data.optional_consent_purposes.forEach((p: ConsentPurposeItem) => {
            initialPrefs[p.purpose_id] = false;
          });
          setPreferences(initialPrefs);
          if (onPreferencesChange) onPreferencesChange(initialPrefs);
          if (onMarketingChange) onMarketingChange(anyMarketingChecked);
        }
        if (data.supported_languages) {
          setLanguages(data.supported_languages);
        }
      } catch (err) {
        console.warn('Sentinel Privacy Gateway fallback:', err);
      } finally {
        setLoading(false);
      }
    }
    loadPolicy();
  }, [formId, selectedLang]);

  const handleLangSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

  const handleCheckbox = (purposeId: string, checked: boolean) => {
    const updated = { ...preferences, [purposeId]: checked };
    setPreferences(updated);
    if (onPreferencesChange) onPreferencesChange(updated);
    
    // Backward compatibility with legacy onMarketingChange
    const anyMarketing = Object.entries(updated).some(([k, v]) => v);
    if (onMarketingChange) onMarketingChange(anyMarketing);
  };

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '14px',
      backgroundColor: '#f8fafc',
      margin: '16px 0',
      fontSize: '13px',
      color: '#334155'
    }}>
      {/* Notice Title & Language Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: '600', color: '#0f172a' }}>
          🛡️ {notice.title} <span style={{ fontSize: '11px', color: '#64748b' }}>(v{notice.version})</span>
        </span>
        <select 
          value={selectedLang} 
          onChange={handleLangSelect}
          style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px', background: '#fff', cursor: 'pointer' }}
        >
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      {/* Specified Purpose (Section 4 Legitimate Use - Zero Lockout) */}
      {specifiedPurposes.length > 0 ? (
        specifiedPurposes.map((sp, idx) => (
          <div key={idx} style={{ padding: '8px 10px', background: '#e0f2fe', borderLeft: '3px solid #0284c7', borderRadius: '4px', marginBottom: '10px', fontSize: '12px', color: '#0369a1' }}>
            <strong>{(UI_LABELS[selectedLang] || UI_LABELS.English).specified} ({sp.purpose_name}):</strong> {sp.description || 'Process submitted contact details solely to respond to your specific enquiry under Section 4(1)(b).'}
          </div>
        ))
      ) : (
        <div style={{ padding: '8px 10px', background: '#e0f2fe', borderLeft: '3px solid #0284c7', borderRadius: '4px', marginBottom: '10px', fontSize: '12px', color: '#0369a1' }}>
          <strong>Specified Purpose (§4(1)(b)):</strong> Process submitted contact details solely to respond to the enquiry and provide requested service quotation.
        </div>
      )}

      {/* Optional Unbundled Consents (Section 6 DPDP Act) */}
      {optionalPurposes.length > 0 ? (
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', marginBottom: '6px', letterSpacing: '0.5px' }}>
            {(UI_LABELS[selectedLang] || UI_LABELS.English).optional}
          </div>
          {optionalPurposes.map(p => (
            <div key={p.purpose_id} style={{ marginBottom: '8px', padding: '8px 10px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', margin: 0 }}>
                <input 
                  type="checkbox" 
                  checked={!!preferences[p.purpose_id]} 
                  onChange={e => handleCheckbox(p.purpose_id, e.target.checked)} 
                  style={{ marginTop: '3px', cursor: 'pointer', accentColor: '#6366f1' }}
                />
                <span style={{ fontSize: '12px', color: '#334155', lineHeight: '1.4' }}>
                  <strong style={{ color: '#0f172a' }}>{p.purpose_name}</strong>
                  {p.description && (
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>{p.description}</div>
                  )}
                </span>
              </label>
            </div>
          ))}
        </div>
      ) : (
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '13px' }}>
          <input 
            type="checkbox" 
            checked={Object.values(preferences).some(v => v)} 
            onChange={e => handleCheckbox('marketing', e.target.checked)} 
            style={{ marginTop: '2px' }}
          />
          <span>I agree to receive occasional marketing updates, newsletters, and product recommendations (Optional — Section 6 DPDP Act).</span>
        </label>
      )}
    </div>
  );
}
