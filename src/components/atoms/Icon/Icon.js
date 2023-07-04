import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTheme } from '../../../utils';

const StyledIcon = styled.div`
  display: flex;
  img {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
`;

const Icon = ({
  referenceClass,
  width,
  height,
  path,
  label,
  onClick,
  ...rest
}) => {
  return (
    <StyledIcon
      className={referenceClass}
      width={width}
      height={height}
      onClick={onClick}
      {...rest}
    >
      <img src={path} alt={label} {...rest} />
    </StyledIcon>
  );
};

Icon.propTypes = {
  referenceClass: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  path: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  width: '20',
  height: '20',
  theme: defaultTheme,
  referenceClass: '',
};

export default Icon;
