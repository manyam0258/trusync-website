/**
 * Pages that still live only in code, grouped for sitemap.xml and llms.txt.
 * Every page is now managed in the CMS, which lists its pages automatically, so this is empty.
 */
export const CODE_PAGE_GROUPS: { group: string; pages: { path: string; label: string }[] }[] = []

export const CODE_ROUTES = ['/', ...CODE_PAGE_GROUPS.flatMap((g) => g.pages.map((p) => p.path))]
