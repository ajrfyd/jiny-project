import styled from "styled-components";

const Home = () => {

  return (
    <Container>
      <h2>
        Welcome!
      </h2>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
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
`