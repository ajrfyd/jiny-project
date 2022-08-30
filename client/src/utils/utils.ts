type Board = {
  [key: string]: string;
}
type BoardListType = Board[];

const boardList: BoardListType = [
  {
    '공지': 'notice',
  },
  {
    '잡담': 'chat'
  },
  {
    '코딩': 'coding'
  },
  {
    '나눔': 'share'
  }
];

export const menuRouter = (menu: string) => {
  return boardList.filter(item => item[menu]);
};