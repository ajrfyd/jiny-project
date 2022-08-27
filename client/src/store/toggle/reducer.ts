import { StateType, ActionType } from "./types";
import { TOGGLE_CLOSE, TOGGLE_OPEN } from "./actions";

const initialState = {
  open: false,
}

const toggleReducer = (state: StateType = initialState, action: ActionType) => { 
  switch(action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: true
      }
    case TOGGLE_CLOSE:
      return {
        ...state,
        open: false,
      }
    default:
      return state;
  }
};

export default toggleReducer;