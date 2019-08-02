import { GET_ALL_CINEMA_LIST } from "../actionTypes"

export const getAllCinemaList = () => dispatch =>{
    fetch("/maoyan/ajax/filterCinemas?ci=1")
    .then(res => res.json())
    .then(posts => dispatch({
        type : GET_ALL_CINEMA_LIST,
        payload : posts
    }))
}