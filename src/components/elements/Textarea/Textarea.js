import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './styles';
import { Message } from '~/components/elements';

export default function Textarea({
  onChange,
  label,
  htmlFor,
  name,
  value,
  placeholder,
  onBlur,
  disabled,
  className,
  level,
  errors,
}) {
  return (
    <Box level={level} className={className} disabled={disabled}>
      <label htmlFor={htmlFor}>{label}</label>

      <textarea
        id={htmlFor}
        defaultValue={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errors && <Message type="error">{errors}</Message>}
    </Box>
  );
}

Textarea.defaultProps = {
  level: 'large',
  placeholder: '',
  htmlFor: '',
  className: '',
  label: '',
  onBlur: () => {},
  disabled: false,
  value: '',
  errors: '',
};

Textarea.propTypes = {
  level: PropTypes.oneOf('large', 'normal'),
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.string,
};
