import { GET_ALL_CINEMA_LIST } from '../../actions/actionTypes';


export const getAllCinemaList = () => dispatch => {
  fetch("maoyan/ajax/cinemaList?day=2019-08-03&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1564794495376&cityId=1")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: GET_ALL_CINEMA_LIST,
        payload: posts
      })
    )
}

// export const createPost = postData => dispatch => {
//   console.log("createPost");
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     )
// }