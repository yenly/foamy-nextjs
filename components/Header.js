import Link from 'next/link'

export default function Header({ siteName }) {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/"><a>{siteName}</a></Link>
        </nav>
      </header>
    </>
  )
}