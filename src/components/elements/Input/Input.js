import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { Box, Icon } from './styles';
import { Message } from '~/components/elements';

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
  iconPointer,
  level,
  errors,
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
    <Box level={level} className={className} disabled={disabled}>
      <label htmlFor={htmlFor}>{label}</label>

      <input
        id={htmlFor}
        defaultValue={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {icon && (
        <Icon iconPointer={iconPointer} onClick={onSubmit}>
          {iconCondition()}
        </Icon>
      )}
      {errors && <Message type="error">{errors}</Message>}
    </Box>
  );
}

Input.defaultProps = {
  type: 'text',
  level: 'large',
  placeholder: '',
  icon: '',
  htmlFor: '',
  className: '',
  label: '',
  onBlur: () => {},
  onSubmit: () => {},
  disabled: false,
  iconPointer: false,
  value: '',
  errors: '',
};

Input.propTypes = {
  level: PropTypes.oneOf(['large', 'normal']),
  htmlFor: PropTypes.string,
  iconPointer: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.string,
};
