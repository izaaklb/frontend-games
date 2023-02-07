import { Link } from 'react-router-dom'

export default function Nav() {
    return (<nav>
        <ul className='linkList'>
            <li><Link className="Nav_Link" to="/">Home</Link></li>
            <li><Link className="Nav_Link" to="/reviews">Reviews</Link></li>
        </ul>
        </nav>
    )
}