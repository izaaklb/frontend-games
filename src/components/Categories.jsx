import { getReviews } from "../routes/api.js"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Categories() {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviews().then((reviews) => {
            const allCategories = reviews.map((review) => {
                return review.category
            })
            const categoriesOnce = [...new Set(allCategories)]
            setCategories(categoriesOnce)
            setIsLoading(false)
        });
    }, [])

    const categoriesList = categories.map((category) => {
        return (
            <Link to={`/reviews/${category}`} className="category">{category}</Link>
        )
    })

    if(isLoading) return (<h2>Loading...</h2>)
    else return (
        <ul className="categories">{categoriesList}</ul>
    )
}