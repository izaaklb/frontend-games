import { getReviews } from "../routes/api"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

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
            return (<nav>
                <Link to={`/${review.review_id}`}>{review.title}</Link>
            </nav>)
    })
    if(isLoading) return (<h2>Loading...</h2>)
    else {
    return (<div>
        <h2>Reviews:</h2>
        <ul>{reviewsList}</ul>
    </div>)
    }

}
