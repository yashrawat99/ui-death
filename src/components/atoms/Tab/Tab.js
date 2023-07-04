import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../atoms/Text';
import { defaultTheme } from '../../../utils';

const StyledTab = styled.div`
  padding: 4px 8px;
  margin: 4px 8px;
  cursor: pointer;
  width: fit-content;
  border-radius: 4px;
  display: flex;
  .count {
    padding-left: 5px;
  }
  .tab-text {
    color: ${({ theme }) => theme.text.bodyTextLight};
  }
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
  &.contained {
    &.selected {
      background-color: ${({ theme }) => theme.colors.primary['active']};
      .tab-text {
        color: ${({ theme }) => theme.primaryColor};
      }
    }
  }
  &.underlined {
    border-radius: 4px 4px 0 0;
    &.selected {
      border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
      .tab-text {
        color: ${({ theme }) => theme.primaryColor};
      }
    }
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
    background: #ccc;
  }
`;

const Tab = ({
  text,
  value,
  selected,
  referenceClass,
  variant,
  handleClick,
  disabled,
  count,
  ...rest
}) => {
  return (
    <StyledTab
      className={`${
        selected === value ? 'selected' : ''
      }  ${variant} ${referenceClass} ${disabled === true ? 'disabled' : ''}`}
      value={value || ''}
      onClick={() => handleClick(value)}
      {...rest}
    >
      <Text referenceClass="tab-text" text={text} />
      {count && <Text referenceClass="tab-text count" text={`(${count})`} />}
    </StyledTab>
  );
};

Tab.propTypes = {
  theme: PropTypes.object,
  text: PropTypes.string.isRequired,
  count: PropTypes.string,
  variant: PropTypes.string,
  referenceClass: PropTypes.string,
  selected: PropTypes.string,
  handleClick: PropTypes.func,
};

Tab.defaultProps = {
  theme: defaultTheme,
  text: '',
  count: '',
  value: '',
  variant: 'contained',
  referenceClass: '',
  selected: '',
  handleClick: () => {},
};

export default Tab;
