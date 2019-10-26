import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { Box, Icon } from './styles';

export default function Input({
  onChange,
  onSubmit,
  icon,
  type,
  label,
  htmlFor,
  name,
  value,
  placeholder,
  onBlur,
  disabled,
  className,
}) {
  function iconCondition() {
    switch (icon) {
      case 'SEARCH':
        return <MdSearch />;
      default:
        return <MdSearch />;
    }
  }

  return (
    <Box className={className} disabled={disabled}>
      <label htmlFor={htmlFor}>{label}</label>

      <input
        id={htmlFor}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {icon && <Icon onClick={onSubmit}>{iconCondition()}</Icon>}
    </Box>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  icon: '',
  htmlFor: '',
  className: '',
  label: '',
  onBlur: () => {},
  onSubmit: () => {},
  disabled: false,
};

Input.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
