import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <ul className='linkList'>
            <li><Link className="Nav_Link" to="/">Home</Link></li>
            {/* <li><Link className="Nav_Link" to="/reviews">All Reviews</Link></li> */}
        </ul>
    )
}