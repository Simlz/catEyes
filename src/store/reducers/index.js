import { combineReducers } from "redux"
import cinemaReducer from "./Cinema"
import movieReduxcer from './Movie'
import cityReduxcer from './Movie/City'

export default combineReducers({
    posts : cinemaReducer,
    listWei: movieReduxcer,
    wei:cityReduxcer
})