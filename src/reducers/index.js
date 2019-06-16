import { combineReducers } from 'redux';
// import login from './login';
import users from './users';
import repos from './repos';

export default combineReducers({
    users,
    repos
});