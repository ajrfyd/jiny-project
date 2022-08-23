import db from "../../models/index.js";

export const obj = {
  notice: '공지',
  chat: '잡담',
  coding: '코딩',
  share: '나눔'
};

export const selectBoard = (board) => {
  return obj[board];
};

/**
 * 
 * @param { string } board 
 * @returns Promise<number>
 */
export const getBoardId = async (board) => {
  const { id } = await db.Board.findOne({ where: { boardName: obj[board] } });
  return id;
};


export const BOARD_VALIDATION_ERRORS = {
  BOARD_NOT_FOUND: "게시판이 존재하지 않습니다",
};