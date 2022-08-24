import styled from "styled-components";
import Glass from "./components/Glass";
import Header from "./components/Header";
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(prev => !prev);

  console.log(toggle);
  return (
    <Container>
      <Header onToggle={toggleHandler}/>
      <Glass open={toggle}/>
      <Routes>
        <Route path='/' element={<Home open={toggle}/>} />
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