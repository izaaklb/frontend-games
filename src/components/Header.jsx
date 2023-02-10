import Nav from './Nav'
import logo from '../media/logo.png'

export default function Header() {
    return (
      <div className="Header">
        <nav>
          <img src={logo} alt="logo" className='Logo'/>
        <Nav/>
        </nav>
      </div>
    )
}