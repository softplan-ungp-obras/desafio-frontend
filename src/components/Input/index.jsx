import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as SearchIcon } from './search.svg'
import { GroupStyled, Label } from './styled'


const Input = (props) => {
  const {
    type,
    search,
    refInput,
    focus,
    className,
    label,
    onSubmit,
    padding,
    placeholder,
    required,
    width,
  } = props

  return (
    <GroupStyled {...props}>
      {label && <Label>{label}</Label>}
      <input
        ref={refInput}
        autoFocus={focus}
        className={className}
        padding={padding}
        placeholder={placeholder}
        required={required}
        type={type}
        width={width}
      />
      {search && (
        <button className="icon" onClick={event => onSubmit(event)} type="button">
          <SearchIcon />
        </button>
      )}
    </GroupStyled>
  )
}

Input.defaultProps = {
  className: '',
  focus: false,
  label: '',
  onSubmit: null,
  padding: '10px',
  placeholder: '',
  required: false,
  search: false,
  type: 'text',
  width: '100%',
}

Input.propTypes = {
  className: PropTypes.string,
  focus: PropTypes.bool,
  label: PropTypes.string,
  onSubmit: PropTypes.func,
  padding: PropTypes.string,
  placeholder: PropTypes.string,
  refInput: PropTypes.instanceOf(Object).isRequired,
  required: PropTypes.bool,
  search: PropTypes.bool,
  type: PropTypes.string,
  width: PropTypes.string,
}

export default Input
