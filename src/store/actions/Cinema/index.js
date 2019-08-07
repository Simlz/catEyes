<<<<<<< HEAD
import { GET_ALL_CINEMA_LIST,GET_CINEMA_DETAIL,GET_CINEMA_DATA,GET_CHOOSE_CARD_MSG } from '../../actions/actionTypes';
import { dataNow } from "../../../common/tool"

// 获取影院列表
export const getAllCinemaList = (day=dataNow(),offset=0,cityId=1) => dispatch => {
  fetch("maoyan/ajax/cinemaList?day="+day+"&offset="+offset+"&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1564794495376&cityId="+cityId)
=======
import { GET_ALL_CINEMA_LIST } from '../../actions/actionTypes';


export const getAllCinemaList = () => dispatch => {
  fetch("maoyan/ajax/cinemaList?day=2019-08-03&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1564794495376&cityId=1")
>>>>>>> 5e6cf689ffebf740cc9d6a8deafca7a60a27b54e
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: GET_ALL_CINEMA_LIST,
        payload: posts
      })
    )
}

<<<<<<< HEAD
// 获取影院详情
 let cinemaId = window.location.pathname.split("/")[3]
export const getCinemaDetail = (id=cinemaId) => dispatch => {
  fetch("/maoyan/ajax/cinemaDetail?cinemaId="+id)
  .then(res => res.json())
  .then(post =>
    dispatch({
      type : GET_CINEMA_DETAIL,
      payload :post
    }))
}

export const getCinemaData = (id=cinemaId) => dispatch =>{
  fetch("/maoyan/ajax/cinemaAjaxDetail?cinemaId="+cinemaId)
  .then(res =>res.json())
  .then(data =>
    dispatch({
      type : GET_CINEMA_DATA,
      payload : data
    }))
}

// 获取全城/品牌/特色内容
export const getChooseCard = (id=1) => dispatch =>{
  fetch("/maoyan/ajax/filterCinemas?ci="+id)
  .then(res => res.json())
  .then(cardList =>
    dispatch({
      type : GET_CHOOSE_CARD_MSG,
      payload : cardList
    }))
}

=======
>>>>>>> 5e6cf689ffebf740cc9d6a8deafca7a60a27b54e
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