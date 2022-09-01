import styled, { css } from "styled-components";
import Glass from "../../components/Glass";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Alert from '../../components/Alert';
import { useQuery } from 'react-query';
import { reqBoardList } from './api';
import Board from './Board'
import { menuRouter } from '../../utils/utils';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { reqLogout } from '../../store/user/actions';
import { Article as articleType, ErrorMsg } from './type';
import Empty from '../../components/Empty';
import Article from './Article';

type MainProps = {
  // open: boolean;
  isLogin: boolean;
};

type Props = {
  open: boolean;
}

const Main = ({ isLogin }: MainProps) => {
  const [open, setOpen] = useState(false);
  const [article, setArticle] = useState<articleType[]>([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openBoardHandler = () => setOpen(true);
  const closeBoardHandler = () => setOpen(false);

  const closeHandler = () => {
    setArticle([]);
    closeBoardHandler();
  };

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    dispatch(reqLogout());
    navigate('/');
  }

  const { data, error, isLoading } = useQuery(['reqBoardList'], reqBoardList);

  useEffect(() => { 
    if(isLogin) return;
    navigate('/');
  }, [isLogin]);

  if(isLoading) return <div style={{ zIndex: 100 }}>Loading.....</div>

  console.log(article);

  return (
    <Container>
      <Glass open={open} delay={.7}/>
      {
        open && <ClosetBtn onClick={closeHandler}><MdClose size={30}/></ClosetBtn>
      }
      <BoardList>
        {
          data && data.map((data, idx) => {
            const value = menuRouter(data)[0];
            return <Board key={idx} address={Object.values(value)[0]} openBoardHandler={openBoardHandler} idx={idx + 1} open={open} setArticle={setArticle}>{data}</Board>
          })
        }
      </BoardList>
      {
        !open && <LogoutBtn onClick={logoutHandler}>Logout</LogoutBtn>
      }
      {
        article && (
          <ArticleContainer open={open}>
            {
              article.map((article, idx) => <Article key={article.id} title={article.title} idx={idx + 1}/> )
            }
          </ArticleContainer>
        )
      }
      {
        article.length === 0 && <ArticleContainer open={open}><span>게시글이 존재하지 않습니다.</span></ArticleContainer>
      }
      {/* <Alert /> */}
    </Container>
  )
}

export default Main;

const Container = styled.div`
  z-index: 100;
`

const BoardList = styled.ul`
  
`

const ClosetBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  border: none;

  svg {
    cursor: pointer;
    color: #fff;
    font-weight: bold;
  }
`

const LogoutBtn = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`

const ArticleContainer = styled.ul<Props>`
  opacity: 0;
  visibility: hidden;
  transition: .5s;
  transition-delay: .5s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ open }) => open && css`
    opacity: 1;
    visibility: visible;
    z-index: 100;
  `}

  span {
    font-weight: bold;
    font-size: 2rem;
  }
`