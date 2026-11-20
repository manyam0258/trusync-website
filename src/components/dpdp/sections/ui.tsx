import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  Archive, Award, BadgeCheck, Banknote, Bell, Briefcase, Building2, CalendarClock, ChartColumn, ChartLine, CircleCheck, ClipboardCheck,
  Clock, Cloud, Cookie, Cpu, CreditCard, Database, Download, Eye, Factory, FileLock2, FileSearch, FileText, Fingerprint, Gavel,
  GitBranch, Globe, GraduationCap, Handshake, Headphones, HeartPulse, Hotel, Hourglass, House, IdCard, Inbox, KeyRound, Landmark,
  Languages, Layers, Link2, ListChecks, Lock, Mail, MapPin, Megaphone, MessageCircle, Network, PenLine, Plane, Radio, Receipt,
  RefreshCw, Scale, ScanSearch, Search, Send, Server, Settings, Shield, ShieldCheck, ShoppingBag, ShoppingCart, Siren, Smartphone,
  Sparkles, Store, Target, Trash2, TriangleAlert, Truck, User, UserCheck, Users, Utensils, Wifi, Workflow, Zap,
  type LucideIcon,
} from 'lucide-react'

/**
 * Shared look of the Sentinel DPDP sections: TruSync teal on white and soft grey, with deep navy bands.
 * Tokens live in globals.css (--dp-*). Keep every section on these helpers so the pages stay consistent.
 */

const ICONS: Record<string, LucideIcon> = {
  Archive, Award, BadgeCheck, Banknote, Bell, Briefcase, Building2, CalendarClock, ChartColumn, ChartLine, CircleCheck, ClipboardCheck,
  Clock, Cloud, Cookie, Cpu, CreditCard, Database, Download, Eye, Factory, FileLock2, FileSearch, FileText, Fingerprint, Gavel,
  GitBranch, Globe, GraduationCap, Handshake, Headphones, HeartPulse, Hotel, Hourglass, House, IdCard, Inbox, KeyRound, Landmark,
  Languages, Layers, Link2, ListChecks, Lock, Mail, MapPin, Megaphone, MessageCircle, Network, PenLine, Plane, Radio, Receipt,
  RefreshCw, Scale, ScanSearch, Search, Send, Server, Settings, Shield, ShieldCheck, ShoppingBag, ShoppingCart, Siren, Smartphone,
  Sparkles, Store, Target, Trash2, TriangleAlert, Truck, User, UserCheck, Users, Utensils, Wifi, Workflow, Zap,
}

export type Tone = 'teal' | 'sky' | 'violet' | 'rose' | 'amber' | 'emerald' | 'indigo'
export const TONE: Record<Tone, { tile: string; text: string; bar: string }> = {
  teal: { tile: 'bg-[#E6F6F9] text-[#008DAA]', text: 'text-[#008DAA]', bar: 'bg-[#008DAA]' },
  sky: { tile: 'bg-sky-50 text-sky-600', text: 'text-sky-600', bar: 'bg-sky-500' },
  violet: { tile: 'bg-violet-50 text-violet-600', text: 'text-violet-600', bar: 'bg-violet-500' },
  rose: { tile: 'bg-rose-50 text-rose-600', text: 'text-rose-600', bar: 'bg-rose-500' },
  amber: { tile: 'bg-amber-50 text-amber-600', text: 'text-amber-600', bar: 'bg-amber-500' },
  emerald: { tile: 'bg-emerald-50 text-emerald-600', text: 'text-emerald-600', bar: 'bg-emerald-500' },
  indigo: { tile: 'bg-indigo-50 text-indigo-600', text: 'text-indigo-600', bar: 'bg-indigo-500' },
}
const TONE_ORDER: Tone[] = ['teal', 'violet', 'sky', 'emerald', 'rose', 'amber', 'indigo']
export const toneOf = (value: unknown, index = 0): Tone => (typeof value === 'string' && value in TONE ? (value as Tone) : TONE_ORDER[index % TONE_ORDER.length])

export function DpIcon({ name, className = 'h-5 w-5' }: { name?: string | null; className?: string }) {
  const Icon = (name && ICONS[name]) || Shield
  return <Icon className={className} aria-hidden strokeWidth={1.75} />
}

