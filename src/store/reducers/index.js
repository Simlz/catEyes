import { combineReducers } from "redux"
import cinemaReducer from "./Cinema"

export default combineReducers({
    posts : cinemaReducer
})