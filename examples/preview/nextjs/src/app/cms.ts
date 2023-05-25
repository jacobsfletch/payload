import { cookies, draftMode } from 'next/headers'

import type { Page } from '@/payload-types'

export const fetchPage = async (slug: string): Promise<Page | undefined | null> => {
  const { isEnabled: isPreviewMode } = draftMode()
  const cookieStore = cookies()
  const payloadToken = cookieStore.get('payload-token')

  const pageRes: {
    docs: Page[]
  } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${slug}${
      isPreviewMode ? '&draft=true' : ''
    }`,
    {
      headers: {
        ...(isPreviewMode
          ? {
              Authorization: `JWT ${payloadToken?.value}`,
            }
          : {}),
      },
    },
  ).then(res => res.json())

  return pageRes?.docs?.[0] ?? null
}

export const fetchPages = async (): Promise<Page[]> => {
  const pageRes: {
    docs: Page[]
  } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?depth=0&limit=100`).then(res =>
    res.json(),
  ) // eslint-disable-line function-paren-newline

  return pageRes?.docs ?? []
}
