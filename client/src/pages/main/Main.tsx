import styled from "styled-components";
import Glass from "../../components/Glass";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Alert from '../../components/Alert';
import { useDispatch } from 'react-redux';
import { reqLogout } from '../../store/user/actions';

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

  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    dispatch(reqLogout());
  }

  return (
    <Container>
      Main List Page;
      <Glass open={open}/>
      <LogOutBtn onClick={logoutHandler}>
        Logout
      </LogOutBtn>
      <Alert />
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
  top: 20px;
  right: 2rem;
  z-index: 100;
  letter-spacing: 2px;

  &:hover {
    color: #000;
    font-weight: bold;
    transform: scale(1.1);
  }
`