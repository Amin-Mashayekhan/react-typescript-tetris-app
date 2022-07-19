import App from './App'
import React from 'react';
import ReactDOM from 'react-dom/client';
import bgImage from './img/bg.jpg';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background: url(${bgImage}) #000;
    background-size: cover;
    background-position: center;
  }
`;


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyles />
    <App />
  </>
)
