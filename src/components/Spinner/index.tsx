import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div<InputTypes>`
  @keyframes spin {
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${({ size }) => size ?? '10rem'};
  height: ${({ size }) => size ?? '10rem'};
  border-radius: 50%;
  border: 0.5rem solid;
  border-color: var(--color-text) var(--color-text) var(--color-text)
    transparent;

  animation: spin 800ms cubic-bezier(0.29, 0.57, 0.71, 0.41) infinite;
`;

interface InputTypes {
  size?: string;
}

const Spinner: React.FC<InputTypes> = ({ size }) => {
  return <SpinnerContainer size={size} />;
};

export default Spinner;
