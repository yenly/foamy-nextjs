# Foamy NextJS Starter

This starter combines [Foam](https://foambubble.github.io/foam) with [NextJS](https://nextjs.org). 

This starter combines Foam with NextJS. I built this from using [NextJS with MDX example repo](https://github.com/mdx-js/mdx). 

## Getting Started

```bash
git clone 
cd foamy_nextjs
npm install 
# or
yarn install

npm run dev
# or
yarn dev
```

Open index.md in `/pages`  VS Code and start adding your own content using Foam. Foam requires certain VS Codes extensions for it to work properly.

All other markdown files and notes folder are examples and can be deleted. Before doing so, I recommend clicking around to see how things work.

## How to customize
I purposefully built this starter to be bare in styling and functionality to leave plenty of room to customize and build on top of. 

### Syntax highlighting theme
You can create own or convert your VS Code theme to use with this tool:
[VS Code to Prism Themes](https://prism.dotenv.dev/)

Add your CSS file in `/styles` folder and import it to `_app.js`
```javascript
import '../styles/prism-theme-night-owl.css'
```

### CSS Styling Methods
NextJS uses CSS Modules by default. [Next JS Docs: Built-In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support) on how to configure for other methods.

### Siteconfig.js
Open `siteconfig.js` and edit. This is used for populating site name in the Header component and in meta content.
```
export default {
  "title": "Foamy NextJS",
  "description": "Digital Garden built with Foam and NextJS with MDX",
  "author": "Yenly Ma"
}
```

### Remark and Rehype plugins
Add/remove plugins in `next.config.js`
```javascript
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
```

### How to update Foam
Fork the latest Foam template. Copy `.vscode` directory to your root level of this repo. Open your workspace and things should magically work. (It's a Foam feature.) If not, try:
- update VS Code extensions defined in `.vscode/extensions.json`
- disabled and enable extensions needed and restart VS Code


### Recommended Resources
- [Foam Recipes](https://foambubble.github.io/foam/recipes)
- [Learn NextJS](https://nextjs.org/learn/basics/create-nextjs-app) or dig into their [Docs](https://nextjs.org/docs/getting-started)
- [MDXJS](https://mdxjs.com/) 
  - [MDX Conf 2020](https://egghead.io/playlists/mdx-conf-3fc2) - Demystifying MDX talk is particularly helpful for me as a beginner
