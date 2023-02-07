import { useState, useEffect } from 'react'
import { getReviews } from '../routes/api';
import { useParams } from 'react-router-dom'

export default function Home() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {reviewId} = useParams()

    useEffect(() => {
        if(!reviewId){
        getReviews().then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        })}
        else { 
            getReviews(reviewId).then((review) => {
                setReviews([review]);
                setIsLoading(false)
            }) 
        }
    }, [])   

    const reviewsList = reviews.map((review) => {
        return <div className='review'>
            <li className='reviewTitle'>{review.title}</li> 
            <img src={review.review_img_url} className='reviewImg'></img>
            <p className='reviewBody'>{review.review_body}</p>
            </div>
    })
    
    if(!isLoading){
    return (
        <ul className='reviewList'>{reviewsList}</ul>
    )

    }
    else {
          return (
            <h2>Loading...</h2>
        )
    }
    
}