import type { ComponentProps } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

type RichTextData = ComponentProps<typeof RichText>['data']

export function RichTextContent({ data, className = '' }: { data: unknown; className?: string }) {
  if (!data) return null
  return (
    <div className={`rich-text ${className}`}>
      <RichText data={data as RichTextData} />
    </div>
  )
}
