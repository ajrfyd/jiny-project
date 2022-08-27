import styled from "styled-components";
import Glass from "./components/Glass";
import Main from "./pages/main/Main";
import Header from "./components/Header";
import Home from './pages/home/Home';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useGetUserState } from "./hooks/userHook";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(prev => !prev);

  const navigate = useNavigate();

  const user = useGetUserState();

  useEffect(() => {
    if(!user.isLogin) return;
    navigate('/main');
  }, [user]);

  return (
    <Container>
      <Header onToggle={toggleHandler} open={toggle} isLogin={user.isLogin}/>
      <Routes>
        <Route path='/' element={<Home open={toggle} toggleHandler={toggleHandler}/>} />
        <Route path='/main' element={<Main open={toggle} isLogin={user.isLogin}/>} />
      </Routes>
      <Img src="bg.jpg"/>
    </Container>
  )
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* background: url('bg.jpg') no-repeat left top;
  background-size: 100vw 100vh; */
  `

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`