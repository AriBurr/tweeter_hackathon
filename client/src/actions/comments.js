import axios from 'axios';

export const addComment = (comment, id) => {
  return (dispatch) => {
    axios.post(`/api/posts/${id}/comments`, { comment } )
      .then( ({data, headers}) => {
        dispatch({ type: 'ADD_COMMENT', comment: data, headers }) })
  }
}

export const getComments = (id) => {
  return (dispatch) => {
    axios.get(`/api/posts/${id}/comments` )
      .then( res => {
debugger
        dispatch({ type: 'GET_COMMENTS', comments: res.data }) })
  }
}
