import axios from 'axios';
import { FETCH_USER } from './types';

//when the redux thnuk sees a function returning a function , automaticaly call it with the dispatch.
// export const fetchUser = () => {
//   return function (dispatch) {
//     axios.get('/api/current_user')
//     .then(res => dispatch({ type: FETCH_USER, payload: res }))
//   };
// };

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    
    dispatch({ type: FETCH_USER, payload: res.data });
  };
