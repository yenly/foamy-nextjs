import '../styles/global.css'
import '../styles/prism-theme-night-owl.css'
import Layout from '../components/Layout'
import siteData from '../siteconfig'
import {MDXProvider} from '@mdx-js/react'

const mdComponents = {
    a: props => <a {...props}>{props.title || props.children}</a>
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
