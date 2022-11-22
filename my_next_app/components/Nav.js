import Link from 'next/link'
import Style from '../styles/Nav.module.css'

const Nav = () => {
  return (
      <nav className={Style.nav}>
          <ul>
              <li>
                  <Link href='/'>Home</Link>
              </li>
              <li>
                  <Link href='/about'>About</Link>
              </li>
          </ul>
    </nav>
  )
}

export default Nav