import styled from 'styled-components'

export const Content = styled.div`
  padding: 10px;
  width: 100%;

  @media screen and (min-width: 60em) {
    padding: 0;
    width: 960px;
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
    display: block;
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
