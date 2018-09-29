import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import Theme from '../../config/Theme';

function Button(props) {
  const ButtonContainer = styled.button`
    font: inherit;
    padding: ${props.small ? '0.5em' : '0.87em'};
    min-width: 135px;
    width: 8em;
    font-size: ${Theme.font.buttonLabel.fontSize};
    font-weight: ${Theme.font.buttonLabel.fontWeight};
    text-transform: uppercase;
    background-color: ${!props.fill
      ? Theme.colors.white
      : props.primary
        ? Theme.colors.primary
        : Theme.colors.black_54};

    color: ${props.fill ? Theme.colors.white : props.primary ? Theme.colors.primary : Theme.colors.black_54};

    border: solid 1px ${props.primary ? Theme.colors.primary : Theme.colors.black_54};

    -webkit-box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
    -moz-box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
    box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};

    -webkit-transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    transition-duration: 0.4s;

    &:hover {
      background-color: ${lighten(
        0.1,
        !props.fill ? Theme.colors.black_38 : props.primary ? Theme.colors.primary : Theme.colors.black_54,
      )};
    }

    &:active {
      background-color: ${darken(
        0.1,
        !props.fill ? Theme.colors.black_38 : props.primary ? Theme.colors.primary : Theme.colors.black_54,
      )};
    }
  `;

  return (
    <ButtonContainer type="button" onClick={() => (props.onClick ? props.onClick() : null)}>
      {props.children}
    </ButtonContainer>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
