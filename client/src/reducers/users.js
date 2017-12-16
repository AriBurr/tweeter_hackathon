const users = (state = [], action) => {
  switch (action.type) {
    case 'USERS':
    debugger
      return action.users;
    default:
      return state;
    }
}

export default users;
