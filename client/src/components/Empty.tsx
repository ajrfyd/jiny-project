import styled from "styled-components";

const Empty = () => {

  return (
    <Container>
      게시물이 텅 비었습니다.
    </Container>
  )
}

export default Empty;


const Container = styled.div`
  font-weight: bold;
  z-index: 100;
  font-size: 5rem; 
`