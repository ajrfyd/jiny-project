import { selectBoard, getBoardId } from "../utils/boardUtils.js";
import { getArticle, updateArticle, saveArticle, removeArticle } from "../services/articleService.js";
import { isValidUser } from "../services/userService.js";
import { ARTICLE_ERROR_MESSAGE, ARTICLE_SUCCESS_MESSAGE  } from "../utils/articleUtils.js";
import { verifyToken } from "../utils/authUtils.js";

export const getArticleList = async (req, res) => {
  console.log(req.params);
};

export const getArticleById = async (req, res) => {
  const { board, id } = req.params;

  // const kindOfBoard = selectBoard(board);
  const boardId = await getBoardId(board);

  const article = await getArticle(boardId, id);

  if(!article) {
    return res.status(400).json({
      message: ARTICLE_ERROR_MESSAGE.NOT_FOUND
    })
  }
  res.status(200).json(article)
};

export const createArticle = async (req, res) => {
  const authorization = req.headers['authorization'].split(' ')[1];

  if(!authorization) {
    return res.status(401).json({
      message: ARTICLE_ERROR_MESSAGE.INVAID_AUTH
    })
  }

  const { board } = req.params;
  const boardId = await getBoardId(board);

  const { title, content } = req.body;

  const { email } = verifyToken(authorization);

  const article = await saveArticle(email, boardId, title, content);

  res.status(200).json(article);
};

export const modifyArticle = async (req, res) => {
  const authorization = req.headers['authorization'].split(' ')[1];
  const { board, id } = req.params;
  const { title, content } = req.body;

  // 클라이언트 측에서 보낸 token을 통해 게시물의 수정 
  // 권한이 있는지 파악 
  const article = await getArticle(id);


  const isValid = await isValidUser(authorization, id);

  if(!isValid) {
    return res.status(401).json({
      message: ARTICLE_ERROR_MESSAGE.INVAID_AUTH
    })
  }

  const newArticle = {
    ...article.dataValues,
    title,
    content
  }

  await updateArticle(newArticle, id);
  res.status(200).json(newArticle);
};

export const deleteArticle = async (req, res) => {
  const authorization = req.headers['authorization'].split(' ')[1];
  const { id } = req.params;
  
  const isValid = await isValidUser(authorization, id);

  if(!isValid) {
    return res.status(401).json({
      message: ARTICLE_ERROR_MESSAGE.INVAID_AUTH
    })
  }

  removeArticle(id);

  res.status(200).json({
    message: ARTICLE_SUCCESS_MESSAGE.DELETE_SUCCESS
  })
};