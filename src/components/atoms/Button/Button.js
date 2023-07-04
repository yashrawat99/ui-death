import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTheme } from '../../../utils';

const StyledButton = styled.button`
  padding: 6px 10px;
  font-size: 0.875rem;
  border: 1px solid;
  border-radius: 4px;
  min-width: auto;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: ${({ theme }) => {
    console.log(theme);
    return theme.primaryFontWeight;
  }};
  font-family: 'Baloo 2', sans-serif;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.5;
  text-transform: capitalize;
`;

const Button = ({ children, variant, className, referenceClass, ...rest }) => {
  return (
    <StyledButton className={`${variant} ${referenceClass}`} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  referenceClass: PropTypes.string,
};

Button.defaultProps = {
  theme: defaultTheme,
  variant: '',
  className: '',
  referenceClass: '',
};
export default Button;
