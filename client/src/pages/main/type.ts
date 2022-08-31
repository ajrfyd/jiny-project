export type ResponsType = string[];

export type Article= {
  id: number;
  boardId: number;
  author: string;
  title: string;
  content: string;
  updatedAt: string;
  createdAt: string;
  deletedAt: string;
}

export type ErrorMsg = {
  message: string;
}

export type ArticleType = {
  articleList?: Article[];
  message?: ErrorMsg;
}

export type ArticleResponseType = {
  articleList: Article[];
}

export type ArticleResType = {
  articleList: Article[];
};

export type MsgType = {
  message: string;
}