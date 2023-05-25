import DraftPage from './[slug]/page'

// NOTE: there is a known bug in development mode when mixing dynamic and static exports
// it will throw an error when navigating while previewing, this does not effect production builds
// what is happening is draft mode conditionally renders the draft page component, a dynamic page that reads cookies
// the fix here is to explicitly set `force-dynamic`, indicating to the compiler that this is intentional
// but unfortunately there is no known workaround for development mode
export const dynamic = 'force-dynamic'

export default DraftPage
