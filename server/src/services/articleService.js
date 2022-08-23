import db from "../../models/index.js";
import c from 'chalk';
import { findUser } from "./userService.js";

/**
 * 개별 게시글 조회
 * @param {number} boardId 
 * @param {number} id 
 * @returns {id: number, title: string, content: string, author: string, viewCount: number, boardId: number, createdAt: string, updatedAt: string} data
 */
export const getArticle = async (boardId, id) => {
  const data = await db.Article.findOne({ where: { boardId, id }});
  console.log(data);
  const obj = {
    ...data.dataValues,
    viewCnt: data.dataValues.viewCnt + 1
  }
  
  await db.Article.update(obj, { where: { id: data.id }});
  return data;
};

/**
 * 새로운 게시글을 작성하는 함수.
 * @param {string} email 
 * @param {number} boardId 
 * @param {string} title 
 * @param {string} content 
 */
export const saveNewArticle = async (email, boardId, title, content) => {
  const user = await findUser(email);
  return await db.Article.create({boardId, author: user.userName, title, content });
};

/**
 * 수정된 게시글을 데이터베이스에 저장
 * @param { {title: string, content: string, viewCnt: number, author: string, createdAt: string, updatedAt: string, deletedAt: string} } newArticle 
 */
export const saveArticle = async (newArticle, id) => {
  return await db.Article.update(newArticle, { where: { id }, returning: true, plain: true })
};


