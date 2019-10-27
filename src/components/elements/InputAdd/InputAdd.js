import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Button } from '~/components/elements';
import { Box, Header, Line } from './styles';

export default function InputAdd({
  onChange,
  name,
  value,
  placeholder,
  disabled,
  className,
  addItems,
  removeItem,
  items,
  title,
  label,
}) {
  return (
    <Box className={className} disabled={disabled}>
      <Header>
        {items.length > 0 && <span>{title}</span>}
        {items.map(item => (
          <p key={item}>
            {item} <MdClose onClick={() => removeItem(item)} />{' '}
          </p>
        ))}
      </Header>

      <label htmlFor={name}>{label}</label>
      <Line>
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
      </Line>
    </Box>
  );
}

InputAdd.defaultProps = {
  placeholder: '',
  className: '',
  disabled: false,
  value: '',
  removeItem: () => {},
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
  removeItem: PropTypes.func,
};
