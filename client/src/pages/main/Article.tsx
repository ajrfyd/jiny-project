import styled, { css } from "styled-components";

type ArticleProps = {
  title: string;
  idx: number;
}

type Props = {
  idx: number;
}

const Article = ({ title, idx }: ArticleProps) => {


  return (
    <Container idx={idx}>
      {title}
    </Container>
  )
}

export default Article;

const Container = styled.li<Props>`
  list-style: none;
  font-weight: bold;
  font-size: 3rem;
  color: #000;
  transition: .5s;
  transform: translateX(-100px);

  & + & {
    margin-top: 2rem;
  }

  ${({ idx }) => idx && css`
    transform: translateX(0);
    transition-delay: 0.${idx}s;
  `}
`