import { getBoardList, intersectRotue } from "../controllers/boardController.js";
const BASE = '/:board/list';

const boardRouter = [
  {
    method: 'get',
    route: '/board/list',
    handler: (req, res) => {
      return getBoardList(req, res);
    }
  },
  {
    method: 'get',
    route: BASE,
    handler: (req, res) => {
      return intersectRotue(req, res);
    }
  }
];

export default boardRouter;