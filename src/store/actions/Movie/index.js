import { GET_ALL_MOVIE_LIST } from '../../actions/actionTypes';


export const getAllMovieList = (id) => dispatch => {
  
  fetch("maoyan/ajax/movieOnInfoList?cityid="+id)
    .then(res => res.json())
    .then(listWei => dispatch({
        type: GET_ALL_MOVIE_LIST,
        payload: listWei
      })
    )
}

