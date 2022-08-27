import styled from "styled-components";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
};

const CustomButton = ({ children, type, onClick }: CustomButtonProps) => {

  return (
    <Button onClick={onClick} type={type}>
      { children }
    </Button>
  )
}

export default CustomButton;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  letter-spacing: 2px;
  cursor: pointer;
  padding: .5rem 1rem;

  & + & {
    &:last-child {
      margin-left: 2rem;
    }
  }

  &:hover {
    transition-delay: .1s;
    font-weight: bold;
    color: #fff;
  }
`