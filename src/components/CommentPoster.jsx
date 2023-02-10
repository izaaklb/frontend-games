import { getUsers } from "../routes/api"
import { useEffect, useState } from "react"

export default function CommentPoster() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        })
    }, [])


    return (
          <div>
        <label htmlFor="commentUser">Please Select Your User:</label>
        <select id="commentUser"></select>         
        <form><input type="text" name="" id="" /></form>      
    </div>
    )
}