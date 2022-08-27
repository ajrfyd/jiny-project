import styled from "styled-components";
import { forwardRef } from 'react';

type CustomInputProps = {
  type: string;
  placeHolder: string;
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({type, placeHolder}, ref) => {

  return (
    <Input 
      type={type}
      placeholder={placeHolder}
      ref={ref}
    />
  )
})
  
export default CustomInput;

const Input = styled.input`
  border: none;
  outline: none;
  /* border-radius: 3px; */
  background-color: transparent;
  border-bottom: 2px solid #ddddddcf;
  padding-left: 10px;

  &:hover {
    transition-delay: 0;
    border-bottom: 2px solid #fff;
  }
`