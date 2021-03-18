import { createGlobalStyle } from 'styled-components'
import '@fontsource/cormorant-garamond'
import { breakpoints, colors } from './styles'

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.babyPowder};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em "Cormorant Garamond", Georgia, serif, sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
    font-size: 17px; 
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 15px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 13px;
    }
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Cormorant Garamond", Georgia, serif, sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  p {
    margin: 0;
  }
`
