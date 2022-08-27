import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md'
import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  onToggle: () => void;
  open: boolean;
}

type Props = {
  open: boolean;
}

const Header = ({ onToggle, open }: HeaderProps) => {

  return (
    <Container open={open}>
      <Link to='/'>Jiny.</Link>
      <ToggleBtn open={open}>
        {
          open ? <MdClose size={30} onClick={onToggle}/> : <GiHamburgerMenu onClick={onToggle} size={30}/>
        }
      </ToggleBtn>
    </Container>
  )
}

export default Header;

const Container = styled.header<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  height: 150px;
  z-index: 100;
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

const ToggleBtn = styled.div<Props>`
  position: relative;
  width: 50px;
  top: -4rem;
  left: 100%;
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

  &:before {
    content: 'Login';
    position: absolute;
    left: -3rem;
    top: 7px;
    font-weight: bold;

    ${({ open }) => open && css`
      content: ''
    `}
  }

  svg {
    transition: .5s;
  }
`