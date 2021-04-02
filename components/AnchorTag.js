import Link from 'next/link'

const AnchorTag = (props) => {
  const { href, title, target, children } = props
  if (target) {
    return <a {...props}>{children}</a>
  }
  return <Link href={`/${href}`}><a>{title || children}</a></Link>
}

export default AnchorTag