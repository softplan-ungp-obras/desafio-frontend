import React from 'react';
import PropTypes from 'prop-types';
import { Button, Message } from '~/components/elements';
import { Box, Header } from './styles';

export default function InputAdd({
  onChange,
  name,
  value,
  placeholder,
  disabled,
  className,
  addItems,
  items,
  title,
  label,
}) {
  return (
    <Box className={className} disabled={disabled}>
      <Header>
        {title}
        {items.map(item => (
          <p key={item}>{item}</p>
        ))}
      </Header>

      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={value}
        onChange={e => onChange(name, e.target.value)}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      <Button
        disabled={!value}
        onClick={() => {
          addItems(value);
          onChange(name, '');
        }}
      >
        Adicionar
      </Button>
    </Box>
  );
}

InputAdd.defaultProps = {
  placeholder: '',
  className: '',
  disabled: false,
  value: '',
};

InputAdd.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  addItems: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
