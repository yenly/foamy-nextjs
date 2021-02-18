import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import path from 'path'
import remarkExternalLinks from 'remark-external-links'
import remarkImages from 'remark-images'
import remarkFootnote from 'remark-numbered-footnote-labels'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkWikiLink from 'remark-wiki-link'
import AnchorTag from '../components/AnchorTag'
import CodeBlock from '../components/CodeBlock'
import Image from '../components/Image'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

// prettier-ignore
const components = {
    a: props => <AnchorTag {...props} />,
    code: CodeBlock,
    img: (props) => <div className="nextImageWrapper"><Image  {...props} /></div>,
    Image: (props) => <div className="nextImageWrapper"><Image  {...props} /></div>,
    Button: dynamic(() => import('../components/Button')),
}

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components })
  return content
}

export const getStaticProps = async ({ params }) => {
  let postPath = 'index'

  if (params && params.slug) {
    postPath = Array.isArray(params.slug) ? params.slug.join('/') : params.slug
  }

  const postFilePath = path.join(POSTS_PATH, `${postPath}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        remarkWikiLink,
        remarkImages,
        remarkExternalLinks,
        remarkFootnote,
        remarkUnwrapImages,
      ],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug: slug.split('/') } }))

  return {
    paths,
    fallback: false,
  }
}
