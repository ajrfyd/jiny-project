import styled, { css } from "styled-components";

type GlassProps = {
  open: boolean;
  delay?: number;
}

type Props = {
  open: boolean;
  delay?: number;
}

const Glass = ({ open, delay }: GlassProps) => {

  return (
    <Container open={open} delay={delay}>
    </Container>
  )
}

export default Glass;

const Container = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(15px);
  box-shadow: 10px 0 15px rgba(0, 0, 0, .1);
  transition: .5s;
  transition-delay: .5s;

  ${({ open }) => open && css`
    width: 100%;
    backdrop-filter: blur(20px);
    transition-delay: 0s;
  `}

  ${({ delay }) => delay && css`
    transition-delay: ${delay}s;
  `}

  ${({ open }) => !open && css`
    transition-delay: 0s;
  `}
`