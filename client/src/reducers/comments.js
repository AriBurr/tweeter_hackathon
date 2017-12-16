const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [action.comment, ...state];
    case 'GET_COMMENTS':
      return {...state, comments: action.comments};
    default:
      return state;
  }
}

export default comments;
