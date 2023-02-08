import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-v3ty.onrender.com/api",
});

export const getReviews = (reviewId) => {
  if (!reviewId) {
    return gamesApi.get("/reviews").then(({ data }) => {
      return data;
    });
  } else
    return gamesApi.get(`reviews/${reviewId}`).then(({ data }) => {
      return data;
    });
};
