import '../styles/global.css'
import '../styles/prism-theme-night-owl.css'
import Layout from '../components/Layout'
import siteData from '../siteconfig'
import CodeBlock from '../components/CodeBlock'
import AnchorTag from '../components/AnchorTag'
import Image from '../components/Image'

export default function App({ Component, pageProps }) {
  return (
    <Layout siteData={siteData}>
      <Component {...pageProps} />
    </Layout>
  )
}
