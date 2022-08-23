import { intersectRotue } from "../controllers/boardController.js";
const BASE = '/:board/list';

const boardRouter = [
  {
    method: 'get',
    route: BASE,
    handler: (req, res) => {
      return intersectRotue(req, res);
    }
  }
];

export default boardRouter;