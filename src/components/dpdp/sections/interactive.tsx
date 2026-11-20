'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, CircleCheck, CircleX } from 'lucide-react'

import { card, DpIcon, hasLink, IconTile, MockWindow, num, SectionHead, Shell, StatusPill, TONE, toneOf } from './ui'

type Lnk = { label?: string | null; url?: string | null }
const arr = <T,>(v: T[] | null | undefined): T[] => (Array.isArray(v) ? v : [])

// ---------- data flow tabs ----------
type Flow = { id?: string; label: string; icon?: string; steps?: { id?: string; icon?: string; label: string; value: string }[] }
export function DpFlowSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; tabs?: Flow[]; note?: string } }) {
  const tabs = arr(b.tabs)
  const [active, setActive] = useState(0)
  const tab = tabs[active]
  return (
    <Shell theme="white">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} />
      <div className="rounded-3xl border border-[var(--dp-line)] bg-[var(--dp-soft)] p-4 md:p-6">
        <div role="tablist" aria-label={b.heading ?? 'Data flows'} className="mb-6 flex flex-wrap gap-2">
          {tabs.map((t, i) => (
            <button key={t.id ?? i} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${i === active ? 'bg-[var(--dp-navy)] text-white' : 'bg-white text-slate-600 ring-1 ring-[var(--dp-line)] hover:text-[#008DAA]'}`}>
              <DpIcon name={t.icon} className="h-4 w-4" />{t.label}
            </button>
          ))}
        </div>
        {tab && (
          <div role="tabpanel" className="grid gap-3 md:grid-cols-4">
            {arr(tab.steps).map((s, i, all) => (
              <div key={s.id ?? i} className="relative">
                <div className={`${card} h-full p-5 ${i === all.length - 1 ? 'ring-2 ring-[#008DAA]/30' : ''}`}>
                  <div className="mb-4 flex items-center justify-between"><IconTile name={s.icon} tone="violet" size="sm" /><span className="font-mono text-[11px] text-slate-400">{num(i)}</span></div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{s.label}</p>
                  <p className="mt-1.5 font-semibold text-[var(--dp-ink)]">{s.value}</p>
                </div>
                {i < all.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#008DAA] text-white shadow md:flex"><ArrowRight className="h-3.5 w-3.5" /></span>}
              </div>
            ))}
          </div>
        )}
      </div>
      {b.note && <p className="mt-6 rounded-xl bg-[#E6F6F9] px-5 py-4 text-sm text-slate-700">{b.note}</p>}
    </Shell>
  )
}

// ---------- stage stepper ----------
export function DpStepperSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; stages?: { id?: string; name: string; text?: string; output?: string }[] } }) {
  const stages = arr(b.stages)
  const [active, setActive] = useState(0)
  const s = stages[active]
  if (!s) return null
  return (
    <Shell theme="white">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} />
      <div className="relative mb-8">
        <div className="absolute left-[8%] right-[8%] top-5 hidden h-0.5 bg-slate-100 md:block" />
        <ol className="relative grid grid-cols-3 gap-y-6 md:grid-cols-6">
          {stages.map((st, i) => (
            <li key={st.id ?? i} className="text-center">
              <button onClick={() => setActive(i)} aria-current={i === active ? 'step' : undefined} className="group inline-flex flex-col items-center gap-2">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm transition-all ${i === active ? 'bg-gradient-to-br from-[#008DAA] to-[#0EA5C6] text-white shadow-lg shadow-[#008DAA]/30' : i < active ? 'bg-[#E6F6F9] text-[#008DAA] ring-1 ring-[#008DAA]/30' : 'bg-white text-slate-500 ring-1 ring-[var(--dp-line)] group-hover:ring-[#008DAA]/50'}`}>{num(i)}</span>
                <span className={`text-sm ${i === active ? 'font-semibold text-[var(--dp-ink)]' : 'text-slate-500'}`}>{st.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div className={`${card} grid overflow-hidden md:grid-cols-[1.4fr_1fr]`} aria-live="polite">
        <div className="p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008DAA]">Stage {active + 1}</p>
          <h3 className="mt-2 text-2xl font-bold text-[var(--dp-ink)]">{s.name}</h3>
          {s.text && <p className="mt-3 leading-relaxed text-[var(--dp-muted)]">{s.text}</p>}
        </div>
        <div className="flex flex-col justify-between gap-6 border-t border-[var(--dp-line)] bg-[var(--dp-soft)] p-7 md:border-l md:border-t-0">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">Output</p><p className="mt-2 font-semibold text-[var(--dp-ink)]">{s.output}</p></div>
          <div className="flex gap-2">
            <button aria-label="Previous stage" disabled={active === 0} onClick={() => setActive(active - 1)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[var(--dp-line)] disabled:opacity-40"><ArrowLeft className="h-4 w-4" /></button>
            <button aria-label="Next stage" disabled={active === stages.length - 1} onClick={() => setActive(active + 1)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#008DAA] text-white disabled:opacity-40"><ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </Shell>
  )
}

// ---------- use cases ----------
type UseCase = { id?: string; icon?: string; title: string; scenario?: string; approach?: string; panelTitle?: string; panelRows?: { id?: string; label: string; status?: string }[] }
export function DpUseCasesSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; items?: UseCase[] } }) {
  const items = arr(b.items)
  const [active, setActive] = useState(0)
  const u = items[active]
  if (!u) return null
  return (
    <Shell theme="soft">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} />
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div role="tablist" aria-orientation="vertical" className="space-y-2.5">
          {items.map((it, i) => (
            <button key={it.id ?? i} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
              className={`flex w-full items-center gap-3 rounded-2xl border bg-white px-4 py-4 text-left transition-all ${i === active ? 'border-[#008DAA]/40 shadow-md shadow-[#008DAA]/10' : 'border-[var(--dp-line)] hover:border-[#008DAA]/30'}`}>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${i === active ? 'bg-[#008DAA] text-white' : 'bg-[#E6F6F9] text-[#008DAA]'}`}><DpIcon name={it.icon} className="h-4 w-4" /></span>
              <span className={`flex-1 font-medium ${i === active ? 'text-[var(--dp-ink)]' : 'text-slate-600'}`}>{it.title}</span>
              <span className="font-mono text-[11px] text-slate-400">{num(i)}</span>
            </button>
          ))}
        </div>
        <div role="tabpanel" className="grid overflow-hidden rounded-3xl bg-[var(--dp-navy)] text-white shadow-2xl md:grid-cols-[1.1fr_1fr]">
          <div className="p-7">
            <p className="font-mono text-xs text-[#5EEAD4]">{num(active)} / {num(items.length - 1)}</p>
            <h3 className="mt-3 text-2xl font-bold">{u.title}</h3>
            {u.scenario && (
              <div className="mt-6 flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/10"><DpIcon name="User" className="h-3.5 w-3.5" /></span>
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Scenario</p><p className="mt-1 text-sm leading-relaxed text-slate-200">{u.scenario}</p></div></div>
            )}
            {u.approach && (
              <div className="mt-5 flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#008DAA]"><DpIcon name="ShieldCheck" className="h-3.5 w-3.5" /></span>
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">With Sentinel DPDP</p><p className="mt-1 text-sm leading-relaxed text-slate-200">{u.approach}</p></div></div>
            )}
          </div>
          <div className="flex items-center border-t border-white/10 bg-white/[0.03] p-6 md:border-l md:border-t-0">
            <div className="w-full rounded-2xl bg-white p-4 text-slate-800 shadow-xl">
              <div className="mb-3 flex items-center gap-2"><IconTile name={u.icon} size="sm" /><p className="text-sm font-semibold">{u.panelTitle ?? u.title}</p></div>
              <ul className="space-y-2">
                {arr(u.panelRows).map((r, i) => <li key={r.id ?? i} className="flex items-center justify-between gap-2 rounded-lg border border-[var(--dp-line)] px-3 py-2 text-xs"><span className="text-slate-700">{r.label}</span><StatusPill status={r.status} /></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  )
}

// ---------- readiness checklist ----------
type Group = { id?: string; icon?: string; title: string; items?: { id?: string; text: string }[] }
export function DpChecklistSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; groups?: Group[] } }) {
  const groups = arr(b.groups)
  const [done, setDone] = useState<Record<string, boolean>>({})
  const total = groups.reduce((n, g) => n + arr(g.items).length, 0)
  const count = Object.values(done).filter(Boolean).length
  return (
    <Shell theme="soft">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl"><SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} /></div>
        <div className={`${card} w-full max-w-xs p-5`} aria-live="polite">
          <div className="flex items-baseline justify-between"><span className="text-sm text-slate-500">Your progress</span><span className="font-mono text-lg font-bold text-[var(--dp-ink)]">{count}/{total}</span></div>
          <div className="mt-3 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-gradient-to-r from-[#008DAA] to-[#0EA5C6] transition-all" style={{ width: `${total ? (count / total) * 100 : 0}%` }} /></div>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, gi) => {
          const items = arr(g.items)
          const groupDone = items.filter((_, ii) => done[`${gi}-${ii}`]).length
          return (
            <fieldset key={g.id ?? gi} className={`${card} p-5`}>
              <legend className="sr-only">{g.title}</legend>
              <div className="mb-4 flex items-center gap-3 border-b border-[var(--dp-line)] pb-3">
                <IconTile name={g.icon} tone={toneOf(null, gi)} size="sm" />
                <p className="flex-1 font-semibold text-[var(--dp-ink)]">{g.title}</p>
                <span className="font-mono text-xs text-slate-400">{groupDone}/{items.length}</span>
              </div>
              <ul className="space-y-3">
                {items.map((it, ii) => {
                  const key = `${gi}-${ii}`
                  return (
                    <li key={it.id ?? ii}>
                      <label className="flex cursor-pointer gap-3 text-sm leading-snug text-slate-600">
                        <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-[#008DAA]" checked={!!done[key]} onChange={(e) => setDone({ ...done, [key]: e.target.checked })} />
                        <span className={done[key] ? 'text-slate-400 line-through' : ''}>{it.text}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </fieldset>
          )
        })}
      </div>
      <p className="mt-6 text-xs text-slate-500">A starting self-assessment, not a certification or a guarantee of compliance. Your ticks are not saved or sent anywhere.</p>
    </Shell>
  )
}

// ---------- FAQ pager ----------
export function DpFaqSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; items?: { id?: string; question: string; answer: string }[]; link?: Lnk } }) {
  const items = arr(b.items)
  const [active, setActive] = useState(0)
  const q = items[active]
  if (!q) return null
  const jsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) }
  return (
    <Shell theme="white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <SectionHead eyebrow={b.eyebrow ?? 'FAQ'} heading={b.heading} intro={b.intro} />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className={`${card} p-2`}>
          <ul role="tablist" aria-orientation="vertical">
            {items.map((it, i) => (
              <li key={it.id ?? i}>
                <button role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`flex w-full gap-3 rounded-xl px-4 py-3.5 text-left text-sm transition-colors ${i === active ? 'bg-[#E6F6F9] font-medium text-[var(--dp-ink)]' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <span className="font-mono text-xs text-[#008DAA]">{num(i)}</span>{it.question}
                </button>
              </li>
            ))}
          </ul>
          {hasLink(b.link) && <Link href={b.link.url} className="m-3 inline-flex items-center gap-1 text-sm font-semibold text-[#008DAA] hover:underline">{b.link.label}<ArrowRight className="h-4 w-4" /></Link>}
        </div>
        <div className={`${card} flex flex-col justify-between p-7 shadow-xl shadow-slate-200/50 lg:sticky lg:top-28 lg:self-start`} role="tabpanel" aria-live="polite">
          <div>
            <p className="font-mono text-sm text-[#008DAA]">{num(active)}</p>
            <h3 className="mt-3 text-2xl font-bold leading-snug text-[var(--dp-ink)]">{q.question}</h3>
            <p className="mt-4 whitespace-pre-line leading-relaxed text-slate-600">{q.answer}</p>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-[var(--dp-line)] pt-5">
            <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0} className="flex items-center gap-1 text-sm text-slate-500 disabled:opacity-40"><ArrowLeft className="h-4 w-4" />Previous</button>
            <span className="font-mono text-xs text-slate-400">{active + 1} / {items.length}</span>
            <button onClick={() => setActive(Math.min(items.length - 1, active + 1))} disabled={active === items.length - 1} className="flex items-center gap-1 text-sm font-semibold text-[#008DAA] disabled:opacity-40">Next<ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </Shell>
  )
}

