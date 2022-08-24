import { combineReducers } from "redux";
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,

});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;

