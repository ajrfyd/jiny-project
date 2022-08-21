import React from "react";
import styled from "styled-components";

const App = () => {

  return (
    <Container>
      <Img src="bg.jpg"/>
    </Container>
  )
}

export default App;

const Container = styled.div`
  font-size: 300px;
  width: 100%;
  min-height: 100vh;
  position: relative;

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