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

  @media screen and (min-width: 50em) {
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
    display: ${(props) => props.displayList ? 'none' : 'block'};
    p:first-child {
      margin-bottom: 10px;
    }
  }
`
