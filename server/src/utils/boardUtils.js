import db from "../../models/index.js";

export const boards = {
  notice: '공지',
  chat: '잡담',
  coding: '코딩',
  share: '나눔'
};

export const selectBoard = (board) => {
  return boards[board];
};

/**
 * 
 * @param { string } board 
 * @returns Promise<number>
 */
export const getBoardId = async (board) => {
  const { id } = await db.Board.findOne({ where: { boardName: boards[board] } });
  return id;
};


export const BOARD_ERROR_MESSAGE = {
  NOT_FOUND: "게시판에 글이 존재하지 않습니다",
};