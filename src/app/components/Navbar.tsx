import sass from '../Sass/navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav id={ sass.menuContainer }>
      <ul>
        <li><Link href={'/enemies'}>Black Alien Scum</Link></li>
        <li>to</li>
        <li>tre</li>
      </ul>
    </nav>
  )
}

export default Navbar