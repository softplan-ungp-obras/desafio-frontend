import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CloseIcon } from './delete.svg'
import Button from '../Button'
import Text from '../Text'
import Modal from './styled'

const SimpleModal = (props) => {
  const {
    children, onClose, onSave, submitText, title, validate,
  } = props

  return (
    <Modal>
      <Modal.Box>
        <Modal.Head>
          <Button closeButton onClick={onClose} type="button">
            <CloseIcon />
          </Button>
          <Text>{title}</Text>
        </Modal.Head>

        <Modal.Body>
          {children}
        </Modal.Body>

        <Modal.Footer>
          {onSave && (
            <Button
              disabled={!validate}
              onClick={onSave}
              primary
              type="submit"
            >
              {submitText}
            </Button>
          )}
        </Modal.Footer>
      </Modal.Box>
    </Modal>
  )
}

SimpleModal.defaultProps = {
  onSave: undefined,
  submitText: 'Salvar',
  validate: true,
}

SimpleModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  submitText: PropTypes.string,
  title: PropTypes.string.isRequired,
  validate: PropTypes.bool,
}

export default SimpleModal
