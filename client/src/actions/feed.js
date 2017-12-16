import axios from 'axios';

export const getPosts = () => {
  return (dispatch) => {
    axios.get('/api/posts')
    .then( res => dispatch({ type: 'FEEDS', posts: res.data }) )
  }
}
