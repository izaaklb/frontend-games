import { Link } from 'react-router-dom'
import { UserContext } from "../contexts/User";
import { useContext } from 'react';

export default function Nav() {
    const { user, setUser } = useContext(UserContext);
   
    function Links() {
        return (
            <div>
                <li key="Home"><Link className="Nav_Link" to="/">Home</Link></li>
                <li key="Categories"><Link className="Nav_Link" to="/Categories">Categories</Link></li>
            </div>
        )
    }
    
    const LogOutButton = () => {
        return (
            <button onClick={() => { setUser([]) }}>Log Out</button>
        )
    }

    if (user.length === 0) {
        return (
            <ul className='linkList'>
                <Links></Links>
                <li key="Sign in"><Link className="Nav_Link" to="/login">Sign In</Link></li>
            </ul>
        )
    }
    else {
        return (
            <ul className='linkList'>
                <Links></Links>
                <li key="Signed in"><Link className="Nav_Link" to="/login">Signed is as: {user.username}</Link></li>
                <LogOutButton />
            </ul>
        )
    }
};