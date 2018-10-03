import styled from 'styled-components'

export const ProcessActive = styled.div`
  width: 550px;
  height: 550px;
  background-color: ${({ theme }) => theme.primary};
`

export const Content = styled.div`
  padding: 10px;
  width: 100%;

  @media screen and (min-width: 60em) {
    padding: 0;
    width: ${({ theme }) => theme.wrapperWidth};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;

  @media screen and (min-width: 42.5em) {
    grid-template-columns: ${(props) => !props.hasProcess ? '1fr' : '400px 1fr'};
  }
`

export const Form = styled.form`
  width: 100%;

  @media screen and (min-width: 60em) {
    width: 400px;
  }
`
export const ImgDefault = styled.div`
  display: none;

  @media screen and (min-width: 60em) {
    display: ${(props) => props.displayList ? 'none' : 'block'};
    width: 90px;
    height: 90px;
    background-color: #c4c4c4;
  }
`

export const Item = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: 42.5em) {
    p:first-child {
      margin-bottom: 15px;
    }
  }
`

export const ProcessStyled = styled.div`
  padding: 10px;
  border: 1px solid #d5d5d5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
`
