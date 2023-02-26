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
            return (<nav className="review" key={review.review_id}>
                <Link className ="Container" to={`/reviews/${review.review_id}`}>
                <img src={review.review_img_url} id="reviewImgs"/>
                <h2 id="reviewTitles">{review.title}</h2>
                <p id="reviewAuthors">Review by {review.owner} 
                {review.created_at.slice(2,10)}
                </p>
                <p id="reviewDesigners">{review.designer}</p>
                </Link>
            </nav>)
})

if(isLoading) return (<h2>Loading...</h2>)
else {
return (<div>
    <h1 className="homeTitle">Game Reviews</h1>
    <ul className="reviewList">{reviewsList}</ul>
</div>)
}
}