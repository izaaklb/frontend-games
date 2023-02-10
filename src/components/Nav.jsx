import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <ul className='linkList'>
            <li key={"Home"}><Link className="Nav_Link" to="/">Home</Link></li>
        </ul>
    )
}