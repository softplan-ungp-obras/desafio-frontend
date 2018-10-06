import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from 'src/core/assets/svg/delete.svg'
import Button from '../Button'
import Text from '../Text'
import Modal from './styled'

const SimpleModal = (props) => {
  const {
    children, onClose, onSave, submitText, title,
  } = props

  return (
    <Modal>
      <Modal.Box>
        <Modal.Head>
          <Button closeButton onClick={onClose} type="button">
            <img alt="close modal" src={CloseIcon} />
          </Button>
          <Text>{title}</Text>
        </Modal.Head>

        <Modal.Body>
          {children}
        </Modal.Body>

        <Modal.Footer>
          {onSave && <Button onClick={onSave} primary type="button">{submitText}</Button>}
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
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  submitText: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SimpleModal
