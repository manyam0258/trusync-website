import React, { useState, useEffect } from 'react';

const SENTINEL_URL = process.env.NEXT_PUBLIC_SENTINEL_URL || 'https://dev-tridasa.frappe.cloud';

export interface SentinelPrivacyWidgetProps {
  onLanguageChange?: (lang: string) => void;
  onMarketingChange?: (consent: boolean) => void;
  onPolicyLoaded?: (policy: any) => void;
}

export default function SentinelPrivacyWidget({
  onLanguageChange = () => {},
  onMarketingChange = () => {},
  onPolicyLoaded = () => {},
}: SentinelPrivacyWidgetProps) {
  const [languages, setLanguages] = useState<string[]>(['English', 'Telugu', 'Hindi', 'Tamil', 'Kannada']);
  const [selectedLang, setSelectedLang] = useState('English');
  const [notice, setNotice] = useState({ title: 'Website Contact & Marketing Privacy Notice', version: '1.0', notice_name: 'NOT-2026-0003' });
  const [specifiedPurpose, setSpecifiedPurpose] = useState('Process submitted contact details solely to respond to the enquiry and provide requested service quotation.');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch multilingual policy from Sentinel Gateway
  useEffect(() => {
    async function loadPolicy() {
      setLoading(true);
      try {
        const res = await fetch(`${SENTINEL_URL}/api/method/sentinel_dpdp.sentinel_dpdp.api.v1.privacy.get_form_policy?form_id=contact-us&language=${encodeURIComponent(selectedLang)}`);
        const json = await res.json();
        const data = json.message || json;
        if (data.notice) {
          setNotice(data.notice);
          if (onPolicyLoaded) onPolicyLoaded(data);
        }
        if (data.specified_purposes && data.specified_purposes.length > 0) {
          setSpecifiedPurpose(data.specified_purposes[0].description || 'Process submitted contact details solely to respond to the enquiry and provide requested service quotation.');
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
  }, [selectedLang]);

  const handleLangSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setMarketingConsent(checked);
    if (onMarketingChange) onMarketingChange(checked);
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

      {/* Specified Purpose (Section 4 Legitimate Use) */}
      <div style={{ padding: '8px 10px', background: '#e0f2fe', borderLeft: '3px solid #0284c7', borderRadius: '4px', marginBottom: '10px', fontSize: '12px', color: '#0369a1' }}>
        <strong>Specified Purpose (§4(1)(b)):</strong> {specifiedPurpose}
      </div>

      {/* Optional Marketing Opt-In (Section 6 Consent) */}
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '13px' }}>
        <input 
          type="checkbox" 
          checked={marketingConsent} 
          onChange={handleCheckbox} 
          style={{ marginTop: '2px' }}
        />
        <span>I agree to receive occasional marketing updates, newsletters, and product recommendations (Optional — Section 6 DPDP Act).</span>
      </label>
    </div>
  );
}
