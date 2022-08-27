import { combineReducers } from "redux";
import userReducer from './user';
import toggleReducer from "./toggle/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  toggle: toggleReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;

