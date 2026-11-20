/**
 * Pages that live only in code, grouped for sitemap.xml and llms.txt.
 * Content pages are managed in the CMS, which lists them automatically; only interactive tools are listed here.
 */
export const CODE_PAGE_GROUPS: { group: string; pages: { path: string; label: string }[] }[] = [
  { group: 'Sentinel DPDP tools', pages: [{ path: '/dpdp/sdf-assessment', label: 'Significant Data Fiduciary readiness check' }] },
]

export const CODE_ROUTES = ['/', ...CODE_PAGE_GROUPS.flatMap((g) => g.pages.map((p) => p.path))]
