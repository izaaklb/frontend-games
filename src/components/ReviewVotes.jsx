import { patchReviewVotes } from "../routes/api";
import upvote from '../media/upvote.png'
import downvote from "../media/downvote.png"
import upUnselected from "../media/up arrow white.png"
import downUnselected from "../media/down arrow white.png"
import { useState } from 'react'

export default function ReviewVotes ({votes, reviewId}) {
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
            patchReviewVotes(reviewId, -1 )
        }
        if(!upClicked) {
            setVotes(votes + 1)
            setUpClicked(true)
            setDownClicked(false)
            setUpVoteImg(upvote)
            setDownVoteImg(downUnselected)
            patchReviewVotes(reviewId, 1)
        }
    }
    
    function handleDownVote() {
        if(downClicked){
            setVotes(votes)
            setDownClicked(false)
            setUpClicked(false)
            setDownVoteImg(downUnselected)
            setUpVoteImg(upUnselected)
            patchReviewVotes(reviewId, 1)
        }
        if(!downClicked){
            setVotes(votes - 1)
            setDownClicked(true)
            setUpClicked(false)
            setDownVoteImg(downvote)
            setUpVoteImg(upUnselected)
            patchReviewVotes(reviewId, -1)
        }
    }

    return (<div className='reviewVoteContainer'>
        {voteCount}
    <button className='reviewVoteButton' onClick={handleUpVote}><img src={upVoteImg} className="upvote" alt="uptick"/></button>
        Vote
        <button className='reviewVoteButton' onClick={handleDownVote}><img src={downVoteImg} className="downvote" alt="downtick"/></button>
    </div>
    )
}