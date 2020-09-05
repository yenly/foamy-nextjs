# Foamy NextJS Starter

This starter combines [Foam](https://foambubble.github.io/foam) with [NextJS](https://nextjs.org). I built this using [NextJS with MDX example repo](https://github.com/mdx-js/mdx) as my base repo. 

## Getting Started

```bash
git clone https://github.com/yenly/foamy-nextjs
cd foamy_nextjs
npm install 
# or
yarn install

npm run dev
# or
yarn dev
```

Foam requires specific VS Code extensions for it to work properly. Open the repository as a folder using the File > Open... menu item. When prompted to install recommended extensions, click **Install all** (or **Show Recommendations** if you want to review and install them one by one).

Open `index.md` in `/pages` directory and edit to your heart's content. All other markdown files and notes folder are examples. Before doing so, I recommend clicking around to see how things work.

## How to customize
I purposefully built this starter to be bare in styling and functionality to leave plenty of room to customize and build on top. 

### Basic Global styles
I used Gridlover to generate a typography system with modular scale and vertical rhythm. Add your preferred fonts, [choose your own scale](https://www.gridlover.net/try), and replace all styles in `/styles/global.css` between these comments 
```CSS
/* begin gridlover perfect fourth scale */
// ...
/* end gridlover perfect fourth scale */
```

### Syntax highlighting theme
Add your preferred prism theme CSS file in `/styles` folder and import it to `_app.js`
```javascript
import '../styles/prism-theme-night-owl.css'
```
You can convert your VS Code theme to use with this tool:
[VS Code to Prism Themes](https://prism.dotenv.dev/)

### CSS Styling Methods
NextJS uses CSS Modules by default. [Next JS Docs: Built-In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support) on how to configure for other methods.

### Siteconfig.js
`siteconfig.js` is used for populating site name in the Header and Layout components.
```javascript
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

### How to upgrade Foam
[Fork the latest Foam template](https://github.com/foambubble/foam-template). Copy `.vscode` directory to your root level of this repo. Open your workspace and things should magically work. It's Foam's magic sauce. If not, try:
- update VS Code extensions defined in `.vscode/extensions.json`
- disable and enable extensions needed and restart VS Code

### How to deploy
I pick this stack for its easy [deploy to Vercel](https://nextjs.org/docs/deployment).

### Recommended Resources
- [Foam Recipes](https://foambubble.github.io/foam/recipes)
- [Learn NextJS](https://nextjs.org/learn/basics/create-nextjs-app) or dig into their [Docs](https://nextjs.org/docs/getting-started)
- [MDXJS](https://mdxjs.com/) 
  - [MDX Conf 2020](https://egghead.io/playlists/mdx-conf-3fc2) - Demystifying MDX talk is particularly helpful for me as a beginner
