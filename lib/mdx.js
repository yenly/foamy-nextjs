import fs from 'fs'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import remarkExternalLinks from 'remark-external-links'
import remarkImages from 'remark-images'
import remarkInlineLinks from 'remark-inline-links'
import remarkFootnote from 'remark-numbered-footnote-labels'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkWikiLink from 'remark-wiki-link'
import MDXComponents from '../components/MDXComponents'

const root = process.cwd()
const POSTS_DIR = '_posts'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(root, POSTS_DIR)

export const getAllFiles = function (dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      arrayOfFiles = getAllFiles(`${dirPath}/${file}`, arrayOfFiles)
    } else {
      arrayOfFiles.push(
        path.join(dirPath, '/', file).replace(`${POSTS_PATH}/`, '')
      )
    }
  })

  return arrayOfFiles
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = getAllFiles(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

export async function getFileBySlug(slug) {
  const postFilePath = path.join(root, POSTS_DIR, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath, 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        remarkImages,
        remarkExternalLinks,
        remarkFootnote,
        remarkInlineLinks,
        remarkUnwrapImages,
        [
          remarkWikiLink,
          {
            hrefTemplate: (permalink) => `${permalink}`,
            pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
          },
        ],
      ],
    },
    scope: data,
  })

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, POSTS_DIR))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, POSTS_DIR, postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}
