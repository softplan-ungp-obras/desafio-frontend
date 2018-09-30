import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SearchIcon from './search.svg'
import { GroupStyled } from './styled'

class Input extends PureComponent {
  render() {
    const {
      type,
      search,
      refInput,
      focus,
      className,
      label,
      onSubmit,
      placeholder,
      required,
    } = this.props

    return (
      <GroupStyled>
        {label && <label>{label}</label>}
        <input
          ref={refInput}
          autoFocus={focus}
          className={className}
          placeholder={placeholder}
          required={required}
          type={type}
        />
        {search && (
          <button className="icon" onClick={event => onSubmit(event)} type="button">
            <img alt="search" src={SearchIcon} />
          </button>
        )}
      </GroupStyled>
    )
  }
}

Input.defaultProps = {
  className: '',
  focus: false,
  label: '',
  onSubmit: null,
  placeholder: '',
  required: false,
  search: false,
  type: 'text',
}

Input.propTypes = {
  className: PropTypes.string,
  focus: PropTypes.bool,
  label: PropTypes.string,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  refInput: PropTypes.instanceOf(Object).isRequired,
  required: PropTypes.bool,
  search: PropTypes.bool,
  type: PropTypes.string,
}

export default Input
