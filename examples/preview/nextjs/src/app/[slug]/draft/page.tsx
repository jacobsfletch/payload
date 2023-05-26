import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { fetchDraftPage } from '../../cms'
import { PageTemplate } from '../page'

export const dynamic = 'force-dynamic'

interface PageParams {
  params: { slug: string }
}

// In order to comply with Next.js App Router, pages must either be fully static or fully dynamic
// Meaning they cannot change between build and runtime, or during runtime, or an error will be thrown
// Using `cookies` is one way pages are made dynamic, and there is no way to conditionally use them
// The `payload-token` needs to be attached to the request's `Authorization` header
// More here: https://discord.com/channels/752553802359505017/1111410349246255165
export default async function DraftPage({ params: { slug } }: PageParams) {
  const { isEnabled: isDraftMode } = draftMode()

  if (!isDraftMode) {
    return notFound()
  }

  const page = await fetchDraftPage(slug || 'home')

  if (page === null) {
    return notFound()
  }

  return <PageTemplate page={page} />
}
