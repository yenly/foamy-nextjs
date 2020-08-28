import '../styles/global.css'
import '../styles/prism-theme-night-owl.css'
import Layout from '../components/Layout'
import siteData from '../siteconfig'

export default function App({ Component, pageProps }) {
  return (
    <Layout siteData={siteData}>
      <Component {...pageProps} />
    </Layout>
  )
}
