import styled from 'styled-components'

const Button = styled.button`
  position: ${props => props.closeButton ? 'absolute' : 'relative'};
  padding: 5px 15px;
  margin: ${props => props.margin};
  border: ${props => props.closeButton ? '0' : `1px solid ${props.theme.mediumBlack}`};
  box-shadow: ${props => props.closeButton ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.18)'};
  background-color: ${props => props.closeButton ? 'transparent' : '#fff'};
  color: ${({ theme }) => theme.mediumBlack};
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.closeButton ? 'right: 0' : 'left: 0'};

  &:hover {
    color: ${({ theme }) => theme.primary};
    border: ${props => props.closeButton ? '0' : `1px solid ${props.theme.primary}`};
    box-shadow: ${props => props.closeButton ? 'nonde' : '0 8px 12px -7px rgba(164,164,164)'};
    transition: all 0.2s ease;
  }
`

export default Button
