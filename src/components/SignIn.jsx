import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "../routes/api";


export default function SignIn() {
    const [ users, setUsers ] = useState([])
    const [ isLoading, setIsLoading] = useState(true)
    const { user, setUser } = useContext(UserContext);
    
    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
            setIsLoading(false)
        })
    }, []);

    const userList = users.map((user) => {
        return <div>
            <button key={user.name} onClick={() => setUser(user)}>{user.name}
            <img src={user.avatar_url} className="loginAvatar" alt="profile"/>
             </button>
            </div> 
            });

    if(isLoading){
        return (<h1>Loading...</h1>)
    }        
    else return (<div className="loginPage">
        <h1 className="loginHeader">Please select a user:</h1>
        <ul>{userList}</ul>
        </div>
    )}



