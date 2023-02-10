import upvote from '../media/upvote.png'
import downvote from "../media/downvote.png"
import upUnselected from "../media/upUnselected.png"
import downUnselected from "../media/downGray.png"
import { useState } from 'react'
import { patchCommentVotes } from '../routes/api'

export default function Votes ({votes, commentId}) {
    const [voteCount, setVotes] = useState(votes);
    const [upClicked, setUpClicked] = useState(false);
    const [downClicked, setDownClicked] = useState(false); 
    const [upVoteImg, setUpVoteImg] = useState(upUnselected);
    const [downVoteImg, setDownVoteImg] = useState(downUnselected);
    
    function handleUpVote() {
        if(upClicked){
            setVotes(votes)
            setUpClicked(false)
            setDownClicked(false)
            setUpVoteImg(upUnselected)
            setDownVoteImg(downUnselected)
            patchCommentVotes(commentId, -1 )
        }
        if(!upClicked) {
            setVotes(votes + 1)
            setUpClicked(true)
            setDownClicked(false)
            setUpVoteImg(upvote)
            setDownVoteImg(downUnselected)
            patchCommentVotes(commentId, 1)
        }
    }
    
    function handleDownVote() {
        if(downClicked){
            setVotes(votes)
            setDownClicked(false)
            setUpClicked(false)
            setDownVoteImg(downUnselected)
            setUpVoteImg(upUnselected)
            patchCommentVotes(commentId, 1)
        }
        if(!downClicked){
            setVotes(votes - 1)
            setDownClicked(true)
            setUpClicked(false)
            setDownVoteImg(downvote)
            setUpVoteImg(upUnselected)
            patchCommentVotes(commentId, -1)
        }
    }
    
    return (<div className='voteContainer'>
        {voteCount}
    <button className='voteButton' onClick={handleUpVote}><img src={upVoteImg} className="upvote" alt="uptick"/></button>
     Vote
    <button className='voteButton' onClick={handleDownVote}><img src={downVoteImg} className="downvote" alt="downtick"/></button>
    </div>
    )
}