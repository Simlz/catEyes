import { GET_ALL_MOVIE_LIST } from '../../actions/actionTypes';
// reducer的作用: 返回新的状态

const initialState = {
  goods: {},
  item: {}
}

export default function (state = initialState, action) {

  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_ALL_MOVIE_LIST:
      //  console.log(111111111,action.payload);
      return {
        ...state,
        goods: action.payload
      }

    default:
      return state;
  }

}
