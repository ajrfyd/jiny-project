import styled, { css } from "styled-components";
import { reqArticleList, useReqArticlesMutation } from './api';
import { useState, SetStateAction } from 'react';
import { Article } from './type';
import axios from 'axios';

type BoardProps = {
  children: React.ReactNode;
  address: string;
  openBoardHandler: () => void;
  idx: number;
  open: boolean;
  setArticle: React.Dispatch<SetStateAction<Article[]>>;
}

type Props = {
  open: boolean;
  idx: number;
}

const Board = ({ children, address, openBoardHandler, idx, open, setArticle }: BoardProps) => {
  const clickHander = () => {

  };

  const reqArticleHandler = () => {
    articles(address);
    openBoardHandler();
  };

  const { mutate: articles } = useReqArticlesMutation({
    onSuccess: (data) => {
        setArticle(data.articleList);
      }
  });

  return (
    <Container open={open} idx={idx}>
      <div onClick={reqArticleHandler}>
        {children}
      </div>
    </Container>
  )
}

export default Board;

const Container = styled.li<Props>`
  list-style: none;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 10px;
  cursor: pointer;
  transition: .5s;
  opacity: 1;

  & + & {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
  }

  
  ${({ open }) => open && css`
    transform: translateX(100px);
    visibility: hidden;
    opacity: 0;
    transition-delay: 1.5s;
  `}

  ${({ idx }) => idx && css`
    transition-delay: 0.${idx}s
  `}
`