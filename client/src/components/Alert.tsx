import styled, { css, keyframes } from "styled-components";
import { useState, useEffect, SetStateAction, Dispatch } from 'react';

type AlertProps = {
  visible: boolean;
  text: string;
  closeHandler: () => void;
}

type Props = {
  animate: boolean;
}

const Alert = ({ visible, text, closeHandler }: AlertProps) => {
  const [localVisible, setLocalVisible] = useState(visible);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if(!visible && localVisible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);      
    }

    setLocalVisible(visible);        
  }, [visible, localVisible]);

  if(!localVisible && !animate) return null;

  return (
    <Container animate={animate}>
      <h1>
        {text}
      </h1> 
      <div onClick={closeHandler}>x</div>
    </Container>
  )
}

export default Alert;

const bounceIn = keyframes`
  0%, 100%, 20%, 40%, 60%, 80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3)
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1)
  }
  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9)
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03)
  }
  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97)
  }
  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
  }
`

const bounceOut = keyframes`
  20% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9)
  }
  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1)
  }
  100% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3)
  }
`

const Container = styled.div<Props>`                   
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, .5);
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* flex-direction: column; */
  
  animation: ${bounceIn} 1s both;
  ${({ animate }) => animate && css`
  animation: ${bounceOut} 1s both;
  `}
  
  h1 {
    text-align: center;
  }

  div {
    position: absolute;
    top: .5rem;
    right: 1rem;
    cursor: pointer;
  }
`