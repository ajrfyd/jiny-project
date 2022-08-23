import db from "../../models/index.js";
import c from 'chalk';

const { log } = console;


export const getArticles = async (board) => {
  const { id: boardId } = await db.Board.findOne({ where: { boardName: board }});
  
  const articleList = await db.Article.findAll({ where: { boardId } });

  // log(c.bgMagenta(JSON.stringify(articleList, null, 2)))
  return articleList;
};