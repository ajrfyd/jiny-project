import c from 'chalk';
import db from '../../models/index.js';
import { login, signUp, queryUserList } from '../controllers/authController.js'

const { log } = console;
const BASE = '/users';

const userRouter = [
  {
    method: 'get',
    route: BASE,
    handler: async (req, res) => {
      return queryUserList(req, res);
    }
  },
  {
    method: 'post',
    route: BASE + '/login',
    handler: (req, res) => {
      return login(req, res);
    }
  },
  {
    method: 'post',
    route: BASE + '/create',
    handler: (req, res) => {
      // const { userName, email, password } = req.body;
      // res.send('User');
      return signUp(req, res);
    }
  },
  {
    method: 'put',
    route: BASE + '/modify',
    handler: (req, res) => {
      return;
    }
  }
]

export default userRouter;