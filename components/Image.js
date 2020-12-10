import NextImage from 'next/image'

export default function Image(props) {
  let {
    src,
    alt,
    width = 600,
    height = 460,
    layout = 'intrinsic',
    objectFit = 'none',
    objectPosition = '50% 50%' } = props
  if(src.includes('?')) {
    const dimensions = src.split('?')
    const widthHeight = dimensions[1].split('x')
    width = widthHeight[0]
    height = widthHeight[1]
  }
  switch(layout) {
    case 'fixed':
    case 'responsive':
      return (
        <>
          <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout={layout}
          />
        </>
      )
    case 'fill':
      return (
        <>
          <NextImage
            src={src}
            alt={alt}
            layout={layout}
            objectFit={objectFit}
            objectPosition={objectPosition}
          />
        </>
      )
    default:
      return (
        <>
          <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </>
      )
  }

}