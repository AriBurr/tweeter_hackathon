import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import users from './users';

const rootReducer = combineReducers({
  user,
  users,
  flash,
  posts,
});

export default rootReducer;
