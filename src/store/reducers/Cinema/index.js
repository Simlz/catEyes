import { GET_ALL_CINEMA_LIST } from "../../actions/actionTypes"
import cinemaList from "../../states/Cinema"

export default function (state = cinemaList,action) { 
    switch(action.type){
        case GET_ALL_CINEMA_LIST:
            return{
                ...state,
                cinemaList : action.payload
            }
        default:{
            return state
        }
    }
 }