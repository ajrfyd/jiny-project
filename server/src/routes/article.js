const BASE = '/:board/article'
import { getArticleById, modifyArticle, createArticle, deleteArticle } from "../controllers/articleController.js";

const articleRouter = [
  {
    // 게시글 조회 article의 id를 기준으로
    method: 'get',
    route: BASE + '/:id',
    handler: (req, res) => {
      return getArticleById(req, res);
    }
  },
  {
    // 게시글 작성
    method: 'post',
    route: BASE,
    handler: (req, res) => {
      return createArticle(req, res);
    }
  },
  {
    // 게시글 수정
    method: 'put',
    route: BASE + '/:id',
    handler: (req, res) => {
      return modifyArticle(req, res);
    }
  },
  {
    // 게시글 삭제
    method: 'delete',
    route: BASE + '/:id',
    handler: (req, res) => {
      return deleteArticle(req, res);
    }
  }
  
]

export default articleRouter;