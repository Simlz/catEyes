import { GET_ALL_CINEMA_LIST } from '../../actions/actionTypes';
// reducer的作用: 返回新的状态

const initialState = {
  items: {},
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CINEMA_LIST:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}