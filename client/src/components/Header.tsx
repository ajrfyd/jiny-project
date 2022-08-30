import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md'
import { useGetUserState } from '../hooks/userHook';
import { useDispatch } from 'react-redux';
import { reqLogout } from '../store/user/actions';

type HeaderProps = {
  onToggle: () => void;
  open: boolean;
  isLogin: boolean;
}

type Props = {
  open: boolean;
  isLogin?: boolean;
}

const Header = ({ onToggle, open }: HeaderProps) => {
  const { isLogin, userInfo } = useGetUserState();

  const dispatch = useDispatch()

  return (
    <Container open={open}>
      <Link to='/'>Jiny.</Link>
      <SideMenuContainer open={open} isLogin={isLogin}>
        {/* {
          isLogin ? (
            <LogoutBtn onClick={logoutHandler}>Logout</LogoutBtn>
          ) : <div style={{ paddingRight: '1rem', color: '#fff', fontWeight: 'bold' }}>{open ? '' : 'Login'}</div>
        } */}
        {
          open ? '' : 'Login'
        }
        <ToggleBtn open={open} isLogin={isLogin}>
          {
            open ? <MdClose size={30} onClick={onToggle}/> : <GiHamburgerMenu onClick={onToggle} size={30}/>
          }
        </ToggleBtn>
      </SideMenuContainer>

    </Container>
  )
}

export default Header;

const Container = styled.header<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 30px;
  height: 150px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: 5px solid red; */

  a {
    text-decoration: none;
    color: #fff;
    font-size: 3vw;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: .5s;
  }

  ${({ open }) => open && css`
    a {
      opacity: 0;
      visibility: hidden;
    }
  `}
`
const SideMenuContainer = styled.div<Props>`
  align-self: flex-start;
  border: 5px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;

  ${({ isLogin }) => !isLogin && css`
    justify-content: flex-end;
  `}

`



const ToggleBtn = styled.div<Props>`
  text-align: center;
  padding-top: 3px;
  color: #fff;
  font-weight: bold;
  z-index: 10;
  cursor: pointer;
  transition: .5s;

  &:hover {
    color: #6200ee;
  }

  /* &:before {
    content: 'Login';
    position: absolute;
    left: -3rem;
    top: 7px;
    font-weight: bold;

    ${({ open }) => open && css`
      content: ''
    `}

  } */

  svg {
    transition: .5s;
  }
`

const LogoutBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    color: #000;
    font-weight: bold;
    transform: scale(1.1);
  }
`
