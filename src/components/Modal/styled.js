import styled from 'styled-components'

const Modal = styled.div`
  align-items: center;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 9999;
`

Modal.Box = styled.div`
  background-color: #fff;
  min-width: auto;
  padding: 10px;
  width: 90%;

  @media screen and (min-width: 23.75em) {
    width: 500px;
  }
`

Modal.Head = styled.div`
`

Modal.Body = styled.div`
  padding: 15px 0;
`

Modal.Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default Modal
