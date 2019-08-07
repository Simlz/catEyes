
import { GET_ALL_CITY_LIST } from '../../actions/actionTypes'

export const getAllCityList = () => dispatch => {
    fetch("/maoyan/dianying/cities.json")
    .then(data =>data.json())
    .then(wei => dispatch({
        type:GET_ALL_CITY_LIST,
        payload:wei
    }))
    
    
}