import { StateType, ActionType } from "./types";
import { 
  REQ_LOG_IN, 
  REQ_LOG_OUT,
  OPEN_MODAL,
  CLOSE_MODAL 
} from './actions';

const initialState: StateType = {
  isLogin: false,
  userInfo: {
      email: '',
      userName: '',
      role: 1
    },
  alert: false
}

const loginReducer = (state: StateType = initialState, action: ActionType) => {
  switch(action.type) {
    case REQ_LOG_IN:
      return {
        ...state,
        isLogin: true,
        userInfo: {
          ...state.userInfo,
          email: action.payload.email,
          userName: action.payload.userName
        }
      }
    case REQ_LOG_OUT:
      return {
        ...state,
        isLogin: false,
        userInfo: {
          ...state.userInfo,
          email: '',
          userName: ''
        }
      }
    case OPEN_MODAL: 
      return {
        ...state,
        alert: true,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        alert: false,
      }
    default:
      return state;
  }
};

export default loginReducer;