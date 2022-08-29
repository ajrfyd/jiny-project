import styled from "styled-components";
import { Link } from 'react-router-dom';

type BoardProps = {
  children: React.ReactNode;
}

const Board = ({ children }: BoardProps) => {
  return (
    <Container>
      <Link to='/'>
        {children}
      </Link>
    </Container>
  )
}

export default Board;

const Container = styled.li`
  list-style: none;
  
  & + & {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 4px;
  }
`