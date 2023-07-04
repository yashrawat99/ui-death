import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  &.fullscreen {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
  &.default {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.width};
    width: ${(props) => props.width};
  }
`;

export const SpinnerLoader = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  display: inline-block;
  border: ${(props) => props.thickness} solid rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  border-top-color: ${(props) => props.color};
  margin: 0.5rem;
  animation: ${(props) => (props.tMS ? props.tMS : 1200)}ms spin linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ fullscreen, thickness, width, color, tMS }) => {
  return (
    <SpinnerContainer className={fullscreen ? 'fullscreen' : 'default'}>
      <SpinnerLoader
        width={width}
        thickness={thickness}
        color={color}
        tMS={tMS}
      />
    </SpinnerContainer>
  );
};

Spinner.propTypes = {
  fullscreen: PropTypes.string,
  thickness: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
};
Spinner.defaultProps = {
  fullscreen: '',
  thickness: '4px',
  width: '8px',
  color: '#0066ff',
};

export default Spinner;
