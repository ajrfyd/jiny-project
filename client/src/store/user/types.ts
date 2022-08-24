import { 
  reqLogin, 
  reqLogout,
  openModal,
  closeModal 
} from './actions';

type User = {
  email: string;
  userName: string;
  role: number;
}

export type StateType = {
  isLogin: boolean;
  userInfo: User;
  alert: boolean;
}

export type ActionType = 
  | ReturnType<typeof reqLogin>
  | ReturnType<typeof reqLogout>
  | ReturnType<typeof openModal>
  | ReturnType<typeof closeModal>