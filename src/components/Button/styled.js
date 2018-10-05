import styled, { css } from 'styled-components'

const Button = styled.button`
  background: ${props => props.bgColor};
  border: 1px solid ${props => props.theme.mediumBlack};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  color: ${({ theme }) => theme.mediumBlack};
  cursor: pointer;
  font-weight: bold;
  left: 0;
  margin: ${props => props.margin};
  padding: 5px 15px;
  position: relative;
  transition: all 0.2s ease;


  &:hover {
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${props => props.theme.primary};
    box-shadow: 0 8px 12px -7px rgba(164,164,164);
    transition: all 0.2s ease;
  }

  ${props => props.primary && css`
    background: ${props.theme.primary};
    border: 1px solid ${props.theme.primary};
    color: #fff;
    &:hover {
      color: ${props.theme.primary};
      background: transparent;
    }
  `}

  ${props => props.closeButton && css`
    background: transparent;
    border: 0;
    box-shadow: none;
    height: 20px;
    left: inherit;
    padding: 1px;
    position: absolute;
    right: 10px;
    width: 20px;
    z-index: 9999;

    &:hover {
      border: 0;
      box-shadow: none;
      color: ${props.theme.primary};
      transform: rotate(90deg);
    }
  `}
`

export default Button
