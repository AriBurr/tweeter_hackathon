const posts = (state = [], action) => {
  switch (action.type) {
    case 'POSTS':
      return action.posts;
    case 'GET_POST':
    return state.map( p => {
      if (p.id === action.post.id)
        return action.post;
      return p;
      });
    case 'ADD_POST':
      return [action.post, ...state];
    case 'UPDATE_POST':
      return state.map( p => {
        if (p.id === action.post.id)
          return action.post;
        return p;
      });
    case 'DELETE_POST':
      return state.filter( p => p.id !== action.id );
    default:
      return state;
  }
}

export default posts;
