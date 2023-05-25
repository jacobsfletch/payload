import { draftMode } from 'next/headers'

import { PageTemplate } from '../../[slug]/page'
import { fetchDraftPage } from '../../cms'

export const dynamic = 'force-dynamic'

interface PageParams {
  params: { slug: string }
}

export default async function DraftPage({ params: { slug } }: PageParams) {
  const { isEnabled: isDraftMode } = draftMode()

  if (!isDraftMode) {
    return null
  }

  const page = await fetchDraftPage(slug || 'home')

  if (page === null) {
    return null
  }

  return <PageTemplate page={page} />
}
