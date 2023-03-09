import { Link } from "react-router-dom"

export default function Home() {
    return (
        <ul className="homepage_links">
            <Link className="homepage_link" to="/categories">Categories</Link>
            <Link className="homepage_link" to="/reviews">All Reviews</Link>
        </ul>
    )
};