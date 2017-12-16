import axios from 'axios';

export const getPosts = () => {
  return (dispatch) => {
    axios.get('/api/posts')
    .then( res => dispatch({ type: 'POSTS', posts: res.data }) )
  }
}

export const getPost = (id) => {
  return (dispatch) => {
    axios.get(`/api/posts/${id}` )
      .then( res => dispatch({ type: 'GET_POST', post: res.data }) )
  }
}

export const addPost = (post) => {
  return (dispatch) => {
    axios.post('/api/posts', { post } )
      .then( ({data, headers}) => {
        dispatch({ type: 'ADD_POST', post: data, headers }) })
  }
}

export const updatePost = (post) => {
  return (dispatch) => {
    axios.put(`/api/posts/${post.id}`, { post } )
      .then( res => dispatch({ type: 'UPDATE_POST', post: res.data }) )
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
    axios.delete(`/api/posts/${id}`)
    .then( ({ headers }) => dispatch({ type: 'DELETE_POST', id, headers}) )
  }
}
