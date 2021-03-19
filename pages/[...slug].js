import hydrate from 'next-mdx-remote/hydrate'
import MDXComponents from '../components/MDXComponents'
import { getAllFiles, getFileBySlug, POSTS_PATH } from '../lib/mdx'

export default function PostPage({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components: MDXComponents })
  return content
}

export const getStaticProps = async ({ params }) => {
  let slug = 'index'

  if (params && params.slug) {
    slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug
  }

  const post = await getFileBySlug(slug)

  return { props: post }
}

export const getStaticPaths = async () => {
  const posts = await getAllFiles(POSTS_PATH)
  const paths = posts
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug: slug.split('/') } }))

  return {
    paths,
    fallback: false,
  }
}
