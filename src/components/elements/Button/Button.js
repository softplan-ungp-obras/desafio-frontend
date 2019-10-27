import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles';

export default function Button({
  onChange,
  type,
  onClick,
  placeholder,
  onBlur,
  disabled,
  className,
  children,
  level,
}) {
  return (
    <ButtonStyle
      onClick={onClick}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      level={level}
    >
      {children}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  type: 'button',
  level: 'primary',
  placeholder: '',
  className: '',
  onBlur: () => {},
  onClick: () => {},
  onChange: () => {},
  disabled: false,
};

Button.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf(['primary', 'black', 'grey', 'error', 'success']),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
