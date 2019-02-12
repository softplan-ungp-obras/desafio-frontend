import styled from 'styled-components'

const BoxStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #d5d5d5;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  z-index: 1;
  transition: all 0.2s ease;
  cursor: pointer;

  & > div {
    margin-right: 50px;
  }

  &:hover {
    box-shadow: 0 15px 30px -18px rgba(164, 164, 164);
    z-index: 2;
    transition: all 0.2s ease;
  }

  @media screen and (min-width: 42.5em) {
    /* justify-content: space-between;
    flex-wrap: initial; */
  }
`

export default BoxStyled
