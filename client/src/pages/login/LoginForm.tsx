import React, { useState, useRef } from "react";
import styled, { css } from 'styled-components';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useLoginMutation, userSignupMutation } from './api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reqLogin } from '../../store/user/actions';
import Alert from '../../components/Alert';

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
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();
  const pwd_reg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if(emailRef.current && passwordRef.current) {
      if(!pwd_reg.test(passwordRef.current.value)) {
        setErrMsg('비밀번호의 형식에 맞지 않습니다.');
        setVisible(true);
        return;
      }
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }

      if(needSignup && passwordAgainRef.current) {
        if(user.password !== passwordAgainRef.current.value) {
          setErrMsg('비밀번호가 서로 일치하지 않습니다.')
          setVisible(true);
          return;
        }
        signupMutate({ ...user, userName: '' });
        return;  
      }
      loginMutate(user);
    } 
  };

  const signupHandler = () => setNeedSignup(prev => !prev);

  const { mutate: loginMutate } = useLoginMutation({
    onSuccess: (res) => {
      const { email, userName } = res;
      toggleHandler();
      dispatch(reqLogin(email, userName));
    },
    onError: () => {
      setErrMsg('비밀번호 혹은 이메일주소가 다릅니다.');
      setVisible(true);
    }
  });

  const { mutate: signupMutate } = userSignupMutation({
    onSuccess: (res) => {
      setErrMsg('가입하신 이메일로 로그인해 주세요.');
      setVisible(true);
      setNeedSignup(false);
    },
    onError: (res) => {
      setErrMsg('이미 존재하는 메일주소 입니다.');
      setVisible(true);
    }
  })

  const closeAlertHandler = () => {
    setErrMsg('');
    setVisible(false);
  };

  return (
    <Container open={open} onSubmit={submitHandler}>
      <h1>
        {
          needSignup ? 'Signup' : 'Login'
        }
      </h1>
      <Section>
        <label>Email</label>
        <CustomInput type="email" placeHolder="email" ref={emailRef}/>
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
      <Alert visible={visible} closeHandler={closeAlertHandler} text={errMsg}/>
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