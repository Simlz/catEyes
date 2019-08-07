<<<<<<< HEAD
import { GET_ALL_CINEMA_LIST,GET_CINEMA_DETAIL,GET_CINEMA_DATA,GET_CHOOSE_CARD_MSG } from '../../actions/actionTypes';
=======
import { GET_ALL_CINEMA_LIST } from '../../actions/actionTypes';
>>>>>>> 5e6cf689ffebf740cc9d6a8deafca7a60a27b54e
// reducer的作用: 返回新的状态

const initialState = {
  items: {},
<<<<<<< HEAD
  item : {},
  data : {},
  cardList : {}
=======
  item: {}
>>>>>>> 5e6cf689ffebf740cc9d6a8deafca7a60a27b54e
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CINEMA_LIST:
      return {
        ...state,
<<<<<<< HEAD
        items : action.payload
      }
    case GET_CINEMA_DETAIL:
      return{
        ...state,
        item : action.payload
      }
    case GET_CINEMA_DATA:
      return{
        ...state,
        data : action.payload
      }
    case GET_CHOOSE_CARD_MSG:
      return{
        ...state,
        cardList : action.payload
=======
        items: action.payload
>>>>>>> 5e6cf689ffebf740cc9d6a8deafca7a60a27b54e
      }
    default:
      return state;
  }
}