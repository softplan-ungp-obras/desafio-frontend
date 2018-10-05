import styled from 'styled-components'

const Modal = styled.div`
  background-color: rgba(0,0,0,0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
`

Modal.Box = styled.div`
  background-color: #fff;
  min-width: auto;
  padding: 20px;
  width: 90%;

  @media screen and (min-width: 767px) {
    min-width: 500px;
  }
`

Modal.Head = styled.div`
`

Modal.Body = styled.div`
`

Modal.Footer = styled.div`
  justify-content: end;
  display: flex;
`

export default Modal
