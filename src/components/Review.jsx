import { useState, useEffect } from 'react'
import { getReviews } from '../routes/api';
import { useParams } from 'react-router-dom'
import Comments from './Comments';


export default function Review () {
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {reviewId} = useParams()

    useEffect(() => {
    getReviews(reviewId).then((review) => {
        setReview(review);
        setIsLoading(false)
    })}, [])

    if(isLoading) return (<h2>Loading...</h2>)
    else return (<div className='review'>
            <h1 className='reviewTitle'>{review.title}</h1>
            <div className='reviewContainer'>
            <img src={review.review_img_url} className='reviewImg'></img>
            <p className='reviewBody'>{review.review_body}</p>
            <p className='reviewDesigner'>Game created by: {review.designer} </p>
            </div>
            <Comments reviewId={review.review_id}/>
            </div>)

}