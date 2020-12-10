const remarkImages = require('remark-images')
const remarkExternalLinks = require('remark-external-links')
const remarkFootnote = require('remark-numbered-footnote-labels')
const remarkUnwrapImages = require('remark-unwrap-images')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkImages,
      remarkExternalLinks,
      remarkFootnote,
      remarkUnwrapImages
    ]
  },
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
})
