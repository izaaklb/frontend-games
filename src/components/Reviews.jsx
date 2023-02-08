import { getReviews } from "../routes/api"
import { useState, useEffect } from 'react'

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviews().then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        });
    }, [])   

    const reviewsList = reviews.map((review) => {
        return <div className='review'>
            <li className='reviewTitle'>{review.title}</li> 
            <img src={review.review_img_url} className='reviewImg'></img>
            <p className='reviewBody'>{review.review_body}</p>
            </div>
    })
    if(isLoading) return (<h2>Loading...</h2>)
    else {
    return (<div>
        <h2>Reviews:</h2>
        <ul>{reviewsList}</ul>
    </div>)
    }

}
