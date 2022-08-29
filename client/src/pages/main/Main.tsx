import styled from "styled-components";
import Glass from "../../components/Glass";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Alert from '../../components/Alert';
import { useQuery } from 'react-query';
import { reqBoardList } from './api';
import Board from './Board'

type MainProps = {
  open: boolean;
  isLogin: boolean;
};

const Main = ({ open, isLogin }: MainProps) => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery(['reqBoardList'], reqBoardList);
  console.log(data);

  useEffect(() => {
    if(isLogin) return;
    navigate('/');
  }, [isLogin]);

  if(isLoading) return <div style={{ zIndex: 100 }}>Loading.....</div>
  // if(!data) return null;

  return (
    <Container>
      <Glass open={open}/>
      <BoardList>
        {
          data && data.map((data, idx) => <Board key={idx} >{data}</Board>)
        }
      </BoardList>
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