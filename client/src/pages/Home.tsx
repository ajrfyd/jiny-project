import styled, { css } from "styled-components";

type HomeProps = {
  open: boolean;
};

type Props = {
  open: boolean;
}

const Home = ({ open }: HomeProps) => {

  return (
    <Container open={open}>
      <h2>
        Welcome!
      </h2>
    </Container>
  )
}

export default Home;

const Container = styled.div<Props>`
  position: relative;
  z-index: 10;
  /* text-align: center; */
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
  
  ${({ open }) => open && css`
    opacity: 0;
    visibility: hidden;
    transform: translateX(-200px);
    transition-delay: 0s;
  `}
`