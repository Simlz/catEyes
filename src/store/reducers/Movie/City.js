
import { GET_ALL_CITY_LIST } from '../../actions/actionTypes'

const initialState = {
    list: {},
    item:{},
  }

export default function (state = initialState, action) {

    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
  
        case GET_ALL_CITY_LIST:
          return{
            ...state,
            list:action.payload
          }
      default:
        return state;
    }
  
  }
  