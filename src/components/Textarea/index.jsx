import React from 'react'
import PropTypes from 'prop-types'
import { GroupStyled, Label } from './styled'

const Textarea = (props) => {
  const {
    className,
    label,
    padding,
    placeholder,
    refInput,
    required,
    rows,
    type,
    width,
  } = props

  return (
    <GroupStyled {...props}>
      {label && <Label>{label}</Label>}
      <textarea
        ref={refInput}
        className={className}
        padding={padding}
        placeholder={placeholder}
        required={required}
        rows={rows}
        type={type}
        width={width}
      />
    </GroupStyled>
  )
}

Textarea.defaultProps = {
  className: '',
  label: '',
  padding: '10px',
  placeholder: '',
  required: false,
  rows: 2,
  type: 'textarea',
  width: '100%',
}

Textarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  padding: PropTypes.string,
  placeholder: PropTypes.string,
  refInput: PropTypes.instanceOf(Object).isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.string,
  width: PropTypes.string,
}

export default Textarea
