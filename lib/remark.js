const remarkExternalLinks = require('remark-external-links')
const remarkImages = require('remark-images')
const remarkInlineLinks = require('remark-inline-links')
const remarkFootnote = require('remark-numbered-footnote-labels')
const remarkUnwrapImages = require('remark-unwrap-images')
const remarkWikiLink = require('remark-wiki-link')

const remarkPlugins = [
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
]

module.exports = remarkPlugins
