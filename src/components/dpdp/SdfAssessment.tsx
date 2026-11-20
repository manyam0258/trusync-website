"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, ShieldAlert, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/Button";

/**
 * A self-check against the factors in Section 10(1) of the DPDP Act. The Act sets no numeric threshold:
 * only a Government notification makes an organisation a Significant Data Fiduciary, so the result is a
 * likelihood and a list of obligations to prepare for, never a determination.
 */
type Option = { label: string; points: number };
type Question = { id: string; text: string; hint?: string; multi?: boolean; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "volume",
    text: "How many individuals' personal data do you process?",
    hint: "Customers, leads, users, employees and others, across all systems.",
    options: [
      { label: "Fewer than 1 lakh", points: 0 },
      { label: "1 lakh to 10 lakh", points: 1 },
      { label: "10 lakh to 1 crore", points: 3 },
      { label: "More than 1 crore", points: 5 },
    ],
  },
  {
    id: "sensitivity",
    text: "Which of these kinds of data do you process?",
    hint: "Select all that apply.",
    multi: true,
    options: [
      { label: "Financial or payment data", points: 1 },
      { label: "Health or medical data", points: 1 },
      { label: "Biometric data", points: 1 },
      { label: "Government IDs (Aadhaar, PAN, passport)", points: 1 },
      { label: "Precise location data", points: 1 },
      { label: "Children's data", points: 1 },
    ],
  },
  {
    id: "sector",
    text: "Which best describes your business?",
    options: [
      { label: "Bank, NBFC, insurer or fintech", points: 2 },
      { label: "Hospital, diagnostics or health-tech", points: 2 },
      { label: "Telecom, social media, search or large online platform", points: 3 },
      { label: "E-commerce, ed-tech or gaming", points: 1 },
      { label: "Other", points: 0 },
    ],
  },
  {
    id: "profiling",
    text: "Do you use personal data for profiling, automated decisions or AI models?",
    hint: "For example credit scoring, recommendations or targeted advertising.",
    options: [
      { label: "No", points: 0 },
      { label: "Limited, internal analytics only", points: 1 },
      { label: "Yes, decisions or targeting at scale", points: 2 },
    ],
  },
  {
    id: "public",
    text: "Could misuse of your data affect public order, elections, state security or critical services?",
    hint: "These are factors the Government considers under Section 10(1).",
    options: [
      { label: "No", points: 0 },
      { label: "Possibly", points: 2 },
      { label: "Yes", points: 4 },
    ],
  },
];

const MAX = QUESTIONS.reduce((sum, q) => sum + (q.multi ? q.options.reduce((s, o) => s + o.points, 0) : Math.max(...q.options.map((o) => o.points))), 0);

const PREPARE = [
  "Appoint a Data Protection Officer based in India, reporting to the board",
  "Appoint an independent data auditor",
  "Carry out a Data Protection Impact Assessment and an audit every twelve months (Rule 13)",
  "Report significant findings of the DPIA and audit to the Data Protection Board",
  "Run due diligence on algorithmic software that processes personal data",
  "Prepare for possible restrictions on transferring specified data outside India",
];

export function SdfAssessment() {
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const answered = QUESTIONS.filter((q) => q.multi || answers[q.id]?.length).length;
  const complete = answered === QUESTIONS.length;

  const score = useMemo(
    () => QUESTIONS.reduce((sum, q) => sum + (answers[q.id] ?? []).reduce((s, i) => s + q.options[i].points, 0), 0),
    [answers],
  );
  const level = score >= 11 ? "high" : score >= 6 ? "moderate" : "low";

  const choose = (q: Question, index: number) => {
    setAnswers((prev) => {
      const current = prev[q.id] ?? [];
      if (!q.multi) return { ...prev, [q.id]: [index] };
      return { ...prev, [q.id]: current.includes(index) ? current.filter((i) => i !== index) : [...current, index] };
    });
  };

  const result = {
    low: { title: "Lower likelihood", icon: ShieldCheck, tone: "border-green-200 bg-green-50 text-green-800", text: "Your answers suggest you are less likely to be notified as a Significant Data Fiduciary. All Data Fiduciary obligations still apply to you from May 2027." },
    moderate: { title: "Moderate likelihood", icon: ShieldAlert, tone: "border-amber-200 bg-amber-50 text-amber-800", text: "Some factors the Government considers are present. Build your programme so that SDF obligations can be added without redesign." },
    high: { title: "Higher likelihood", icon: ShieldAlert, tone: "border-red-200 bg-red-50 text-red-800", text: "Several factors the Government considers are present. Plan now for the additional obligations of a Significant Data Fiduciary." },
  }[level];
  const Icon = result.icon;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <ol className="space-y-8">
        {QUESTIONS.map((q, qi) => (
          <li key={q.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-1 text-sm font-semibold text-primary">Question {qi + 1} of {QUESTIONS.length}</p>
            <h2 className="text-lg font-semibold text-slate-900">{q.text}</h2>
            {q.hint && <p className="mt-1 text-sm text-slate-500">{q.hint}</p>}
            <div className="mt-4 grid gap-2 sm:grid-cols-2" role={q.multi ? "group" : "radiogroup"} aria-label={q.text}>
              {q.options.map((o, oi) => {
                const selected = answers[q.id]?.includes(oi) ?? false;
                return (
                  <button
                    key={o.label}
                    type="button"
                    role={q.multi ? "checkbox" : "radio"}
                    aria-checked={selected}
                    onClick={() => choose(q, oi)}
                    className={`rounded-xl border-2 px-4 py-3 text-left text-sm transition-colors ${selected ? "border-primary bg-primary/5 font-medium text-slate-900" : "border-slate-200 text-slate-600 hover:border-primary/40"}`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <aside className="lg:sticky lg:top-32 lg:self-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" aria-live="polite">
          <h2 className="text-lg font-semibold text-slate-900">Your result</h2>
          {!complete ? (
            <p className="mt-2 text-sm text-slate-500">Answer all questions to see your result ({answered} of {QUESTIONS.length} done).</p>
          ) : (
            <>
              <div className={`mt-4 rounded-xl border p-4 ${result.tone}`}>
                <p className="flex items-center gap-2 font-semibold"><Icon size={18} /> {result.title}</p>
                <p className="mt-1 text-sm">{result.text}</p>
                <p className="mt-2 text-xs opacity-75">Score {score} of {MAX}</p>
              </div>
              {level !== "low" && (
                <div className="mt-5">
                  <p className="text-sm font-semibold text-slate-900">Obligations to prepare for</p>
                  <ul className="mt-2 space-y-2">
                    {PREPARE.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-slate-600"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />{p}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Button asChild className="mt-6 w-full"><Link href="/dpdp/book-demo">Talk to us about your result</Link></Button>
            </>
          )}
          <p className="mt-5 text-xs text-slate-400">
            This is an indicative self-check based on the factors in Section 10(1) of the DPDP Act. Only a Government notification makes an organisation a Significant Data Fiduciary. It is not legal advice.
          </p>
        </div>
      </aside>
    </div>
  );
}
