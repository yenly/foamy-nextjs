import Link from 'next/link'

const AnchorTag = (props) => {
  const { href, title, target, children } = props
  const shouldBeSimpleLink = target || href.startsWith('#')
  if (shouldBeSimpleLink) {
    return <a {...props}>{children}</a>
  }
  return (
    <Link href={href}>
      <a>{title || children}</a>
    </Link>
  )
}

export default AnchorTag
