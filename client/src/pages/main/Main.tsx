import styled from "styled-components";
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
import { Article, ErrorMsg } from './type';
import Empty from '../../components/Empty';

type MainProps = {
  // open: boolean;
  isLogin: boolean;
};

const Main = ({ isLogin }: MainProps) => {
  const [open, setOpen] = useState(false);
  const [article, setArticle] = useState<Article[]>([]);

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
      {/* <Alert /> */}
      {/* { 
        open && <Empty />
      } */}
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

const ArticleContainer = styled.ul`
  
`