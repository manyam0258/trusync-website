import {
  Award, Banknote, Briefcase, Building2, CheckCircle2, Clock, Cloud, Code, Cpu, Database, Factory, FileText, Globe,
  GraduationCap, HardHat, Headphones, Layout, LineChart, Lock, Phone, Settings, ShieldCheck, ShoppingCart, Sliders,
  Smartphone, Star, Stethoscope, Truck, TrendingUp, UserCheck, Users, Wheat, Zap, type LucideIcon,
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  Award, Banknote, Briefcase, Building2, CheckCircle2, Clock, Cloud, Code, Cpu, Database, Factory, FileText, Globe,
  GraduationCap, HardHat, Headphones, Layout, LineChart, Lock, Phone, Settings, ShieldCheck, ShoppingCart, Sliders,
  Smartphone, Star, Stethoscope, Truck, TrendingUp, UserCheck, Users, Wheat, Zap,
}

export const iconFor = (name?: string | null): LucideIcon => (name && ICONS[name]) || CheckCircle2

// Full class names so Tailwind can see them.
export const GRADIENTS: Record<string, string> = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  orange: 'from-orange-500 to-red-500',
  green: 'from-green-500 to-emerald-500',
  indigo: 'from-indigo-500 to-purple-500',
  teal: 'from-teal-500 to-cyan-500',
  red: 'from-red-500 to-orange-500',
  pink: 'from-pink-500 to-rose-500',
  yellow: 'from-yellow-500 to-orange-500',
}
