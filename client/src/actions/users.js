import axios from 'axios';

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
    .then( res => {
      console.log(res)
      dispatch({ type: 'USERS', users: res.data }) ) }
  }
}
