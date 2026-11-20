import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, House, ShieldCheck } from 'lucide-react'

import {
  Btn, card, darkCard, DpIcon, Eyebrow, hasLink, Highlight, IconTile, MockWindow, num, SectionHead, Shell, StatusPill, TONE, toneOf,
  type Theme,
} from './ui'

type Lnk = { label?: string | null; url?: string | null }
type Row = { id?: string; label: string; meta?: string | null; status?: string | null }
const arr = <T,>(v: T[] | null | undefined): T[] => (Array.isArray(v) ? v : [])

// ---------- hero ----------
type HeroProps = {
  layout?: 'split' | 'centered'; breadcrumb?: { label: string; url?: string | null }[]; eyebrow?: string; heading: string; subheading?: string; note?: string
  primary?: Lnk; secondary?: Lnk; chips?: { label: string }[]; visual?: 'toggles' | 'record' | 'dashboard' | 'none'
  visualTitle?: string; visualSubtitle?: string; visualRows?: Row[]; statValue?: string; statLabel?: string; toast?: string
}

function HeroVisual(b: HeroProps) {
  const rows = arr(b.visualRows)
  if (b.visual === 'none' || !b.visual) return null
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[#CFF1F6] via-white to-[#E0F2FE] blur-2xl" aria-hidden />
      {b.visual === 'dashboard' ? (
        <MockWindow title={b.visualTitle ?? 'sentinel / overview'}>
          <div className="grid grid-cols-3 gap-3 p-5">
            {rows.slice(0, 3).map((r, i) => (
              <div key={r.id ?? i} className="rounded-xl border border-[var(--dp-line)] p-3">
                <p className="text-[11px] text-slate-500">{r.label}</p>
                <p className="mt-1 text-xl font-bold text-[var(--dp-ink)]">{r.meta}</p>
                <div className="mt-2 h-1.5 rounded-full bg-slate-100"><div className={`h-1.5 rounded-full ${TONE[toneOf(null, i)].bar}`} style={{ width: `${55 + i * 15}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="space-y-2 px-5 pb-5">
            {rows.slice(3).map((r, i) => (
              <div key={r.id ?? i} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs">
                <span className="font-medium text-slate-700">{r.label}</span><StatusPill status={r.status} />
              </div>
            ))}
          </div>
        </MockWindow>
      ) : (
        <div className="rounded-2xl border border-[var(--dp-line)] bg-white p-5 shadow-[0_20px_60px_-20px_rgba(0,64,90,0.3)]">
          <div className="mb-4 flex items-center gap-3">
            <IconTile name={b.visual === 'record' ? 'FileText' : 'UserCheck'} />
            <div>
              <p className="text-sm font-semibold text-[var(--dp-ink)]">{b.visualTitle}</p>
              {b.visualSubtitle && <p className="font-mono text-[11px] text-slate-500">{b.visualSubtitle}</p>}
            </div>
          </div>
          <ul className="space-y-2">
            {rows.map((r, i) => (
              <li key={r.id ?? i} className="flex items-center justify-between gap-3 rounded-xl border border-[var(--dp-line)] px-3 py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-800">{r.label}</p>
                  {r.meta && <p className="truncate font-mono text-[10px] text-slate-500">{r.meta}</p>}
                </div>
                {b.visual === 'toggles' ? (
                  <span aria-hidden className={`relative h-5 w-9 shrink-0 rounded-full ${r.status === 'off' || r.status === 'withdrawn' ? 'bg-slate-200' : 'bg-[#008DAA]'}`}>
                    <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow ${r.status === 'off' || r.status === 'withdrawn' ? 'left-0.5' : 'left-4'}`} />
                  </span>
                ) : (
                  <StatusPill status={r.status} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {b.toast && (
        <div className="absolute -right-3 -top-5 flex items-center gap-2 rounded-xl border border-[var(--dp-line)] bg-white px-3 py-2 shadow-lg">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-white"><Check className="h-4 w-4" /></span>
          <span className="text-xs font-semibold text-slate-700">{b.toast}</span>
        </div>
      )}
      {b.statValue && (
        <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-[var(--dp-navy)] px-4 py-3 text-white shadow-xl">
          <ShieldCheck className="h-6 w-6 text-[#5EEAD4]" />
          <div><p className="text-lg font-bold leading-none">{b.statValue}</p>{b.statLabel && <p className="mt-1 text-[11px] text-slate-300">{b.statLabel}</p>}</div>
        </div>
      )}
    </div>
  )
}

export function DpHeroSection({ block: b, first }: { block: HeroProps; first?: boolean }) {
  const centered = b.layout === 'centered'
  const crumbs = arr(b.breadcrumb)
  return (
    <section className={`relative overflow-hidden bg-gradient-to-b from-[#F1FAFC] to-white ${first ? 'pt-28 md:pt-32' : 'pt-12'} pb-16 md:pb-24`}>
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,141,170,0.12),transparent_55%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            <House className="h-3.5 w-3.5" aria-hidden />
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.url && i < crumbs.length - 1 ? <Link href={c.url} className="hover:text-[#008DAA]">{c.label}</Link> : <span className={i === crumbs.length - 1 ? 'font-medium text-slate-800' : ''}>{c.label}</span>}
                {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
              </span>
            ))}
          </nav>
        )}
        <div className={centered ? 'mx-auto max-w-4xl text-center' : 'grid items-center gap-14 lg:grid-cols-2'}>
          <div>
            {b.eyebrow && (
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#008DAA]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#008DAA] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#008DAA]" />{b.eyebrow}
              </span>
            )}
            <h1 className={`font-bold leading-[1.08] tracking-tight text-[var(--dp-ink)] ${centered ? 'text-4xl md:text-6xl' : 'text-4xl md:text-5xl'}`}><Highlight text={b.heading} /></h1>
            {b.subheading && <p className={`mt-6 text-lg leading-relaxed text-slate-600 ${centered ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>{b.subheading}</p>}
            {b.note && <p className={`mt-4 text-sm leading-relaxed text-slate-500 ${centered ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>{b.note}</p>}
            {(hasLink(b.primary) || hasLink(b.secondary)) && (
              <div className={`mt-8 flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
                <Btn link={b.primary} /><Btn link={b.secondary} variant="outline" />
              </div>
            )}
            {arr(b.chips).length > 0 && (
              <ul className={`mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 ${centered ? 'justify-center' : ''}`}>
                {arr(b.chips).map((c, i) => <li key={i} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-[#008DAA]" />{c.label}</li>)}
              </ul>
            )}
          </div>
          {!centered && <HeroVisual {...b} />}
        </div>
      </div>
    </section>
  )
}

// ---------- card grids ----------
type CardItem = { id?: string; icon?: string; tone?: string; tag?: string; title: string; text?: string; points?: { label: string }[]; url?: string }
const COLS: Record<string, string> = { '2': 'md:grid-cols-2', '3': 'md:grid-cols-2 lg:grid-cols-3', '4': 'sm:grid-cols-2 lg:grid-cols-4' }

export function DpCardsSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; theme?: Theme; variant?: string; columns?: string; items?: CardItem[]; note?: string } }) {
  const dark = b.theme === 'dark'
  const items = arr(b.items)
  return (
    <Shell theme={b.theme ?? 'white'}>
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} dark={dark} />
      <div className={`grid gap-5 ${COLS[b.columns ?? '4'] ?? COLS['4']}`}>
        {items.map((it, i) => {
          const tone = toneOf(it.tone, i)
          const body = (
            <div className={`group relative h-full p-6 transition-shadow ${dark ? darkCard : card} ${it.url ? 'hover:shadow-lg hover:shadow-slate-200/60' : ''}`}>
              {b.variant === 'tagged' ? (
                it.tag && <span className={`mb-4 inline-block rounded-full px-2.5 py-1 font-mono text-[11px] font-medium ${TONE[tone].tile}`}>{it.tag}</span>
              ) : b.variant === 'compact' ? null : (
                <div className="mb-5 flex items-start justify-between">
                  <IconTile name={it.icon} tone={tone} />
                  {b.variant === 'numbered' && <span className={`font-mono text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{num(i)}</span>}
                </div>
              )}
              <div className={b.variant === 'compact' ? 'flex items-start gap-4' : ''}>
                {b.variant === 'compact' && <IconTile name={it.icon} tone={tone} size="sm" />}
                <div>
                  <h3 className={`text-lg font-semibold leading-snug ${dark ? 'text-white' : 'text-[var(--dp-ink)]'}`}>{it.title}</h3>
                  {b.variant === 'numbered' && <span className={`mt-3 block h-0.5 w-7 rounded ${TONE[tone].bar}`} aria-hidden />}
                  {it.text && <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-[var(--dp-muted)]'}`}>{it.text}</p>}
                  {arr(it.points).length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {arr(it.points).map((p, j) => (
                        <li key={j} className={`flex gap-2 text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#008DAA]" />{p.label}</li>
                      ))}
                    </ul>
                  )}
                  {it.url && <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#008DAA]">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>}
                </div>
              </div>
            </div>
          )
          return it.url ? <Link key={it.id ?? i} href={it.url} className="block">{body}</Link> : <div key={it.id ?? i}>{body}</div>
        })}
      </div>
      {b.note && <p className={`mt-8 rounded-xl px-5 py-4 text-sm ${dark ? 'bg-white/5 text-slate-300' : 'bg-[#E6F6F9] text-slate-700'}`}>{b.note}</p>}
    </Shell>
  )
}

// ---------- timeline ----------
export function DpTimelineSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; items?: { id?: string; date: string; label?: string; title: string }[]; showToday?: boolean } }) {
  const items = arr(b.items).slice().sort((x, y) => +new Date(x.date) - +new Date(y.date))
  if (!items.length) return null
  const start = +new Date(items[0].date)
  const end = +new Date(items[items.length - 1].date)
  const pos = (d: number) => (end === start ? 0 : Math.min(100, Math.max(0, ((d - start) / (end - start)) * 100)))
  // Server-rendered and re-cached every few minutes, so reading the clock here keeps the "Today" marker current.
  // eslint-disable-next-line react-hooks/purity
  const today = pos(Date.now())
  return (
    <Shell theme="white">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} />
      <div className="relative hidden pt-10 md:block">
        <div className="absolute left-0 right-0 top-[3.1rem] h-1 rounded-full bg-slate-100" />
        <div className="absolute left-0 top-[3.1rem] h-1 rounded-full bg-gradient-to-r from-[#008DAA] to-[#0EA5C6]" style={{ width: `${today}%` }} />
        {b.showToday !== false && (
          <div className="absolute top-0 -translate-x-1/2 text-center" style={{ left: `${today}%` }}>
            <span className="rounded-full bg-[var(--dp-navy)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Today</span>
          </div>
        )}
        <div className="relative flex justify-between">
          {items.map((it, i) => (
            <div key={it.id ?? i} className={`w-1/3 ${i === 0 ? 'text-left' : i === items.length - 1 ? 'text-right' : 'text-center'}`}>
              <span className={`inline-block h-5 w-5 rounded-full border-2 ${pos(+new Date(it.date)) <= today ? 'border-[#008DAA] bg-[#008DAA] ring-4 ring-[#008DAA]/15' : 'border-slate-300 bg-white'}`} />
              <p className="mt-3 font-mono text-xs text-[#008DAA]">{it.label}</p>
              <p className="mt-1 font-semibold text-[var(--dp-ink)]">{it.title}</p>
            </div>
          ))}
        </div>
      </div>
      <ol className="space-y-5 border-l-2 border-slate-100 pl-6 md:hidden">
        {items.map((it, i) => (
          <li key={it.id ?? i} className="relative"><span className="absolute -left-[1.95rem] top-1 h-3.5 w-3.5 rounded-full bg-[#008DAA]" /><p className="font-mono text-xs text-[#008DAA]">{it.label}</p><p className="font-semibold text-[var(--dp-ink)]">{it.title}</p></li>
        ))}
      </ol>
    </Shell>
  )
}

// ---------- roles ----------
export function DpRolesSection({ block: b }: { block: Record<string, unknown> & { chips?: { label: string }[] } }) {
  const s = (k: string) => (typeof b[k] === 'string' ? (b[k] as string) : undefined)
  return (
    <Shell theme="soft">
      <SectionHead eyebrow={s('eyebrow')} heading={s('heading')} intro={s('intro')} />
      <div className={`grid gap-5 ${s('secondaryTitle') ? 'md:grid-cols-2' : 'max-w-3xl'}`}>
        <div className="rounded-2xl bg-[var(--dp-navy)] p-7 text-white shadow-xl">
          <Eyebrow dark>{s('primaryLabel')}</Eyebrow>
          <h3 className="text-2xl font-bold">{s('primaryTitle')}</h3>
          <p className="mt-3 leading-relaxed text-slate-300">{s('primaryText')}</p>
        </div>
        {s('secondaryTitle') && (
          <div className={`${card} p-7`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{s('secondaryLabel')}</p>
            <h3 className="text-2xl font-bold text-[var(--dp-ink)]">{s('secondaryTitle')}</h3>
            <p className="mt-3 leading-relaxed text-[var(--dp-muted)]">{s('secondaryText')}</p>
          </div>
        )}
      </div>
      {arr(b.chips).length > 0 && (
        <div className="mt-8">
          {s('chipsTitle') && <p className="mb-3 font-semibold text-[var(--dp-ink)]">{s('chipsTitle')}</p>}
          <ul className="flex flex-wrap gap-2">{arr(b.chips).map((c, i) => <li key={i} className="rounded-full border border-[var(--dp-line)] bg-white px-4 py-2 text-sm text-slate-700">{c.label}</li>)}</ul>
        </div>
      )}
      {s('note') && <p className="mt-5 text-sm text-slate-500">{s('note')}</p>}
    </Shell>
  )
}

// ---------- challenges and answers ----------
export function DpCompareSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; leftLabel?: string; rightLabel?: string; rows?: { id?: string; problem: string; problemText?: string; solution: string; solutionText?: string; url?: string }[]; note?: string } }) {
  return (
    <Shell theme="dark">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} dark />
      <div className="mb-3 hidden grid-cols-[1fr_auto_1fr] gap-6 px-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:grid">
        <span>{b.leftLabel}</span><span className="w-8" /><span>{b.rightLabel}</span>
      </div>
      <div className="space-y-3">
        {arr(b.rows).map((r, i) => (
          <div key={r.id ?? i} className={`${darkCard} grid items-center gap-4 p-5 md:grid-cols-[1fr_auto_1fr] md:gap-6`}>
            <div><p className="font-semibold text-white">{r.problem}</p>{r.problemText && <p className="mt-1 text-sm text-slate-400">{r.problemText}</p>}</div>
            <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-[#008DAA]/20 text-[#5EEAD4] md:flex"><ArrowRight className="h-4 w-4" /></span>
            <div>
              {r.url ? <Link href={r.url} className="font-semibold text-[#5EEAD4] hover:underline">{r.solution}</Link> : <p className="font-semibold text-[#5EEAD4]">{r.solution}</p>}
              {r.solutionText && <p className="mt-1 text-sm text-slate-300">{r.solutionText}</p>}
            </div>
          </div>
        ))}
      </div>
      {b.note && <p className="mt-6 text-sm text-slate-400">{b.note}</p>}
    </Shell>
  )
}

// ---------- system stack ----------
function StackColumn({ label, items, tint }: { label?: string; items?: { label: string }[]; tint: string }) {
  return (
    <div className={`${card} p-5`}>
      <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${tint}`}>{label}</p>
      <ul className="space-y-2">{arr(items).map((x, i) => <li key={i} className="rounded-lg bg-[var(--dp-soft)] px-3 py-2.5 text-sm text-slate-700">{x.label}</li>)}</ul>
    </div>
  )
}

export function DpStackSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; leftLabel?: string; left?: { label: string }[]; coreTitle?: string; coreSubtitle?: string; coreLabel?: string; core?: { label: string }[]; rightLabel?: string; right?: { label: string }[] } }) {
  return (
    <Shell theme="white">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} />
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        <StackColumn label={b.leftLabel} items={b.left} tint="text-violet-600" />
        <div className="rounded-2xl bg-[var(--dp-navy)] p-5 shadow-2xl lg:-my-3">
          <div className="rounded-xl border border-[#5EEAD4]/30 bg-gradient-to-br from-[#008DAA]/30 to-transparent p-4">
            <p className="flex items-center gap-2 font-bold text-white"><ShieldCheck className="h-5 w-5 text-[#5EEAD4]" />{b.coreTitle}</p>
            {b.coreSubtitle && <p className="mt-1 text-sm text-slate-300">{b.coreSubtitle}</p>}
          </div>
          <p className="mb-3 mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">{b.coreLabel}</p>
          <ul className="space-y-2">{arr(b.core).map((x, i) => <li key={i} className="rounded-lg border border-white/10 px-3 py-2.5 text-sm text-slate-200">{x.label}</li>)}</ul>
        </div>
        <StackColumn label={b.rightLabel} items={b.right} tint="text-[#008DAA]" />
      </div>
    </Shell>
  )
}

// ---------- call to action ----------
export function DpCtaSection({ block: b }: { block: { heading: string; text?: string; primary?: Lnk; secondary?: Lnk } }) {
  return (
    <section className="bg-white px-4 py-16">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#008DAA] via-[#0A8FB0] to-[#0B4F7A] px-6 py-14 text-center text-white shadow-2xl shadow-[#008DAA]/25 md:px-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" aria-hidden />
        <h2 className="relative text-3xl font-bold tracking-tight md:text-4xl">{b.heading}</h2>
        {b.text && <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{b.text}</p>}
        <div className="relative mt-8 flex flex-wrap justify-center gap-3"><Btn link={b.primary} variant="dark" /><Btn link={b.secondary} variant="light" /></div>
      </div>
    </section>
  )
}

// ---------- capabilities and records table ----------
type RecordRow = { id?: string; ref: string; purpose: string; detail?: string; channel?: string; status?: string; source?: string; version?: string; time?: string }
export function DpRecordsSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; capabilities?: CardItem[]; tableTitle?: string; tableSubtitle?: string; tableButton?: string; rows?: RecordRow[] } }) {
  return (
    <Shell theme="white">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {arr(b.capabilities).map((c, i) => (
          <div key={c.id ?? i} className={`${card} flex gap-3 p-4 ${i === 1 ? 'ring-2 ring-[#008DAA]/30' : ''}`}>
            <IconTile name={c.icon} tone={toneOf(c.tone, i)} size="sm" />
            <div><p className="text-sm font-semibold text-[var(--dp-ink)]">{c.title}</p>{c.text && <p className="mt-1 text-xs leading-relaxed text-slate-500">{c.text}</p>}</div>
          </div>
        ))}
      </div>
      {arr(b.rows).length > 0 && (
        <MockWindow title="sentinel / reports / consent-records" className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-5">
            <div><p className="font-semibold text-[var(--dp-ink)]">{b.tableTitle}</p>{b.tableSubtitle && <p className="text-xs text-slate-500">{b.tableSubtitle}</p>}</div>
            {b.tableButton && <span className="rounded-lg border border-[var(--dp-line)] px-3 py-1.5 text-xs font-semibold text-slate-700">{b.tableButton}</span>}
          </div>
          <div className="overflow-x-auto p-5">
            <table className="w-full min-w-[720px] text-left text-xs">
              <thead className="text-[10px] uppercase tracking-wider text-slate-400">
                <tr>{['Ref', 'Purpose', 'Detail', 'Channel', 'Status', 'Source', 'Notice', 'Time'].map((h) => <th key={h} className="border-b border-[var(--dp-line)] pb-2 pr-4 font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody>
                {arr(b.rows).map((r, i) => (
                  <tr key={r.id ?? i} className="border-b border-slate-50 last:border-0">
                    <td className="py-2.5 pr-4 font-mono text-slate-500">{r.ref}</td><td className="pr-4 font-medium text-slate-800">{r.purpose}</td>
                    <td className="pr-4 text-slate-500">{r.detail}</td><td className="pr-4 text-slate-600">{r.channel}</td><td className="pr-4"><StatusPill status={r.status} /></td>
                    <td className="pr-4 text-slate-600">{r.source}</td><td className="pr-4 font-mono text-slate-500">{r.version}</td><td className="font-mono text-slate-500">{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MockWindow>
      )}
    </Shell>
  )
}

// ---------- hub diagram ----------
type Node = { id?: string; icon?: string; label: string }
function HubRow({ items }: { items?: Node[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
      {arr(items).map((n, i) => (
        <div key={n.id ?? i} className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3 text-center">
          <DpIcon name={n.icon} className="h-4 w-4 text-[#5EEAD4]" /><span className="text-[11px] text-slate-300">{n.label}</span>
        </div>
      ))}
    </div>
  )
}
export function DpHubSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; topLabel?: string; top?: Node[]; coreName?: string; coreStatus?: string; bottomLabel?: string; bottom?: Node[]; points?: CardItem[] } }) {
  return (
    <Shell theme="dark">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} dark />
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className={`${darkCard} p-5`}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{b.topLabel}</p>
          <HubRow items={b.top} />
          <div className="my-4 flex flex-col items-center">
            <span className="h-5 w-px bg-gradient-to-b from-transparent to-[#5EEAD4]" />
            <div className="flex w-full items-center justify-between gap-3 rounded-xl border border-[#5EEAD4]/40 bg-gradient-to-r from-[#008DAA]/25 to-[#0EA5C6]/10 px-4 py-3">
              <span className="flex items-center gap-2 font-semibold text-white"><ShieldCheck className="h-5 w-5 text-[#5EEAD4]" />{b.coreName}</span>
              {b.coreStatus && <span className="font-mono text-[11px] text-[#5EEAD4]">{b.coreStatus}</span>}
            </div>
            <span className="h-5 w-px bg-gradient-to-b from-[#5EEAD4] to-transparent" />
          </div>
          <HubRow items={b.bottom} />
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{b.bottomLabel}</p>
        </div>
        <div className="space-y-3">
          {arr(b.points).map((p, i) => (
            <div key={p.id ?? i} className={`flex gap-4 p-5 ${i === arr(b.points).length - 1 ? 'rounded-2xl border border-[#5EEAD4]/40 bg-[#008DAA]/15' : darkCard}`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#008DAA] text-white"><DpIcon name={p.icon} /></span>
              <div><p className="font-semibold text-white">{p.title}</p>{p.text && <p className="mt-1 text-sm text-slate-300">{p.text}</p>}</div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

// ---------- workflow ----------
export function DpWorkflowSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; steps?: { id?: string; icon?: string; title: string; text?: string; code?: string }[] } }) {
  const steps = arr(b.steps)
  return (
    <Shell theme="white">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} />
      <ol className={`grid gap-4 sm:grid-cols-2 ${steps.length > 4 ? 'lg:grid-cols-6' : 'lg:grid-cols-4'}`}>
        {steps.map((s, i) => (
          <li key={s.id ?? i} className={`${card} relative overflow-hidden p-4 ${i === 0 ? 'ring-2 ring-[#008DAA]/40' : ''}`}>
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#008DAA] to-[#0EA5C6]" aria-hidden />
            <div className="mt-1 flex items-center justify-between"><IconTile name={s.icon} size="sm" /><span className="font-mono text-[11px] text-slate-400">{num(i)}</span></div>
            <p className="mt-4 text-sm font-semibold text-[var(--dp-ink)]">{s.title}</p>
            {s.text && <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.text}</p>}
            {s.code && <p className="mt-3 truncate rounded-md bg-[var(--dp-soft)] px-2 py-1 font-mono text-[10px] text-slate-500">{s.code}</p>}
          </li>
        ))}
      </ol>
    </Shell>
  )
}

// ---------- resources ----------
const ART = ['from-[#0B1F33] via-[#0B3B52] to-[#008DAA]', 'from-[#008DAA] via-[#0EA5C6] to-[#7DD3FC]', 'from-[#1E1B4B] via-[#3730A3] to-[#0EA5C6]', 'from-[#064E3B] via-[#047857] to-[#34D399]']
export function DpResourcesSection({ block: b }: { block: { eyebrow?: string; heading?: string; intro?: string; items?: { id?: string; kind?: string; title: string; text?: string; meta?: string; url?: string }[]; link?: Lnk } }) {
  return (
    <Shell theme="soft">
      <SectionHead eyebrow={b.eyebrow} heading={b.heading} intro={b.intro} center />
      <div className="grid gap-6 md:grid-cols-3">
        {arr(b.items).map((r, i) => {
          const inner = (
            <article className={`${card} group h-full overflow-hidden transition-shadow hover:shadow-xl hover:shadow-slate-200/70`}>
              <div className={`relative h-40 bg-gradient-to-br ${ART[i % ART.length]}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">Sentinel DPDP</span>
                  <p className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-white">{r.title}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#008DAA]">{r.kind}</p>
                <h3 className="mt-2 font-semibold text-[var(--dp-ink)]">{r.title}</h3>
                {r.text && <p className="mt-2 text-sm text-slate-500">{r.text}</p>}
                {r.meta && <p className="mt-3 text-xs text-slate-400">{r.meta}</p>}
              </div>
            </article>
          )
          return r.url ? <Link key={r.id ?? i} href={r.url}>{inner}</Link> : <div key={r.id ?? i}>{inner}</div>
        })}
      </div>
      {hasLink(b.link) && <div className="mt-8 text-center"><Link href={b.link.url} className="inline-flex items-center gap-1 text-sm font-semibold text-[#008DAA] hover:underline">{b.link.label}<ArrowRight className="h-4 w-4" /></Link></div>}
    </Shell>
  )
}
