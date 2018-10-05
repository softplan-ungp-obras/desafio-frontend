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
  position: relative;
  width: 90%;

  @media screen and (min-width: 50em) {
    width: 800px;
  }
`

Modal.Head = styled.div`
  position: relative;
`

Modal.Body = styled.div`
  padding: 15px 0;
`

Modal.Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default Modal
