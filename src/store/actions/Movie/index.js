import { GET_ALL_MOVIE_LIST } from '../../actions/actionTypes';


export const getAllMovieList = (cityid) => dispatch => {
  
  fetch("maoyan/ajax/movieOnInfoList?cityid="+cityid)
    .then(res => res.json())
    .then(listWei => dispatch({
        type: GET_ALL_MOVIE_LIST,
        payload: listWei
      })
    )
}

