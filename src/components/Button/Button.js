import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

function Button({ onClick, children, fill, primary }) {
  const ButtonContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 9em;

    padding: ${(props) => props.theme.buttonFontSize};
    margin: 0 0.5em;
    font-size: ${(props) => props.theme.buttonFontSize};
    font-weight: 900;
    text-transform: uppercase;

    border: solid 1px ${(props) => (primary ? props.theme.primaryColor : props.theme.blackSecondaryColor)};
    background-color: ${(props) =>
      !fill ? props.theme.whiteColor : primary ? props.theme.primaryColor : props.theme.blackSecondaryColor};

    color: ${(props) =>
      fill ? props.theme.whiteColor : primary ? props.theme.primaryColor : props.theme.blackSecondaryColor};

    -webkit-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
    -moz-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
    box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};

    -webkit-transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    transition-duration: 0.4s;

    &:hover {
      background-color: ${(props) =>
        lighten(
          0.1,
          (!fill
            ? props.theme.blackTertiaryColor
            : primary
              ? props.theme.primaryColor
              : props.theme.blackSecondaryColor
          ).toString(),
        )};
    }

    &:active {
      background-color: ${(props) =>
        darken(
          0.1,
          (!fill
            ? props.theme.blackTertiaryColor
            : primary
              ? props.theme.primaryColor
              : props.theme.blackSecondaryColor
          ).toString(),
        )};
    }
  `;

  return (
    <ButtonContainer type="button" onClick={() => (onClick ? onClick() : null)}>
      {children}
    </ButtonContainer>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  fill: PropTypes.bool,
  primary: PropTypes.bool,
  children: PropTypes.any,
};

export default Button;
