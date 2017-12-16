const initialState = { comments: [] }


const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {comments: [action.comment, ...state.comments]};
    case 'GET_COMMENTS':
      return {...state, comments: action.comments};
    default:
      return state;
  }
}

export default comments;
