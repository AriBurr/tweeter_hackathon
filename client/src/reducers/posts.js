const initialState = {
  posts: [],
  post: [],
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS':
      return {...state, posts: action.posts};
    case 'GET_POST':
      return {...state, post: action.post};
    case 'ADD_POST':
      return [action.post, ...state];
    case 'UPDATE_POST':
      return state.map( p => {
        if (p.id === action.post.id)
          return action.post;
        return p;
      });
    case 'DELETE_POST':
      let posts = state.posts.filter( p => p.id !== action.id );
      return { ...state, posts: posts }
    default:
      return state;
  }
}

export default posts;
