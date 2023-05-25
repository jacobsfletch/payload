import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// ISR is not actually working with the App Router, this is because Next.js never caches routes that use `cookies` or `headers`
// In the Pages directory, we were able to attach the token as `previewData` in the `preview` endpoint, but that is not possible with the App Router
// The reason we need cookies is to get the `payload-token` and use it to draft pages via `Authorization: JWT ${payloadToken}` header
// Full details here: https://nextjs.org/docs/app/building-your-application/data-fetching/caching#per-request-caching
export async function GET(request: NextRequest): Promise<unknown> {
  const path = request.nextUrl.searchParams.get('revalidatePath')
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.NEXT_PRIVATE_REVALIDATION_KEY) {
    return NextResponse.json({ revalidated: false, now: Date.now() })
  }

  if (typeof path === 'string') {
    await revalidatePath(path)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  }

  return NextResponse.json({ revalidated: false, now: Date.now() })
}
