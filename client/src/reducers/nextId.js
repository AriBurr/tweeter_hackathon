const nextId = ( state = 1, action ) => {
  switch (action.type) {
    case 'NEXT_ID':
      return state + 1;
    default:
      return state;
  }
}

export default nextId;
