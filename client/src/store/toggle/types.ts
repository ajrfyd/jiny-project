import { openToggle, closeToggle } from './actions';

export type StateType = {
  open: boolean;
}

export type ActionType = 
  | ReturnType<typeof openToggle>
  | ReturnType<typeof closeToggle>