export function IconTile({ name, tone = 'teal', size = 'md' }: { name?: string | null; tone?: Tone; size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'h-8 w-8 rounded-lg' : 'h-11 w-11 rounded-xl'
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${box} ${TONE[tone].tile}`}>
      <DpIcon name={name} className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
    </span>
  )
}

/** Words between *asterisks* get the teal gradient. */
export function Highlight({ text, dark }: { text?: string | null; dark?: boolean }) {
  if (!text) return null
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith('*') && part.endsWith('*') && part.length > 2 ? (
          <span key={i} className={`bg-gradient-to-r bg-clip-text text-transparent ${dark ? 'from-[#5EEAD4] to-[#38BDF8]' : 'from-[#008DAA] to-[#0EA5C6]'}`}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

export type Theme = 'white' | 'soft' | 'dark'
export const SURFACE: Record<Theme, string> = {
  white: 'bg-white',
  soft: 'bg-[var(--dp-soft)] border-y border-[var(--dp-line)]',
  dark: 'bg-[var(--dp-navy)] text-white',
}

export function Shell({ theme = 'white', id, children, className = '' }: { theme?: Theme; id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`${SURFACE[theme]} py-16 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, dark }: { children?: ReactNode; dark?: boolean }) {
  if (!children) return null
  return <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? 'text-[#5EEAD4]' : 'text-[#008DAA]'}`}>{children}</p>
}

export function SectionHead({ eyebrow, heading, intro, dark, center, h1 }: { eyebrow?: string | null; heading?: string | null; intro?: string | null; dark?: boolean; center?: boolean; h1?: boolean }) {
  if (!eyebrow && !heading && !intro) return null
  const H = h1 ? 'h1' : 'h2'
  return (
    <div className={`mb-10 md:mb-12 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      {heading && (
        <H className={`text-3xl font-bold leading-tight tracking-tight md:text-[2.5rem] ${dark ? 'text-white' : 'text-[var(--dp-ink)]'}`}>
          <Highlight text={heading} dark={dark} />
        </H>
      )}
      {intro && <p className={`mt-4 whitespace-pre-line text-base leading-relaxed md:text-lg ${dark ? 'text-slate-300' : 'text-[var(--dp-muted)]'}`}>{intro}</p>}
    </div>
  )
}

export const card = 'rounded-2xl border border-[var(--dp-line)] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
export const darkCard = 'rounded-2xl border border-white/10 bg-white/[0.04]'

const STATUS_STYLE: Record<string, string> = {
  granted: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  on: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  withdrawn: 'bg-rose-50 text-rose-700 ring-rose-200',
  off: 'bg-slate-100 text-slate-500 ring-slate-200',
  pending: 'bg-amber-50 text-amber-700 ring-amber-200',
  partial: 'bg-amber-50 text-amber-700 ring-amber-200',
  info: 'bg-sky-50 text-sky-700 ring-sky-200',
}
export function StatusPill({ status }: { status?: string | null }) {
  if (!status) return null
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${STATUS_STYLE[status] ?? STATUS_STYLE.info}`}>{status}</span>
}

type LinkValue = { label?: string | null; url?: string | null } | null | undefined
export const hasLink = (l: LinkValue): l is { label: string; url: string } => !!l?.label && !!l?.url

export function Btn({ link, variant = 'primary', className = '' }: { link: LinkValue; variant?: 'primary' | 'outline' | 'dark' | 'light'; className?: string }) {
  if (!hasLink(link)) return null
  const styles = {
    primary: 'bg-[#008DAA] text-white shadow-lg shadow-[#008DAA]/25 hover:bg-[#007891]',
    outline: 'border border-[var(--dp-line)] bg-white text-[var(--dp-ink)] hover:border-[#008DAA]/50',
    dark: 'bg-[var(--dp-navy)] text-white hover:bg-black',
    light: 'border border-white/30 bg-white/10 text-white hover:bg-white/20',
  }[variant]
  return (
    <Link href={link.url} className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${styles} ${className}`}>
      {link.label}
    </Link>
  )
}

/** A window frame for drawn product screens. */
export function MockWindow({ title, children, className = '' }: { title?: string | null; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-[var(--dp-line)] bg-white shadow-[0_20px_60px_-20px_rgba(0,64,90,0.25)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-[var(--dp-line)] bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        {title && <span className="ml-3 truncate rounded-md bg-white px-3 py-1 font-mono text-[11px] text-slate-500 ring-1 ring-[var(--dp-line)]">{title}</span>}
        <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />LIVE</span>
      </div>
      {children}
    </div>
  )
}

export const num = (i: number) => String(i + 1).padStart(2, '0')
