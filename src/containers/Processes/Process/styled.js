import styled from 'styled-components'

export const ProcessStyled = styled.div`
  padding: 10px;
  border: 1px solid #d5d5d5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

  & > div {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

const Head = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  @media screen and (min-width: 23.75em) {
    grid-template-columns: 120px 1fr;
  }
`

Head.Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

Head.Subject = styled.div`
  grid-column: span 2;
  grid-gap: 10px;
`

export default Head

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0;
`

export const ImgDefault = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  background-color: #c4c4c4;
`
