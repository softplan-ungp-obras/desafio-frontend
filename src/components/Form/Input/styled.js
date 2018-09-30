import styled from 'styled-components'

export const GroupStyled = styled.div`
  position: relative;
  margin: 10px 0 25px;
  display: flex;
  align-items: center;

  label {
    color: #696d8c;
  }

  input {
    padding: 10px;
    padding-right: 30px;
    width: 100%;
    background: #fff;
    border: 1px solid #b6b9d0;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    font-size: 1rem;
    color: #696d8c;
    outline: none;
    transition: all .2s linear;

    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0 15px 30px -15px rgba(164, 164, 164);
    }


  }

  .icon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`

export const StyledInput = styled.input`
  margin: 10px 0 25px;
  padding: 10px;
  width: 100%;
  background: #fff;
  border: 1px solid #b6b9d0;
  box-sizing: border-box;
  box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  color: #696d8c;
  outline: none;
  transition: all .2s linear;

  &:focus {
    outline: none;
  }
`