// ---------- product tabs ----------
type ShowTab = { id?: string; icon?: string; title: string; subtitle?: string; panelHeading?: string; text?: string; chips?: { label: string }[]; visual?: string; visualTitle?: string; data?: { id?: string; label: string; value?: number; status?: string }[]; link?: Lnk }
export function DpShowcaseSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; tabs?: ShowTab[] } }) {
  const tabs = arr(b.tabs)
  const [active, setActive] = useState(0)
  const t = tabs[active]
  if (!t) return null
  const data = arr(t.data)
  const max = Math.max(1, ...data.map((d) => d.value ?? 0))
  return (
    <Shell theme="white">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} center />
      <div className="grid gap-6 lg:grid-cols-[300px_1fr] [&>*]:min-w-0">
        <div role="tablist" aria-orientation="vertical" className="space-y-1 lg:border-r lg:border-[var(--dp-line)] lg:pr-4">
          {tabs.map((x, i) => (
            <button key={x.id ?? i} role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${i === active ? 'bg-[#E6F6F9] ring-1 ring-[#008DAA]/25' : 'hover:bg-slate-50'}`}>
              <IconTile name={x.icon} tone={i === active ? 'teal' : 'sky'} size="sm" />
              <span><span className="block text-sm font-semibold text-[var(--dp-ink)]">{x.title}</span>{x.subtitle && <span className="block text-[11px] uppercase tracking-wide text-slate-400">{x.subtitle}</span>}</span>
            </button>
          ))}
        </div>
        <div role="tabpanel" aria-live="polite">
          <h3 className="text-2xl font-bold text-[var(--dp-ink)]">{t.panelHeading ?? t.title}</h3>
          {t.text && <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{t.text}</p>}
          {arr(t.chips).length > 0 && <ul className="mt-5 flex flex-wrap gap-2">{arr(t.chips).map((c, i) => <li key={i} className="flex items-center gap-1.5 rounded-full border border-[var(--dp-line)] px-3 py-1.5 text-sm text-slate-700"><Check className="h-3.5 w-3.5 text-emerald-600" />{c.label}</li>)}</ul>}
          <MockWindow title={`sentinel / ${t.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="mt-6">
            <div className="p-5">
              <p className="mb-4 text-sm font-semibold text-[var(--dp-ink)]">{t.visualTitle}</p>
              {t.visual === 'records' ? (
                <ul className="space-y-2">{data.map((d, i) => <li key={d.id ?? i} className="flex items-center justify-between rounded-lg border border-[var(--dp-line)] px-3 py-2.5 text-sm"><span className="text-slate-700">{d.label}</span><StatusPill status={d.status} /></li>)}</ul>
              ) : t.visual === 'meters' ? (
                <div className="grid gap-4 sm:grid-cols-2">{data.map((d, i) => (
                  <div key={d.id ?? i}><div className="flex justify-between text-xs text-slate-600"><span>{d.label}</span><span className="font-mono">{d.value ?? 0}%</span></div>
                    <div className="mt-1.5 h-2 rounded-full bg-slate-100"><div className={`h-2 rounded-full ${TONE[toneOf(null, i)].bar}`} style={{ width: `${Math.min(100, d.value ?? 0)}%` }} /></div></div>
                ))}</div>
              ) : (
                <div className="flex h-56 items-end gap-3 border-b border-l border-slate-100 px-2">
                  {data.map((d, i) => (
                    <div key={d.id ?? i} className="flex flex-1 flex-col items-center justify-end gap-1">
                      <span className="font-mono text-[11px] text-slate-500">{d.value}</span>
                      <div className="w-full rounded-t-md bg-gradient-to-t from-[#008DAA] to-[#22C3D6]" style={{ height: `${((d.value ?? 0) / max) * 170}px` }} />
                      <span className="mt-1 h-8 text-center text-[10px] leading-tight text-slate-500">{d.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </MockWindow>
          {hasLink(t.link) && <Link href={t.link.url} className="mt-5 inline-flex items-center gap-1 font-semibold text-[#008DAA] hover:underline">{t.link.label}<ArrowRight className="h-4 w-4" /></Link>}
        </div>
      </div>
    </Shell>
  )
}

// ---------- before and after ----------
export function DpToggleSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; offLabel?: string; onLabel?: string; without?: { id?: string; title: string; text?: string }[]; with?: { id?: string; title: string; text?: string }[] } }) {
  const [on, setOn] = useState(true)
  const list = on ? arr(b.with) : arr(b.without)
  return (
    <Shell theme="soft">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} center />
      <div className="mb-8 flex justify-center">
        <div role="tablist" className="inline-flex rounded-full bg-white p-1 ring-1 ring-[var(--dp-line)]">
          <button role="tab" aria-selected={!on} onClick={() => setOn(false)} className={`rounded-full px-5 py-2 text-sm font-semibold ${!on ? 'bg-[var(--dp-navy)] text-white' : 'text-slate-500'}`}>{b.offLabel ?? 'Without'}</button>
          <button role="tab" aria-selected={on} onClick={() => setOn(true)} className={`rounded-full px-5 py-2 text-sm font-semibold ${on ? 'bg-[var(--dp-navy)] text-white' : 'text-slate-500'}`}>{b.onLabel ?? 'With'}</button>
        </div>
      </div>
      <ul className="mx-auto max-w-2xl space-y-3" role="tabpanel" aria-live="polite">
        {list.map((x, i) => (
          <li key={x.id ?? i} className={`flex gap-4 rounded-2xl p-5 ${on ? 'bg-[var(--dp-navy)] text-white' : 'border border-rose-100 bg-white'}`}>
            {on ? <CircleCheck className="h-6 w-6 shrink-0 text-emerald-400" /> : <CircleX className="h-6 w-6 shrink-0 text-rose-500" />}
            <div><p className={`font-semibold ${on ? 'text-white' : 'text-[var(--dp-ink)]'}`}>{x.title}</p>{x.text && <p className={`mt-1 text-sm ${on ? 'text-slate-300' : 'text-slate-500'}`}>{x.text}</p>}</div>
          </li>
        ))}
      </ul>
    </Shell>
  )
}
