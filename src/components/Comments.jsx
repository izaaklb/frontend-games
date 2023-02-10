import { useEffect, useState } from "react";
import { getComments, getUsers } from "../routes/api";
import CommentPoster from "./CommentPoster";

export default function Comments({reviewId}) {
    const [comments, setComments] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        getComments(reviewId).then((comments) => {
            setComments(comments)
        })
        getUsers().then((users)=> {
            setUsers(users)
            setIsLoading(false)
        })
    }, [])

    const commentsList = comments.map((comment) => {
        const dateFormatter = (comment) => {
            return comment.created_at.slice(2, 10);
        }
        const profilePic = (comment, users)  => {
            const profilePic = users.find(object => object.username === comment.author)
            return profilePic.avatar_url;
        }
       return (<li key={comment.comment_id} className="Comments">
        <img src={profilePic(comment, users)} className="commentPic"/>
        <h1 className="commentAuthor">{comment.author} 
        <section className="commentDate">{dateFormatter(comment)}</section>
        </h1> 
        <p className="commentBody">{comment.body}</p>      
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
            <CommentPoster/>
        <ul>
        {commentsList}
        </ul>
        </div>
    )
}
