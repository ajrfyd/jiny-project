import styled from "styled-components";

const Glass = () => {

  return (
    <Container>
    </Container>
  )
}

export default Glass;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(15px);
  box-shadow: 10px 0 15px rgba(0, 0, 0, .1);
  transition: .5s;
  transition-delay: .5s;
`