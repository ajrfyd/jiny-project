import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { reqArticleList } from './api';

type BoardProps = {
  children: React.ReactNode;
  address: string;
  openBoardHandler: () => void;
  idx: number;
  open: boolean;
}

type Props = {
  open: boolean;
  idx: number;
}

const Board = ({ children, address, openBoardHandler, idx, open }: BoardProps) => {

  const clickHander = () => {

  };
  console.log(idx);

  const reqArticleHandler = async () => {
    const { data } = await reqArticleList(address);
    openBoardHandler();
    console.log(data);    
  };


  return (
    <Container open={open} idx={idx}>
      {/* <Link to={`/${address}/board`}> */}
      <div onClick={reqArticleHandler}>
        {children}
      </div>
      {/* </Link> */}
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