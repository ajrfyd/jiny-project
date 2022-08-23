import { getArticles } from "../services/boardService.js";
import { selectBoard, BOARD_VALIDATION_ERRORS } from "../utils/boardUtils.js";

/**
 * 종류별 게시판의 게시글을 반환하는 함수
 * @param {Request} req Node req obj
 * @param {Response} res Node res obj
 */
export const intersectRotue = async (req, res) => {
  const { board } = req.params;
  const kindOfBoard = selectBoard(board);

  const articleList = await getArticles(kindOfBoard);
  

  if(articleList.length === 0) {
    console.log('here!')
    return res.status(400).json({
      message: BOARD_VALIDATION_ERRORS.BOARD_NOT_FOUND
    })
  }

  res.status(200).json({
    articleList
  })
};