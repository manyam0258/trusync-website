import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/** Adds the Sentinel DPDP page sections (src/blocks/dpdp.ts) to pages and page versions. */

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_dp_hero_visual_rows_status" AS ENUM('granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info');
  CREATE TYPE "public"."enum_pages_blocks_dp_hero_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_pages_blocks_dp_hero_visual" AS ENUM('toggles', 'record', 'dashboard', 'none');
  CREATE TYPE "public"."enum_pages_blocks_dp_cards_items_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_cards_items_tone" AS ENUM('teal', 'sky', 'violet', 'rose', 'amber', 'emerald', 'indigo');
  CREATE TYPE "public"."enum_pages_blocks_dp_cards_theme" AS ENUM('white', 'soft', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_dp_cards_variant" AS ENUM('numbered', 'tagged', 'points', 'compact');
  CREATE TYPE "public"."enum_pages_blocks_dp_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_dp_flow_tabs_steps_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_flow_tabs_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_use_cases_items_panel_rows_status" AS ENUM('granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info');
  CREATE TYPE "public"."enum_pages_blocks_dp_use_cases_items_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_checklist_groups_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_showcase_tabs_data_status" AS ENUM('granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info');
  CREATE TYPE "public"."enum_pages_blocks_dp_showcase_tabs_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_showcase_tabs_visual" AS ENUM('bars', 'records', 'meters');
  CREATE TYPE "public"."enum_pages_blocks_dp_records_capabilities_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_records_rows_status" AS ENUM('granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info');
  CREATE TYPE "public"."enum_pages_blocks_dp_hub_top_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_hub_bottom_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_hub_points_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_workflow_steps_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum_pages_blocks_dp_resources_items_tone" AS ENUM('teal', 'sky', 'violet', 'rose', 'amber', 'emerald', 'indigo');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_hero_visual_rows_status" AS ENUM('granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_hero_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_hero_visual" AS ENUM('toggles', 'record', 'dashboard', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_cards_items_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_cards_items_tone" AS ENUM('teal', 'sky', 'violet', 'rose', 'amber', 'emerald', 'indigo');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_cards_theme" AS ENUM('white', 'soft', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_cards_variant" AS ENUM('numbered', 'tagged', 'points', 'compact');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_flow_tabs_steps_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_flow_tabs_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_use_cases_items_panel_rows_status" AS ENUM('granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_use_cases_items_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_checklist_groups_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_showcase_tabs_data_status" AS ENUM('granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_showcase_tabs_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_showcase_tabs_visual" AS ENUM('bars', 'records', 'meters');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_records_capabilities_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_records_rows_status" AS ENUM('granted', 'withdrawn', 'pending', 'partial', 'on', 'off', 'info');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_hub_top_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_hub_bottom_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_hub_points_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_workflow_steps_icon" AS ENUM('Shield', 'ShieldCheck', 'UserCheck', 'Users', 'User', 'Database', 'FileText', 'Receipt', 'Store', 'ShoppingCart', 'ShoppingBag', 'RefreshCw', 'GitBranch', 'Bell', 'Mail', 'MessageCircle', 'Smartphone', 'Globe', 'Lock', 'KeyRound', 'Eye', 'Search', 'Scale', 'Gavel', 'Clock', 'CalendarClock', 'TriangleAlert', 'CircleCheck', 'ClipboardCheck', 'ListChecks', 'Layers', 'Server', 'Cloud', 'Network', 'Workflow', 'Zap', 'Truck', 'Building2', 'Landmark', 'HeartPulse', 'GraduationCap', 'Factory', 'Plane', 'House', 'Utensils', 'Cpu', 'ChartColumn', 'ChartLine', 'Fingerprint', 'Radio', 'Cookie', 'Trash2', 'Download', 'Link2', 'Settings', 'Sparkles', 'Target', 'Megaphone', 'Headphones', 'CreditCard', 'Banknote', 'Briefcase', 'Award', 'BadgeCheck', 'Hourglass', 'FileSearch', 'FileLock2', 'Archive', 'Inbox', 'Send', 'Hotel', 'ScanSearch', 'Siren', 'Handshake', 'IdCard', 'MapPin', 'Wifi', 'Languages', 'PenLine');
  CREATE TYPE "public"."enum__pages_v_blocks_dp_resources_items_tone" AS ENUM('teal', 'sky', 'violet', 'rose', 'amber', 'emerald', 'indigo');
  CREATE TABLE "pages_blocks_dp_hero_breadcrumb" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_hero_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_hero_visual_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"meta" varchar,
  	"status" "enum_pages_blocks_dp_hero_visual_rows_status"
  );
  
  CREATE TABLE "pages_blocks_dp_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_dp_hero_layout" DEFAULT 'split',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"note" varchar,
  	"primary_label" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_url" varchar,
  	"visual" "enum_pages_blocks_dp_hero_visual" DEFAULT 'toggles',
  	"visual_title" varchar,
  	"visual_subtitle" varchar,
  	"stat_value" varchar,
  	"stat_label" varchar,
  	"toast" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_cards_items_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_cards_items_icon",
  	"tone" "enum_pages_blocks_dp_cards_items_tone",
  	"tag" varchar,
  	"title" varchar,
  	"text" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"theme" "enum_pages_blocks_dp_cards_theme" DEFAULT 'white',
  	"variant" "enum_pages_blocks_dp_cards_variant" DEFAULT 'numbered',
  	"columns" "enum_pages_blocks_dp_cards_columns" DEFAULT '4',
  	"note" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"label" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"show_today" boolean DEFAULT true,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_roles_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"primary_label" varchar,
  	"primary_title" varchar,
  	"primary_text" varchar,
  	"secondary_label" varchar,
  	"secondary_title" varchar,
  	"secondary_text" varchar,
  	"chips_title" varchar,
  	"note" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_flow_tabs_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_flow_tabs_steps_icon",
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_flow_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon" "enum_pages_blocks_dp_flow_tabs_icon"
  );
  
  CREATE TABLE "pages_blocks_dp_flow" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"note" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_compare_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"problem" varchar,
  	"problem_text" varchar,
  	"solution" varchar,
  	"solution_text" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_compare" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"left_label" varchar,
  	"right_label" varchar,
  	"note" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_stepper_stages" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"text" varchar,
  	"output" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_stepper" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_use_cases_items_panel_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"status" "enum_pages_blocks_dp_use_cases_items_panel_rows_status"
  );
  
  CREATE TABLE "pages_blocks_dp_use_cases_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_use_cases_items_icon",
  	"title" varchar,
  	"scenario" varchar,
  	"approach" varchar,
  	"panel_title" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_use_cases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_stack_left" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_stack_core" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_stack_right" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_stack" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"left_label" varchar,
  	"core_title" varchar,
  	"core_subtitle" varchar,
  	"core_label" varchar,
  	"right_label" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_checklist_groups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_checklist_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_checklist_groups_icon",
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_checklist" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"primary_label" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_showcase_tabs_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_showcase_tabs_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" numeric,
  	"status" "enum_pages_blocks_dp_showcase_tabs_data_status"
  );
  
  CREATE TABLE "pages_blocks_dp_showcase_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_showcase_tabs_icon",
  	"title" varchar,
  	"subtitle" varchar,
  	"panel_heading" varchar,
  	"text" varchar,
  	"visual" "enum_pages_blocks_dp_showcase_tabs_visual" DEFAULT 'bars',
  	"visual_title" varchar,
  	"link_label" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_showcase" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_records_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_records_capabilities_icon",
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_records_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"ref" varchar,
  	"purpose" varchar,
  	"detail" varchar,
  	"channel" varchar,
  	"status" "enum_pages_blocks_dp_records_rows_status",
  	"source" varchar,
  	"version" varchar,
  	"time" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_records" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"table_title" varchar,
  	"table_subtitle" varchar,
  	"table_button" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_hub_top" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_hub_top_icon",
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_hub_bottom" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_hub_bottom_icon",
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_hub_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_hub_points_icon",
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_hub" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"top_label" varchar,
  	"core_name" varchar,
  	"core_status" varchar,
  	"bottom_label" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_workflow_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_dp_workflow_steps_icon",
  	"title" varchar,
  	"text" varchar,
  	"code" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_workflow" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_toggle_without" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_toggle_with" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_toggle" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"off_label" varchar,
  	"on_label" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dp_resources_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" varchar,
  	"title" varchar,
  	"text" varchar,
  	"meta" varchar,
  	"url" varchar,
  	"tone" "enum_pages_blocks_dp_resources_items_tone"
  );
  
  CREATE TABLE "pages_blocks_dp_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_hero_breadcrumb" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_hero_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_hero_visual_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"meta" varchar,
  	"status" "enum__pages_v_blocks_dp_hero_visual_rows_status",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_dp_hero_layout" DEFAULT 'split',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"note" varchar,
  	"primary_label" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_url" varchar,
  	"visual" "enum__pages_v_blocks_dp_hero_visual" DEFAULT 'toggles',
  	"visual_title" varchar,
  	"visual_subtitle" varchar,
  	"stat_value" varchar,
  	"stat_label" varchar,
  	"toast" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_cards_items_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_cards_items_icon",
  	"tone" "enum__pages_v_blocks_dp_cards_items_tone",
  	"tag" varchar,
  	"title" varchar,
  	"text" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"theme" "enum__pages_v_blocks_dp_cards_theme" DEFAULT 'white',
  	"variant" "enum__pages_v_blocks_dp_cards_variant" DEFAULT 'numbered',
  	"columns" "enum__pages_v_blocks_dp_cards_columns" DEFAULT '4',
  	"note" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"label" varchar,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"show_today" boolean DEFAULT true,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_roles_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"primary_label" varchar,
  	"primary_title" varchar,
  	"primary_text" varchar,
  	"secondary_label" varchar,
  	"secondary_title" varchar,
  	"secondary_text" varchar,
  	"chips_title" varchar,
  	"note" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_flow_tabs_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_flow_tabs_steps_icon",
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_flow_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon" "enum__pages_v_blocks_dp_flow_tabs_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_flow" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"note" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_compare_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"problem" varchar,
  	"problem_text" varchar,
  	"solution" varchar,
  	"solution_text" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_compare" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"left_label" varchar,
  	"right_label" varchar,
  	"note" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_stepper_stages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"text" varchar,
  	"output" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_stepper" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_use_cases_items_panel_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"status" "enum__pages_v_blocks_dp_use_cases_items_panel_rows_status",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_use_cases_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_use_cases_items_icon",
  	"title" varchar,
  	"scenario" varchar,
  	"approach" varchar,
  	"panel_title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_use_cases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_stack_left" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_stack_core" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_stack_right" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_stack" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"left_label" varchar,
  	"core_title" varchar,
  	"core_subtitle" varchar,
  	"core_label" varchar,
  	"right_label" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_checklist_groups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_checklist_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_checklist_groups_icon",
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_checklist" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"primary_label" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_showcase_tabs_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_showcase_tabs_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" numeric,
  	"status" "enum__pages_v_blocks_dp_showcase_tabs_data_status",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_showcase_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_showcase_tabs_icon",
  	"title" varchar,
  	"subtitle" varchar,
  	"panel_heading" varchar,
  	"text" varchar,
  	"visual" "enum__pages_v_blocks_dp_showcase_tabs_visual" DEFAULT 'bars',
  	"visual_title" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_showcase" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_records_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_records_capabilities_icon",
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_records_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"ref" varchar,
  	"purpose" varchar,
  	"detail" varchar,
  	"channel" varchar,
  	"status" "enum__pages_v_blocks_dp_records_rows_status",
  	"source" varchar,
  	"version" varchar,
  	"time" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_records" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"table_title" varchar,
  	"table_subtitle" varchar,
  	"table_button" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_hub_top" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_hub_top_icon",
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_hub_bottom" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_hub_bottom_icon",
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_hub_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_hub_points_icon",
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_hub" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"top_label" varchar,
  	"core_name" varchar,
  	"core_status" varchar,
  	"bottom_label" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_workflow_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_dp_workflow_steps_icon",
  	"title" varchar,
  	"text" varchar,
  	"code" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_workflow" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_toggle_without" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_toggle_with" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_toggle" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"off_label" varchar,
  	"on_label" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_resources_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" varchar,
  	"title" varchar,
  	"text" varchar,
  	"meta" varchar,
  	"url" varchar,
  	"tone" "enum__pages_v_blocks_dp_resources_items_tone",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dp_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_dp_hero_breadcrumb" ADD CONSTRAINT "pages_blocks_dp_hero_breadcrumb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_hero_chips" ADD CONSTRAINT "pages_blocks_dp_hero_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_hero_visual_rows" ADD CONSTRAINT "pages_blocks_dp_hero_visual_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_hero" ADD CONSTRAINT "pages_blocks_dp_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_cards_items_points" ADD CONSTRAINT "pages_blocks_dp_cards_items_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_cards_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_cards_items" ADD CONSTRAINT "pages_blocks_dp_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_cards" ADD CONSTRAINT "pages_blocks_dp_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_timeline_items" ADD CONSTRAINT "pages_blocks_dp_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_timeline" ADD CONSTRAINT "pages_blocks_dp_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_roles_chips" ADD CONSTRAINT "pages_blocks_dp_roles_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_roles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_roles" ADD CONSTRAINT "pages_blocks_dp_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_flow_tabs_steps" ADD CONSTRAINT "pages_blocks_dp_flow_tabs_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_flow_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_flow_tabs" ADD CONSTRAINT "pages_blocks_dp_flow_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_flow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_flow" ADD CONSTRAINT "pages_blocks_dp_flow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_compare_rows" ADD CONSTRAINT "pages_blocks_dp_compare_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_compare"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_compare" ADD CONSTRAINT "pages_blocks_dp_compare_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_stepper_stages" ADD CONSTRAINT "pages_blocks_dp_stepper_stages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_stepper"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_stepper" ADD CONSTRAINT "pages_blocks_dp_stepper_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_use_cases_items_panel_rows" ADD CONSTRAINT "pages_blocks_dp_use_cases_items_panel_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_use_cases_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_use_cases_items" ADD CONSTRAINT "pages_blocks_dp_use_cases_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_use_cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_use_cases" ADD CONSTRAINT "pages_blocks_dp_use_cases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_stack_left" ADD CONSTRAINT "pages_blocks_dp_stack_left_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_stack"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_stack_core" ADD CONSTRAINT "pages_blocks_dp_stack_core_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_stack"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_stack_right" ADD CONSTRAINT "pages_blocks_dp_stack_right_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_stack"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_stack" ADD CONSTRAINT "pages_blocks_dp_stack_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_checklist_groups_items" ADD CONSTRAINT "pages_blocks_dp_checklist_groups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_checklist_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_checklist_groups" ADD CONSTRAINT "pages_blocks_dp_checklist_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_checklist"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_checklist" ADD CONSTRAINT "pages_blocks_dp_checklist_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_faq_items" ADD CONSTRAINT "pages_blocks_dp_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_faq" ADD CONSTRAINT "pages_blocks_dp_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_cta" ADD CONSTRAINT "pages_blocks_dp_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_showcase_tabs_chips" ADD CONSTRAINT "pages_blocks_dp_showcase_tabs_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_showcase_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_showcase_tabs_data" ADD CONSTRAINT "pages_blocks_dp_showcase_tabs_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_showcase_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_showcase_tabs" ADD CONSTRAINT "pages_blocks_dp_showcase_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_showcase"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_showcase" ADD CONSTRAINT "pages_blocks_dp_showcase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_records_capabilities" ADD CONSTRAINT "pages_blocks_dp_records_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_records"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_records_rows" ADD CONSTRAINT "pages_blocks_dp_records_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_records"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_records" ADD CONSTRAINT "pages_blocks_dp_records_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_hub_top" ADD CONSTRAINT "pages_blocks_dp_hub_top_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_hub"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_hub_bottom" ADD CONSTRAINT "pages_blocks_dp_hub_bottom_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_hub"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_hub_points" ADD CONSTRAINT "pages_blocks_dp_hub_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_hub"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_hub" ADD CONSTRAINT "pages_blocks_dp_hub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_workflow_steps" ADD CONSTRAINT "pages_blocks_dp_workflow_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_workflow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_workflow" ADD CONSTRAINT "pages_blocks_dp_workflow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_toggle_without" ADD CONSTRAINT "pages_blocks_dp_toggle_without_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_toggle"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_toggle_with" ADD CONSTRAINT "pages_blocks_dp_toggle_with_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_toggle"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_toggle" ADD CONSTRAINT "pages_blocks_dp_toggle_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_resources_items" ADD CONSTRAINT "pages_blocks_dp_resources_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dp_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dp_resources" ADD CONSTRAINT "pages_blocks_dp_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_hero_breadcrumb" ADD CONSTRAINT "_pages_v_blocks_dp_hero_breadcrumb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_hero_chips" ADD CONSTRAINT "_pages_v_blocks_dp_hero_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_hero_visual_rows" ADD CONSTRAINT "_pages_v_blocks_dp_hero_visual_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_hero" ADD CONSTRAINT "_pages_v_blocks_dp_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_cards_items_points" ADD CONSTRAINT "_pages_v_blocks_dp_cards_items_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_cards_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_cards_items" ADD CONSTRAINT "_pages_v_blocks_dp_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_cards" ADD CONSTRAINT "_pages_v_blocks_dp_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_timeline_items" ADD CONSTRAINT "_pages_v_blocks_dp_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_timeline" ADD CONSTRAINT "_pages_v_blocks_dp_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_roles_chips" ADD CONSTRAINT "_pages_v_blocks_dp_roles_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_roles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_roles" ADD CONSTRAINT "_pages_v_blocks_dp_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_flow_tabs_steps" ADD CONSTRAINT "_pages_v_blocks_dp_flow_tabs_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_flow_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_flow_tabs" ADD CONSTRAINT "_pages_v_blocks_dp_flow_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_flow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_flow" ADD CONSTRAINT "_pages_v_blocks_dp_flow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_compare_rows" ADD CONSTRAINT "_pages_v_blocks_dp_compare_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_compare"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_compare" ADD CONSTRAINT "_pages_v_blocks_dp_compare_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_stepper_stages" ADD CONSTRAINT "_pages_v_blocks_dp_stepper_stages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_stepper"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_stepper" ADD CONSTRAINT "_pages_v_blocks_dp_stepper_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_use_cases_items_panel_rows" ADD CONSTRAINT "_pages_v_blocks_dp_use_cases_items_panel_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_use_cases_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_use_cases_items" ADD CONSTRAINT "_pages_v_blocks_dp_use_cases_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_use_cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_use_cases" ADD CONSTRAINT "_pages_v_blocks_dp_use_cases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_stack_left" ADD CONSTRAINT "_pages_v_blocks_dp_stack_left_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_stack"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_stack_core" ADD CONSTRAINT "_pages_v_blocks_dp_stack_core_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_stack"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_stack_right" ADD CONSTRAINT "_pages_v_blocks_dp_stack_right_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_stack"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_stack" ADD CONSTRAINT "_pages_v_blocks_dp_stack_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_checklist_groups_items" ADD CONSTRAINT "_pages_v_blocks_dp_checklist_groups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_checklist_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_checklist_groups" ADD CONSTRAINT "_pages_v_blocks_dp_checklist_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_checklist"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_checklist" ADD CONSTRAINT "_pages_v_blocks_dp_checklist_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_faq_items" ADD CONSTRAINT "_pages_v_blocks_dp_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_faq" ADD CONSTRAINT "_pages_v_blocks_dp_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_cta" ADD CONSTRAINT "_pages_v_blocks_dp_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_showcase_tabs_chips" ADD CONSTRAINT "_pages_v_blocks_dp_showcase_tabs_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_showcase_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_showcase_tabs_data" ADD CONSTRAINT "_pages_v_blocks_dp_showcase_tabs_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_showcase_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_showcase_tabs" ADD CONSTRAINT "_pages_v_blocks_dp_showcase_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_showcase"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_showcase" ADD CONSTRAINT "_pages_v_blocks_dp_showcase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_records_capabilities" ADD CONSTRAINT "_pages_v_blocks_dp_records_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_records"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_records_rows" ADD CONSTRAINT "_pages_v_blocks_dp_records_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_records"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_records" ADD CONSTRAINT "_pages_v_blocks_dp_records_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_hub_top" ADD CONSTRAINT "_pages_v_blocks_dp_hub_top_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_hub"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_hub_bottom" ADD CONSTRAINT "_pages_v_blocks_dp_hub_bottom_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_hub"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_hub_points" ADD CONSTRAINT "_pages_v_blocks_dp_hub_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_hub"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_hub" ADD CONSTRAINT "_pages_v_blocks_dp_hub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_workflow_steps" ADD CONSTRAINT "_pages_v_blocks_dp_workflow_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_workflow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_workflow" ADD CONSTRAINT "_pages_v_blocks_dp_workflow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_toggle_without" ADD CONSTRAINT "_pages_v_blocks_dp_toggle_without_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_toggle"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_toggle_with" ADD CONSTRAINT "_pages_v_blocks_dp_toggle_with_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_toggle"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_toggle" ADD CONSTRAINT "_pages_v_blocks_dp_toggle_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_resources_items" ADD CONSTRAINT "_pages_v_blocks_dp_resources_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dp_resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dp_resources" ADD CONSTRAINT "_pages_v_blocks_dp_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_dp_hero_breadcrumb_order_idx" ON "pages_blocks_dp_hero_breadcrumb" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_hero_breadcrumb_parent_id_idx" ON "pages_blocks_dp_hero_breadcrumb" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_hero_chips_order_idx" ON "pages_blocks_dp_hero_chips" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_hero_chips_parent_id_idx" ON "pages_blocks_dp_hero_chips" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_hero_visual_rows_order_idx" ON "pages_blocks_dp_hero_visual_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_hero_visual_rows_parent_id_idx" ON "pages_blocks_dp_hero_visual_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_hero_order_idx" ON "pages_blocks_dp_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_hero_parent_id_idx" ON "pages_blocks_dp_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_hero_path_idx" ON "pages_blocks_dp_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_cards_items_points_order_idx" ON "pages_blocks_dp_cards_items_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_cards_items_points_parent_id_idx" ON "pages_blocks_dp_cards_items_points" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_cards_items_order_idx" ON "pages_blocks_dp_cards_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_cards_items_parent_id_idx" ON "pages_blocks_dp_cards_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_cards_order_idx" ON "pages_blocks_dp_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_cards_parent_id_idx" ON "pages_blocks_dp_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_cards_path_idx" ON "pages_blocks_dp_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_timeline_items_order_idx" ON "pages_blocks_dp_timeline_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_timeline_items_parent_id_idx" ON "pages_blocks_dp_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_timeline_order_idx" ON "pages_blocks_dp_timeline" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_timeline_parent_id_idx" ON "pages_blocks_dp_timeline" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_timeline_path_idx" ON "pages_blocks_dp_timeline" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_roles_chips_order_idx" ON "pages_blocks_dp_roles_chips" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_roles_chips_parent_id_idx" ON "pages_blocks_dp_roles_chips" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_roles_order_idx" ON "pages_blocks_dp_roles" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_roles_parent_id_idx" ON "pages_blocks_dp_roles" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_roles_path_idx" ON "pages_blocks_dp_roles" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_flow_tabs_steps_order_idx" ON "pages_blocks_dp_flow_tabs_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_flow_tabs_steps_parent_id_idx" ON "pages_blocks_dp_flow_tabs_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_flow_tabs_order_idx" ON "pages_blocks_dp_flow_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_flow_tabs_parent_id_idx" ON "pages_blocks_dp_flow_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_flow_order_idx" ON "pages_blocks_dp_flow" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_flow_parent_id_idx" ON "pages_blocks_dp_flow" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_flow_path_idx" ON "pages_blocks_dp_flow" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_compare_rows_order_idx" ON "pages_blocks_dp_compare_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_compare_rows_parent_id_idx" ON "pages_blocks_dp_compare_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_compare_order_idx" ON "pages_blocks_dp_compare" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_compare_parent_id_idx" ON "pages_blocks_dp_compare" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_compare_path_idx" ON "pages_blocks_dp_compare" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_stepper_stages_order_idx" ON "pages_blocks_dp_stepper_stages" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_stepper_stages_parent_id_idx" ON "pages_blocks_dp_stepper_stages" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_stepper_order_idx" ON "pages_blocks_dp_stepper" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_stepper_parent_id_idx" ON "pages_blocks_dp_stepper" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_stepper_path_idx" ON "pages_blocks_dp_stepper" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_use_cases_items_panel_rows_order_idx" ON "pages_blocks_dp_use_cases_items_panel_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_use_cases_items_panel_rows_parent_id_idx" ON "pages_blocks_dp_use_cases_items_panel_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_use_cases_items_order_idx" ON "pages_blocks_dp_use_cases_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_use_cases_items_parent_id_idx" ON "pages_blocks_dp_use_cases_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_use_cases_order_idx" ON "pages_blocks_dp_use_cases" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_use_cases_parent_id_idx" ON "pages_blocks_dp_use_cases" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_use_cases_path_idx" ON "pages_blocks_dp_use_cases" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_stack_left_order_idx" ON "pages_blocks_dp_stack_left" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_stack_left_parent_id_idx" ON "pages_blocks_dp_stack_left" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_stack_core_order_idx" ON "pages_blocks_dp_stack_core" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_stack_core_parent_id_idx" ON "pages_blocks_dp_stack_core" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_stack_right_order_idx" ON "pages_blocks_dp_stack_right" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_stack_right_parent_id_idx" ON "pages_blocks_dp_stack_right" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_stack_order_idx" ON "pages_blocks_dp_stack" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_stack_parent_id_idx" ON "pages_blocks_dp_stack" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_stack_path_idx" ON "pages_blocks_dp_stack" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_checklist_groups_items_order_idx" ON "pages_blocks_dp_checklist_groups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_checklist_groups_items_parent_id_idx" ON "pages_blocks_dp_checklist_groups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_checklist_groups_order_idx" ON "pages_blocks_dp_checklist_groups" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_checklist_groups_parent_id_idx" ON "pages_blocks_dp_checklist_groups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_checklist_order_idx" ON "pages_blocks_dp_checklist" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_checklist_parent_id_idx" ON "pages_blocks_dp_checklist" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_checklist_path_idx" ON "pages_blocks_dp_checklist" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_faq_items_order_idx" ON "pages_blocks_dp_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_faq_items_parent_id_idx" ON "pages_blocks_dp_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_faq_order_idx" ON "pages_blocks_dp_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_faq_parent_id_idx" ON "pages_blocks_dp_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_faq_path_idx" ON "pages_blocks_dp_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_cta_order_idx" ON "pages_blocks_dp_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_cta_parent_id_idx" ON "pages_blocks_dp_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_cta_path_idx" ON "pages_blocks_dp_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_showcase_tabs_chips_order_idx" ON "pages_blocks_dp_showcase_tabs_chips" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_showcase_tabs_chips_parent_id_idx" ON "pages_blocks_dp_showcase_tabs_chips" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_showcase_tabs_data_order_idx" ON "pages_blocks_dp_showcase_tabs_data" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_showcase_tabs_data_parent_id_idx" ON "pages_blocks_dp_showcase_tabs_data" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_showcase_tabs_order_idx" ON "pages_blocks_dp_showcase_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_showcase_tabs_parent_id_idx" ON "pages_blocks_dp_showcase_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_showcase_order_idx" ON "pages_blocks_dp_showcase" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_showcase_parent_id_idx" ON "pages_blocks_dp_showcase" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_showcase_path_idx" ON "pages_blocks_dp_showcase" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_records_capabilities_order_idx" ON "pages_blocks_dp_records_capabilities" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_records_capabilities_parent_id_idx" ON "pages_blocks_dp_records_capabilities" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_records_rows_order_idx" ON "pages_blocks_dp_records_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_records_rows_parent_id_idx" ON "pages_blocks_dp_records_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_records_order_idx" ON "pages_blocks_dp_records" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_records_parent_id_idx" ON "pages_blocks_dp_records" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_records_path_idx" ON "pages_blocks_dp_records" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_hub_top_order_idx" ON "pages_blocks_dp_hub_top" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_hub_top_parent_id_idx" ON "pages_blocks_dp_hub_top" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_hub_bottom_order_idx" ON "pages_blocks_dp_hub_bottom" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_hub_bottom_parent_id_idx" ON "pages_blocks_dp_hub_bottom" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_hub_points_order_idx" ON "pages_blocks_dp_hub_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_hub_points_parent_id_idx" ON "pages_blocks_dp_hub_points" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_hub_order_idx" ON "pages_blocks_dp_hub" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_hub_parent_id_idx" ON "pages_blocks_dp_hub" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_hub_path_idx" ON "pages_blocks_dp_hub" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_workflow_steps_order_idx" ON "pages_blocks_dp_workflow_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_workflow_steps_parent_id_idx" ON "pages_blocks_dp_workflow_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_workflow_order_idx" ON "pages_blocks_dp_workflow" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_workflow_parent_id_idx" ON "pages_blocks_dp_workflow" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_workflow_path_idx" ON "pages_blocks_dp_workflow" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_toggle_without_order_idx" ON "pages_blocks_dp_toggle_without" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_toggle_without_parent_id_idx" ON "pages_blocks_dp_toggle_without" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_toggle_with_order_idx" ON "pages_blocks_dp_toggle_with" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_toggle_with_parent_id_idx" ON "pages_blocks_dp_toggle_with" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_toggle_order_idx" ON "pages_blocks_dp_toggle" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_toggle_parent_id_idx" ON "pages_blocks_dp_toggle" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_toggle_path_idx" ON "pages_blocks_dp_toggle" USING btree ("_path");
  CREATE INDEX "pages_blocks_dp_resources_items_order_idx" ON "pages_blocks_dp_resources_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_resources_items_parent_id_idx" ON "pages_blocks_dp_resources_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_resources_order_idx" ON "pages_blocks_dp_resources" USING btree ("_order");
  CREATE INDEX "pages_blocks_dp_resources_parent_id_idx" ON "pages_blocks_dp_resources" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dp_resources_path_idx" ON "pages_blocks_dp_resources" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_hero_breadcrumb_order_idx" ON "_pages_v_blocks_dp_hero_breadcrumb" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_hero_breadcrumb_parent_id_idx" ON "_pages_v_blocks_dp_hero_breadcrumb" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_hero_chips_order_idx" ON "_pages_v_blocks_dp_hero_chips" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_hero_chips_parent_id_idx" ON "_pages_v_blocks_dp_hero_chips" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_hero_visual_rows_order_idx" ON "_pages_v_blocks_dp_hero_visual_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_hero_visual_rows_parent_id_idx" ON "_pages_v_blocks_dp_hero_visual_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_hero_order_idx" ON "_pages_v_blocks_dp_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_hero_parent_id_idx" ON "_pages_v_blocks_dp_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_hero_path_idx" ON "_pages_v_blocks_dp_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_cards_items_points_order_idx" ON "_pages_v_blocks_dp_cards_items_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_cards_items_points_parent_id_idx" ON "_pages_v_blocks_dp_cards_items_points" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_cards_items_order_idx" ON "_pages_v_blocks_dp_cards_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_cards_items_parent_id_idx" ON "_pages_v_blocks_dp_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_cards_order_idx" ON "_pages_v_blocks_dp_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_cards_parent_id_idx" ON "_pages_v_blocks_dp_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_cards_path_idx" ON "_pages_v_blocks_dp_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_timeline_items_order_idx" ON "_pages_v_blocks_dp_timeline_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_timeline_items_parent_id_idx" ON "_pages_v_blocks_dp_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_timeline_order_idx" ON "_pages_v_blocks_dp_timeline" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_timeline_parent_id_idx" ON "_pages_v_blocks_dp_timeline" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_timeline_path_idx" ON "_pages_v_blocks_dp_timeline" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_roles_chips_order_idx" ON "_pages_v_blocks_dp_roles_chips" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_roles_chips_parent_id_idx" ON "_pages_v_blocks_dp_roles_chips" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_roles_order_idx" ON "_pages_v_blocks_dp_roles" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_roles_parent_id_idx" ON "_pages_v_blocks_dp_roles" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_roles_path_idx" ON "_pages_v_blocks_dp_roles" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_flow_tabs_steps_order_idx" ON "_pages_v_blocks_dp_flow_tabs_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_flow_tabs_steps_parent_id_idx" ON "_pages_v_blocks_dp_flow_tabs_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_flow_tabs_order_idx" ON "_pages_v_blocks_dp_flow_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_flow_tabs_parent_id_idx" ON "_pages_v_blocks_dp_flow_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_flow_order_idx" ON "_pages_v_blocks_dp_flow" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_flow_parent_id_idx" ON "_pages_v_blocks_dp_flow" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_flow_path_idx" ON "_pages_v_blocks_dp_flow" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_compare_rows_order_idx" ON "_pages_v_blocks_dp_compare_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_compare_rows_parent_id_idx" ON "_pages_v_blocks_dp_compare_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_compare_order_idx" ON "_pages_v_blocks_dp_compare" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_compare_parent_id_idx" ON "_pages_v_blocks_dp_compare" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_compare_path_idx" ON "_pages_v_blocks_dp_compare" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_stepper_stages_order_idx" ON "_pages_v_blocks_dp_stepper_stages" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_stepper_stages_parent_id_idx" ON "_pages_v_blocks_dp_stepper_stages" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_stepper_order_idx" ON "_pages_v_blocks_dp_stepper" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_stepper_parent_id_idx" ON "_pages_v_blocks_dp_stepper" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_stepper_path_idx" ON "_pages_v_blocks_dp_stepper" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_use_cases_items_panel_rows_order_idx" ON "_pages_v_blocks_dp_use_cases_items_panel_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_use_cases_items_panel_rows_parent_id_idx" ON "_pages_v_blocks_dp_use_cases_items_panel_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_use_cases_items_order_idx" ON "_pages_v_blocks_dp_use_cases_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_use_cases_items_parent_id_idx" ON "_pages_v_blocks_dp_use_cases_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_use_cases_order_idx" ON "_pages_v_blocks_dp_use_cases" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_use_cases_parent_id_idx" ON "_pages_v_blocks_dp_use_cases" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_use_cases_path_idx" ON "_pages_v_blocks_dp_use_cases" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_stack_left_order_idx" ON "_pages_v_blocks_dp_stack_left" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_stack_left_parent_id_idx" ON "_pages_v_blocks_dp_stack_left" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_stack_core_order_idx" ON "_pages_v_blocks_dp_stack_core" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_stack_core_parent_id_idx" ON "_pages_v_blocks_dp_stack_core" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_stack_right_order_idx" ON "_pages_v_blocks_dp_stack_right" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_stack_right_parent_id_idx" ON "_pages_v_blocks_dp_stack_right" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_stack_order_idx" ON "_pages_v_blocks_dp_stack" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_stack_parent_id_idx" ON "_pages_v_blocks_dp_stack" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_stack_path_idx" ON "_pages_v_blocks_dp_stack" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_checklist_groups_items_order_idx" ON "_pages_v_blocks_dp_checklist_groups_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_checklist_groups_items_parent_id_idx" ON "_pages_v_blocks_dp_checklist_groups_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_checklist_groups_order_idx" ON "_pages_v_blocks_dp_checklist_groups" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_checklist_groups_parent_id_idx" ON "_pages_v_blocks_dp_checklist_groups" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_checklist_order_idx" ON "_pages_v_blocks_dp_checklist" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_checklist_parent_id_idx" ON "_pages_v_blocks_dp_checklist" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_checklist_path_idx" ON "_pages_v_blocks_dp_checklist" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_faq_items_order_idx" ON "_pages_v_blocks_dp_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_faq_items_parent_id_idx" ON "_pages_v_blocks_dp_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_faq_order_idx" ON "_pages_v_blocks_dp_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_faq_parent_id_idx" ON "_pages_v_blocks_dp_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_faq_path_idx" ON "_pages_v_blocks_dp_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_cta_order_idx" ON "_pages_v_blocks_dp_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_cta_parent_id_idx" ON "_pages_v_blocks_dp_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_cta_path_idx" ON "_pages_v_blocks_dp_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_showcase_tabs_chips_order_idx" ON "_pages_v_blocks_dp_showcase_tabs_chips" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_showcase_tabs_chips_parent_id_idx" ON "_pages_v_blocks_dp_showcase_tabs_chips" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_showcase_tabs_data_order_idx" ON "_pages_v_blocks_dp_showcase_tabs_data" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_showcase_tabs_data_parent_id_idx" ON "_pages_v_blocks_dp_showcase_tabs_data" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_showcase_tabs_order_idx" ON "_pages_v_blocks_dp_showcase_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_showcase_tabs_parent_id_idx" ON "_pages_v_blocks_dp_showcase_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_showcase_order_idx" ON "_pages_v_blocks_dp_showcase" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_showcase_parent_id_idx" ON "_pages_v_blocks_dp_showcase" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_showcase_path_idx" ON "_pages_v_blocks_dp_showcase" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_records_capabilities_order_idx" ON "_pages_v_blocks_dp_records_capabilities" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_records_capabilities_parent_id_idx" ON "_pages_v_blocks_dp_records_capabilities" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_records_rows_order_idx" ON "_pages_v_blocks_dp_records_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_records_rows_parent_id_idx" ON "_pages_v_blocks_dp_records_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_records_order_idx" ON "_pages_v_blocks_dp_records" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_records_parent_id_idx" ON "_pages_v_blocks_dp_records" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_records_path_idx" ON "_pages_v_blocks_dp_records" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_hub_top_order_idx" ON "_pages_v_blocks_dp_hub_top" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_hub_top_parent_id_idx" ON "_pages_v_blocks_dp_hub_top" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_hub_bottom_order_idx" ON "_pages_v_blocks_dp_hub_bottom" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_hub_bottom_parent_id_idx" ON "_pages_v_blocks_dp_hub_bottom" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_hub_points_order_idx" ON "_pages_v_blocks_dp_hub_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_hub_points_parent_id_idx" ON "_pages_v_blocks_dp_hub_points" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_hub_order_idx" ON "_pages_v_blocks_dp_hub" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_hub_parent_id_idx" ON "_pages_v_blocks_dp_hub" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_hub_path_idx" ON "_pages_v_blocks_dp_hub" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_workflow_steps_order_idx" ON "_pages_v_blocks_dp_workflow_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_workflow_steps_parent_id_idx" ON "_pages_v_blocks_dp_workflow_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_workflow_order_idx" ON "_pages_v_blocks_dp_workflow" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_workflow_parent_id_idx" ON "_pages_v_blocks_dp_workflow" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_workflow_path_idx" ON "_pages_v_blocks_dp_workflow" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_toggle_without_order_idx" ON "_pages_v_blocks_dp_toggle_without" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_toggle_without_parent_id_idx" ON "_pages_v_blocks_dp_toggle_without" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_toggle_with_order_idx" ON "_pages_v_blocks_dp_toggle_with" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_toggle_with_parent_id_idx" ON "_pages_v_blocks_dp_toggle_with" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_toggle_order_idx" ON "_pages_v_blocks_dp_toggle" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_toggle_parent_id_idx" ON "_pages_v_blocks_dp_toggle" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_toggle_path_idx" ON "_pages_v_blocks_dp_toggle" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dp_resources_items_order_idx" ON "_pages_v_blocks_dp_resources_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_resources_items_parent_id_idx" ON "_pages_v_blocks_dp_resources_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_resources_order_idx" ON "_pages_v_blocks_dp_resources" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dp_resources_parent_id_idx" ON "_pages_v_blocks_dp_resources" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dp_resources_path_idx" ON "_pages_v_blocks_dp_resources" USING btree ("_path");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_dp_hero_breadcrumb" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_hero_chips" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_hero_visual_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_cards_items_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_roles_chips" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_roles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_flow_tabs_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_flow_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_flow" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_compare_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_compare" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_stepper_stages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_stepper" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_use_cases_items_panel_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_use_cases_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_use_cases" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_stack_left" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_stack_core" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_stack_right" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_stack" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_checklist_groups_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_checklist_groups" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_checklist" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_showcase_tabs_chips" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_showcase_tabs_data" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_showcase_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_showcase" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_records_capabilities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_records_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_records" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_hub_top" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_hub_bottom" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_hub_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_hub" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_workflow_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_workflow" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_toggle_without" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_toggle_with" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_toggle" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_resources_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dp_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_hero_breadcrumb" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_hero_chips" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_hero_visual_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_cards_items_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_roles_chips" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_roles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_flow_tabs_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_flow_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_flow" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_compare_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_compare" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_stepper_stages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_stepper" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_use_cases_items_panel_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_use_cases_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_use_cases" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_stack_left" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_stack_core" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_stack_right" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_stack" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_checklist_groups_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_checklist_groups" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_checklist" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_showcase_tabs_chips" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_showcase_tabs_data" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_showcase_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_showcase" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_records_capabilities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_records_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_records" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_hub_top" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_hub_bottom" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_hub_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_hub" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_workflow_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_workflow" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_toggle_without" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_toggle_with" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_toggle" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_resources_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dp_resources" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_dp_hero_breadcrumb" CASCADE;
  DROP TABLE "pages_blocks_dp_hero_chips" CASCADE;
  DROP TABLE "pages_blocks_dp_hero_visual_rows" CASCADE;
  DROP TABLE "pages_blocks_dp_hero" CASCADE;
  DROP TABLE "pages_blocks_dp_cards_items_points" CASCADE;
  DROP TABLE "pages_blocks_dp_cards_items" CASCADE;
  DROP TABLE "pages_blocks_dp_cards" CASCADE;
  DROP TABLE "pages_blocks_dp_timeline_items" CASCADE;
  DROP TABLE "pages_blocks_dp_timeline" CASCADE;
  DROP TABLE "pages_blocks_dp_roles_chips" CASCADE;
  DROP TABLE "pages_blocks_dp_roles" CASCADE;
  DROP TABLE "pages_blocks_dp_flow_tabs_steps" CASCADE;
  DROP TABLE "pages_blocks_dp_flow_tabs" CASCADE;
  DROP TABLE "pages_blocks_dp_flow" CASCADE;
  DROP TABLE "pages_blocks_dp_compare_rows" CASCADE;
  DROP TABLE "pages_blocks_dp_compare" CASCADE;
  DROP TABLE "pages_blocks_dp_stepper_stages" CASCADE;
  DROP TABLE "pages_blocks_dp_stepper" CASCADE;
  DROP TABLE "pages_blocks_dp_use_cases_items_panel_rows" CASCADE;
  DROP TABLE "pages_blocks_dp_use_cases_items" CASCADE;
  DROP TABLE "pages_blocks_dp_use_cases" CASCADE;
  DROP TABLE "pages_blocks_dp_stack_left" CASCADE;
  DROP TABLE "pages_blocks_dp_stack_core" CASCADE;
  DROP TABLE "pages_blocks_dp_stack_right" CASCADE;
  DROP TABLE "pages_blocks_dp_stack" CASCADE;
  DROP TABLE "pages_blocks_dp_checklist_groups_items" CASCADE;
  DROP TABLE "pages_blocks_dp_checklist_groups" CASCADE;
  DROP TABLE "pages_blocks_dp_checklist" CASCADE;
  DROP TABLE "pages_blocks_dp_faq_items" CASCADE;
  DROP TABLE "pages_blocks_dp_faq" CASCADE;
  DROP TABLE "pages_blocks_dp_cta" CASCADE;
  DROP TABLE "pages_blocks_dp_showcase_tabs_chips" CASCADE;
  DROP TABLE "pages_blocks_dp_showcase_tabs_data" CASCADE;
  DROP TABLE "pages_blocks_dp_showcase_tabs" CASCADE;
  DROP TABLE "pages_blocks_dp_showcase" CASCADE;
  DROP TABLE "pages_blocks_dp_records_capabilities" CASCADE;
  DROP TABLE "pages_blocks_dp_records_rows" CASCADE;
  DROP TABLE "pages_blocks_dp_records" CASCADE;
  DROP TABLE "pages_blocks_dp_hub_top" CASCADE;
  DROP TABLE "pages_blocks_dp_hub_bottom" CASCADE;
  DROP TABLE "pages_blocks_dp_hub_points" CASCADE;
  DROP TABLE "pages_blocks_dp_hub" CASCADE;
  DROP TABLE "pages_blocks_dp_workflow_steps" CASCADE;
  DROP TABLE "pages_blocks_dp_workflow" CASCADE;
  DROP TABLE "pages_blocks_dp_toggle_without" CASCADE;
  DROP TABLE "pages_blocks_dp_toggle_with" CASCADE;
  DROP TABLE "pages_blocks_dp_toggle" CASCADE;
  DROP TABLE "pages_blocks_dp_resources_items" CASCADE;
  DROP TABLE "pages_blocks_dp_resources" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_hero_breadcrumb" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_hero_chips" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_hero_visual_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_cards_items_points" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_cards_items" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_timeline_items" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_timeline" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_roles_chips" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_roles" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_flow_tabs_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_flow_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_flow" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_compare_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_compare" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_stepper_stages" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_stepper" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_use_cases_items_panel_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_use_cases_items" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_use_cases" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_stack_left" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_stack_core" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_stack_right" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_stack" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_checklist_groups_items" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_checklist_groups" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_checklist" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_showcase_tabs_chips" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_showcase_tabs_data" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_showcase_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_showcase" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_records_capabilities" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_records_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_records" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_hub_top" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_hub_bottom" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_hub_points" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_hub" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_workflow_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_workflow" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_toggle_without" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_toggle_with" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_toggle" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_resources_items" CASCADE;
  DROP TABLE "_pages_v_blocks_dp_resources" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_dp_hero_visual_rows_status";
  DROP TYPE "public"."enum_pages_blocks_dp_hero_layout";
  DROP TYPE "public"."enum_pages_blocks_dp_hero_visual";
  DROP TYPE "public"."enum_pages_blocks_dp_cards_items_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_cards_items_tone";
  DROP TYPE "public"."enum_pages_blocks_dp_cards_theme";
  DROP TYPE "public"."enum_pages_blocks_dp_cards_variant";
  DROP TYPE "public"."enum_pages_blocks_dp_cards_columns";
  DROP TYPE "public"."enum_pages_blocks_dp_flow_tabs_steps_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_flow_tabs_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_use_cases_items_panel_rows_status";
  DROP TYPE "public"."enum_pages_blocks_dp_use_cases_items_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_checklist_groups_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_showcase_tabs_data_status";
  DROP TYPE "public"."enum_pages_blocks_dp_showcase_tabs_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_showcase_tabs_visual";
  DROP TYPE "public"."enum_pages_blocks_dp_records_capabilities_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_records_rows_status";
  DROP TYPE "public"."enum_pages_blocks_dp_hub_top_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_hub_bottom_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_hub_points_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_workflow_steps_icon";
  DROP TYPE "public"."enum_pages_blocks_dp_resources_items_tone";
  DROP TYPE "public"."enum__pages_v_blocks_dp_hero_visual_rows_status";
  DROP TYPE "public"."enum__pages_v_blocks_dp_hero_layout";
  DROP TYPE "public"."enum__pages_v_blocks_dp_hero_visual";
  DROP TYPE "public"."enum__pages_v_blocks_dp_cards_items_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_cards_items_tone";
  DROP TYPE "public"."enum__pages_v_blocks_dp_cards_theme";
  DROP TYPE "public"."enum__pages_v_blocks_dp_cards_variant";
  DROP TYPE "public"."enum__pages_v_blocks_dp_cards_columns";
  DROP TYPE "public"."enum__pages_v_blocks_dp_flow_tabs_steps_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_flow_tabs_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_use_cases_items_panel_rows_status";
  DROP TYPE "public"."enum__pages_v_blocks_dp_use_cases_items_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_checklist_groups_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_showcase_tabs_data_status";
  DROP TYPE "public"."enum__pages_v_blocks_dp_showcase_tabs_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_showcase_tabs_visual";
  DROP TYPE "public"."enum__pages_v_blocks_dp_records_capabilities_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_records_rows_status";
  DROP TYPE "public"."enum__pages_v_blocks_dp_hub_top_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_hub_bottom_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_hub_points_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_workflow_steps_icon";
  DROP TYPE "public"."enum__pages_v_blocks_dp_resources_items_tone";`)
}
