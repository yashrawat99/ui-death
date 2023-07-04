import React from 'react';
import styled from 'styled-components';
const Button = ({ children, variant, className, referenceClass, ...rest }) => {
  return (
    <StyledButton className={`${variant} ${referenceClass}`} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 6px 10px;
  font-size: 0.875rem;
  border: 1px solid;
  border-radius: 4px;
  min-width: auto;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.5;
  text-transform: capitalize;
`;
