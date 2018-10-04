import styled from 'styled-components'

const Button = styled.button`
  position: ${props => props.close ? 'absolute' : 'relative'};
  padding: 5px 15px;
  margin: ${props => props.margin};
  border: ${props => props.close ? '0' : `1px solid ${props.theme.mediumBlack}`};
  box-shadow: ${props => props.close ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.18)'};
  background-color: ${props => props.close ? 'transparent' : '#fff'};
  color: ${({ theme }) => theme.mediumBlack};
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.close ? 'right: 0' : 'left: 0'};

  &:hover {
    color: ${({ theme }) => theme.primary};
    border: ${props => props.close ? '0' : `1px solid ${props.theme.primary}`};
    box-shadow: ${props => props.close ? 'nonde' : '0 8px 12px -7px rgba(164,164,164)'};
    transition: all 0.2s ease;
  }
`

export default Button
