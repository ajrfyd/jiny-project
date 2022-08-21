import c from 'chalk';

const { log } = console;
const BASE = '/user';

const userRouter = [
  {
    method: 'get',
    route: BASE,
    handler: (req, res) => {
      res.send('User');
    }
  }
]

export default userRouter;