import React, { useState, useRef } from "react";
import styled, { css } from 'styled-components';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { reqLogin, useLoginMutation } from './api';
import { useNavigate } from 'react-router-dom';

type LoginProps = {
  open: boolean;
  toggleHandler: () => void;
}

type ToggleProps = {
  open: boolean;
};


const Login = ({ open, toggleHandler }: LoginProps) => {
  const [needSignup, setNeedSignup] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordAgainRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(emailRef.current && passwordRef.current) {
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      // await reqLogin(user);
      // toggleHandler();
      // navigate('/main');
      loginMutate(user);
    } else  {
      // console.log(emailRef.current.value);
      // console.log(passwordRef.current.value);
      // console.log(passwordAgainRef.current.value)
    }
  };

  const signupHandler = () => setNeedSignup(prev => !prev);

  const { mutate: loginMutate } = useLoginMutation({
    onSuccess: () => {
      toggleHandler();
      navigate('/main');
    }
  });

  return (
    <Container open={open} onSubmit={submitHandler}>
      <h1>
        {
          needSignup ? 'Signup' : 'Login'
        }
      </h1>
      <Section>
        <label>Email</label>
        <CustomInput type="text" placeHolder="email" ref={emailRef}/>
      </Section>
      <Section>
        <label>Password</label>
        <CustomInput type="password" placeHolder="password" ref={passwordRef} />
      </Section>
      {
        needSignup && (
          <Section>
            <label>Password Again</label>
            <CustomInput type='password' placeHolder="password" ref={passwordAgainRef}/>
          </Section>
        )
      }
      <BtnContainer>
        <CustomButton type='submit'>
          {
            needSignup ? '회원가입' : '로그인' 
          }
        </CustomButton>
        {
          !needSignup && <CustomButton type='button' onClick={signupHandler}>회원가입</CustomButton>
        }
      </BtnContainer>
    </Container>
  )
}

export default Login;

const Container = styled.form<ToggleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 300px;
  padding: 1rem 0;
  transition: .5s;
  
  & {
    transition-delay: .5s;
  }

  ${({ open }) => open && css`
    backdrop-filter: blur(50px);
  `}

  h1, input, button, label {
    transition: .5s;
    transform: translateX(200px);
    visibility: hidden;
    opacity: 0;

    ${({ open }) => open && css`
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    `}
  }

  h1 {
    font-size: 3vw;
    letter-spacing: 2px;
    font-family: 'Dancing Script', cursive;
    height: 100px;
    flex: 1;
    transition-delay: .3s;
  }
  button {
    transition-delay: .6s;
  }
`

const Section = styled.section`
  width: 50%;
  display: flex;
  justify-content: space-between;
  transition-delay: .5s;

  & + & {
    & {
      margin-top: 1rem;
    }
  }


  &:nth-of-type(1) label, input {
    transition-delay: .4s;
  }
  &:nth-of-type(2) label, input {
    transition-delay: .5s;
  }
` 
const BtnContainer = styled.div`
  margin-top: 2rem;
`