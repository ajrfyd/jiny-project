import styled from "styled-components";
import Glass from "../../components/Glass";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type MainProps = {
  open: boolean;
  isLogin: boolean;
};

const Main = ({ open, isLogin }: MainProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(isLogin) return;
    navigate('/');
  }, [isLogin]);

  return (
    <Container>
      Main List Page;
      <Glass open={open}/>
      <LogOutBtn>Logout</LogOutBtn>
    </Container>
  )
}

export default Main;

const Container = styled.div`
`

const LogOutBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  color: #fff;
  cursor: pointer;
  top: 5rem;
  left: 2rem;
`