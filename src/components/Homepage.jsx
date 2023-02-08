import { getReviews } from "../routes/api"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function () {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviews().then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        });
    }, [])   

    const reviewsList = reviews.map((review) => {
            return (<nav className="review">
                <Link className ="Container" to={`/reviews/${review.review_id}`}>
                <img src={review.review_img_url} id="reviewImgs"/>
                <h id="reviewTitles">{review.title}</h>
                <p1 id="reviewAuthors">Review by {review.owner} 
                <p3 id="reviewDates"> {review.created_at.slice(2,10)}</p3>
                </p1>
                <p2 id="reviewDesigners">{review.designer}</p2>
                </Link>
            </nav>)
})

if(isLoading) return (<h2>Loading...</h2>)
else {
return (<div>
    <h2 className="homeTitle">Game Reviews</h2>
    <ul className="reviewList">{reviewsList}</ul>
</div>)
}
}