import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import users from './users';
import comments from './comments';

const rootReducer = combineReducers({
  user,
  users,
  flash,
  posts,
  comments,
});

export default rootReducer;
