# Next Image Component Example

## Markdown image syntax
- Uses default options for `next/image` component.
- `next/image` requires absolute paths for src
- width and height is required
  - I set default dimensions, so `next/image` component won't throw an error, but it will distort your images if you don't provide image dimensions in the query string
```markdown
![Excalidrawn PNG](/images/excalidrawn.png?600x460)
```
**NOTE:** Markdown image syntax does not accept any other props in the query string. 


## Custom JSX in MDX tag
Example using `next/image` component via custom JSX in MDX tag `<Image />`

<Image src="/images/excalidrawn.png" alt="Excalidrawn PNG" height="460" width="600" layout="responsive" />

```jsx
<Image src="/images/excalidrawn.png" alt="Excalidrawn PNG" height="460" width="600" layout="responsive" />
```
Following props are accepted and its defaults in `<Image />`
```js
let {
    src,
    alt,
    width = 600,
    height = 460,
    layout = 'intrinsic' } = props
```

**NOTE:** I decided not to support `layout='fill'` option because it's overly complicated for use in markdown content. I recommend importing `next/image` component and work with it directly since it requires wrapping a div container and tinkering with its style. 

If you don't want your images to be aligned center, you can change CSS styling for `.nextImageWrapper` in global.css

If you want to customize your MDX components, you can find this code in `_app.js`
```js
import Image from '../components/Image'

const mdComponents = {
    a: props => <AnchorTag {...props} />,
    code: CodeBlock,
    img: (props) => <div className="nextImageWrapper"><Image  {...props} /></div>,
    Image: (props) => <div className="nextImageWrapper"><Image  {...props} /></div>
}
```
