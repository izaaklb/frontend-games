import { useEffect, useState } from "react";
import { getComments, getUsers } from "../routes/api";
import Votes from './Votes'

export default function Comments({reviewId}) {
    const [comments, setComments] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        Promise.all([getComments(reviewId), getUsers()]).then((resolvedArray) => {
            setComments(resolvedArray[0]);
            setUsers(resolvedArray[1])
            setIsLoading(false);
        })
    }, [])
    const commentsList = comments.map((comment) => {
        function dateFormatter (comment) {
            return comment.created_at.slice(2, 10);
        }
        function profilePic (comment, users) {
            const profilePic = users.find(object => object.username === comment.author)
            return profilePic.avatar_url;
        }
       return (<li key={comment.comment_id} className="Comments">
        <img src={profilePic(comment, users)} className="commentPic" alt="Profile picture"/>
        <h1 className="commentAuthor">{comment.author} 
        <section className="commentDate">{dateFormatter(comment)}</section>
        </h1> 
        <p className="commentBody">{comment.body}</p>
        <Votes votes={comment.votes} commentId={comment.comment_id}/>
        </li>)
    })

    function commentPluraliser() {
        if(comments.length === 1){
            return "Comment"
        }
        else return "Comments"
    }

    if(loading) return <h1>Loading...</h1>
    else return (
        <div className="commentsContainer"> 
            <h1 className="commentsTitle"> {comments.length} {commentPluraliser()} </h1>
        <ul>
        {commentsList}
        </ul>
        </div>
    )
}
