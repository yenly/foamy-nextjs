import '../styles/global.css'
import '../styles/prism-theme-night-owl.css'
import Layout from '../components/Layout'
import siteData from '../siteconfig'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'
import AnchorTag from '../components/AnchorTag'

const mdComponents = {
    a: props => <AnchorTag {...props} />,
    code: CodeBlock
}

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={mdComponents}>
      <Layout siteData={siteData}>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>  
  )
}
