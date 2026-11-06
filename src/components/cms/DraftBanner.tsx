import Link from 'next/link'

import { RefreshRouteOnSave } from './RefreshRouteOnSave'

/** Shown only in preview mode. Visitors never see it. */
export function DraftBanner({ status }: { status?: string | null }) {
  return (
    <>
      <RefreshRouteOnSave />
      <div
        role="status"
        className="fixed bottom-4 left-4 z-[60] flex items-center gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 shadow-lg"
      >
        <span>
          <strong>Preview.</strong> {status === 'published' ? 'Showing the latest saved changes.' : 'This draft is not visible to visitors.'}
        </span>
        <Link href="/preview/exit" prefetch={false} className="font-semibold underline underline-offset-2">
          Exit preview
        </Link>
      </div>
    </>
  )
}
