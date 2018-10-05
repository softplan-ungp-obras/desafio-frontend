import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Text from '../Text'
import Modal from './styled'

const SimpleModal = (props) => {
  const {
    children, onSave, submitText, title,
  } = props

  return (
    <Modal>
      <Modal.Box>
        <Modal.Head>
          <Text>{title}</Text>
        </Modal.Head>

        <Modal.Body>
          {children}
        </Modal.Body>

        <Modal.Footer>
          {onSave && <Button onClick={onSave} type="button">{submitText}</Button>}
        </Modal.Footer>
      </Modal.Box>
    </Modal>
  )
}

SimpleModal.defaultProps = {
  onSave: undefined,
  submitText: 'Salvar',
}

SimpleModal.propTypes = {
  children: PropTypes.node.isRequired,
  onSave: PropTypes.func,
  submitText: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default SimpleModal
