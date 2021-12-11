import React from 'react';
import styled from 'styled-components';
import Spinner from '../Spinner';

const ButtonContainer = styled.button<InputTypes>`
  position: relative;
  display: block;
  margin-left: auto;

  font-size: 2rem;
  background: var(--color-purple);

  cursor: pointer;
  height: 4.5rem;
  width: 100%;
  padding: 1rem;
  outline: 0;
  border: 0;

  &:disabled {
    cursor: auto;
    filter: brightness(60%);
  }
`;

interface InputTypes {
  isLoading?: boolean;
}

const Button: React.FC<HTMLButtonElement & InputTypes> = ({
  isLoading,
  children,
  ...rest
}) => {
  return (
    <ButtonContainer {...(rest as any)} disabled={isLoading}>
      {isLoading ? <Spinner size="3rem" /> : children}
    </ButtonContainer>
  );
};

export default Button;
