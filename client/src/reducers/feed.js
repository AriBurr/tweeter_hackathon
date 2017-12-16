const feed = (state = []) => {
  switch (action.type) {
    case 'FEEDS':
      return {...state, posts: action.posts};
    default:
      return state;
  }
}

export default feed;
