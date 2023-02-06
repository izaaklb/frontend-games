import axios from 'axios'

const gamesApi = axios.create({baseURL:"https://nc-games-v3ty.onrender.com/api"});

export const getReviews=() => {
    return gamesApi.get("/reviews").then(({data}) => {
        return(data)
    })
}
