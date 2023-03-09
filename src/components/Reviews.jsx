import { getReviews } from "../routes/api"
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        getReviews().then((reviews) => {
            if (category === undefined) setReviews(reviews)
            else {
                const reviewsByCategory = reviews.filter((review) => {
                    return review.category === category
                })
                setReviews(reviewsByCategory)
            }
            setIsLoading(false)
        });
    }, [category])

    const reviewsList = reviews.map((review) => {
        return (
            <Link className="Container" to={`/${review.review_id}`}>
                <img src={review.review_img_url} id="reviewImgs" alt="represents the game" />
                <h2 id="reviewTitles">{review.title}</h2>
                <p id="reviewAuthors">Review by {review.owner}
                    {review.created_at.slice(2, 10)}
                </p>
                <p id="reviewDesigners">{review.designer}</p>
            </Link>
        )
    });

    function Header() {
        if (category) {
            return (
                <h1 className="reviewsTitle">{category} Reviews</h1>
            )
        }
        else return (<h1 className="reviewsTitle">Game Reviews</h1>)
    }

    if (isLoading) return (<h2>Loading...</h2>)
    else {
        return (<div>
            <Header></Header>
            <ul className="reviewList">{reviewsList}</ul>
        </div>)
    }
}