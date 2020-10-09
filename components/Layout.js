import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, siteData }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={siteData.author} />
        <meta name="description" content={siteData.description} />
        <title>{siteData.title}</title>
      </Head>
      <Header siteName={siteData.title} />
      <main className="container">
        {children}
      </main>
    </>
  )
}