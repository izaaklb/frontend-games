import { Link, useParams } from 'react-router-dom'
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { postComments } from '../routes/api';

export default function CommentPoster({ comments, setComments, }) {
    const { user } = useContext(UserContext);
    const { reviewId } = useParams();

    function handleSubmit(event) {
        event.preventDefault()
        const commentValue = event.target[0].value
        postComments(reviewId, user.username, commentValue).then((newComment) => {
            setComments([...comments, newComment])
        })
    }

    if (user.length === 0) {
        return (
            <div>
                <p className="unSignedInMessage">
                    Please {<Link className="Nav_Link" to="/login">Sign In</Link>} to post a comment
                </p>
            </div>
        )
    }
    return (
        <div className="commentPoster">
            <img src={user.avatar_url} className="commentPostPic" alt="profile" />
            <form onSubmit={handleSubmit}>
                <input type="text" name="commentText" id="commentBox" placeholder="Post A Comment..." />
                <input type="submit" value="Comment" id="commentSubmit"></input>
            </form>
        </div>
    )
}