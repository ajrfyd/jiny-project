import styled, { css } from "styled-components";
import Glass from '../../components/Glass';
import LoginForm from '../login/LoginForm';
import { useEffect } from 'react';
import { reqLogin } from '../../store/user/actions';
import { useDispatch } from 'react-redux';
import { useGetUserState } from '../../hooks/userHook';

type HomeProps = {
  open: boolean;
  toggleHandler: () => void;
};

type Props = {
  open: boolean;
}

const Home = ({ open, toggleHandler }: HomeProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('userInfo');    
    if(!user) {
      return;
    }
    if(user) {
      const userInfo = JSON.parse(user); 
      dispatch(reqLogin(userInfo.email, userInfo.userName));
    }
  }, []);

  return (
    <>
      <Glass open={open}/>
      <Container open={open}>
        <h2>
          Welcome!
        </h2>
      </Container>
      <LoginForm open={open} toggleHandler={toggleHandler}/>
    </>
  )
}

export default Home;

const Container = styled.div<Props>`
  /* position: relative; */
  z-index: 10;
  /* text-align: center; */
  transition: .5s;
  transition-delay: .5s;

  h2 {
    position: relative;
    color: #fff;
    font-size: 10vw;
    line-height: .55em;
    text-shadow: 0 5px 5px rgba(0, 0, 0, .2);
    font-family: 'Dancing Script', cursive;
  }
  
  ${({ open }) => open && css`
    opacity: 0;
    visibility: hidden;
    transform: translateX(-200px);
    transition-delay: 0s;
  `}
`