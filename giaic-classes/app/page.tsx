import Link from 'next/link'

export default function Home() {
  return (
    <ul>
    <li>Home</li>
    <Link href="/about"><li>About</li></Link>
    <Link href='/career'><li>Career</li></Link>
    <Link href='/contact-us'><li>Contact</li></Link>
    </ul>
  )
}