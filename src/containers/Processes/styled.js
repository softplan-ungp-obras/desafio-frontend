import styled from 'styled-components'

export const ProcessActive = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 550px;
  width: 550px;
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
  position: relative;

  @media screen and (min-width: 50em) {
    grid-template-columns: ${(props) => !props.hasProcess ? '1fr' : '400px 1fr'};
  }
`

export const Form = styled.form`
  align-items: baseline;
  display: flex;
  position: relative;
  width: 100%;

  @media screen and (min-width: 60em) {
    width: 490px;
  }
`

export const Group = styled.div`
  width: 400px;
  margin-right: 20px;
`

export const ImgDefault = styled.div`
  display: none;

  @media screen and (min-width: 60em) {
    background-color: #c4c4c4;
    display: ${(props) => props.displayList ? 'none' : 'block'};
    height: 90px;
    width: 90px;
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
