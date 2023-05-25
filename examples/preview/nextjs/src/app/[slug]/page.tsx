import { notFound } from 'next/navigation'

import { fetchPage } from '../cms'
import classes from './page.module.css'

import { Gutter } from '@/components/Gutter'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'

interface PageParams {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: PageParams) {
  const page = await fetchPage(slug || 'home')

  if (page === null) {
    return notFound()
  }

  return (
    <main>
      <Gutter>
        <h1 className={classes.hero}>{page?.title}</h1>
        <RichText content={page?.richText} />
      </Gutter>
    </main>
  )
}

// There is known issue with Next.js when using `generateStaticParams` with dynamic routes
// this is only an issue in development, not production, meaning you can `yarn build` and `yarn start` without issue
// there is also currently no way of getting around this issue except removing this function
// - https://github.com/vercel/next.js/issues/48153
// - https://github.com/vercel/next.js/issues/48153
// - https://github.com/vercel/next.js/issues/44764
//
// export async function generateStaticParams() {
//   const pages = await fetchPages()

//   return pages.map(({ slug }) => ({
//     slug,
//   }))
// }
