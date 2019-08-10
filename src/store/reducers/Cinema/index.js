import { GET_ALL_CINEMA_LIST,GET_CINEMA_DETAIL,GET_CINEMA_DATA,GET_CHOOSE_CARD_MSG,GET_MORE_CINEMA_LIST } from '../../actions/actionTypes';
// reducer的作用: 返回新的状态

const initialState = {
  items: {},
  item : {},
  data : {},
  cardList : {},
  seats:{}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CINEMA_LIST:
      return {
        ...state,
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
      }
    case GET_MORE_CINEMA_LIST:
      return{
        ...state,
        seats : action.payload
      }
    default:
      return state;
  }
}