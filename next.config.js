const rehypePrism = require('@mapbox/rehype-prism')
const remarkImages = require('remark-images')
const remarkExternalLinks = require('remark-external-links')
const remarkFootnotes = require('remark-footnotes')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkImages,
      remarkExternalLinks,
      [remarkFootnotes, { inlineNotes: true }]
    ],
    rehypePlugins: [rehypePrism]
  },
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
})
