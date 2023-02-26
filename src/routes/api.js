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

export const getComments = (reviewId) => {
  return gamesApi.get(`/reviews/${reviewId}/comments`).then(({data}) => {
    return data;
  })
}

export const getUsers  = () => {
  return gamesApi.get('/users').then(({data})  => {
  return data
  })
}

export const patchCommentVotes = (comment_id, voteInc) => {
  return gamesApi.patch(`/comments/${comment_id}`, {inc_votes: voteInc})
}

export const patchReviewVotes = (review_id, voteInc) => {
  return gamesApi.patch(`/reviews/${review_id}`, {inc_votes: voteInc})
 
}

export const postComments = (reviewId, username, body) => {
  return gamesApi.post(`reviews/${reviewId}/comments`, {username: username, body: body})
  .then(({data}) => {
    return data;
  })
}
