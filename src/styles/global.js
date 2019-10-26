import { createGlobalStyle } from 'styled-components';
import theme from '~/styles/theme';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap');
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  html, body, #root{
    height:100%;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${theme.white.main};
    font-family: 'Montserrat', sans-serif;
    color: ${theme.black.main};
    font-size: 16px;
    font-weight:normal;
  }

  button{
    cursor: pointer;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight:normal;
  }

  p,span{
    line-height: 26px
  }

  input::placeholder {
    color: ${theme.grey.main};
    font-size: 15px;
    font-weight:400;
    font-family: 'Montserrat', sans-serif;
  }

  ul,li{
    margin:0;
    padding:0;
    list-style:none;
  }

`;

export default GlobalStyle;
