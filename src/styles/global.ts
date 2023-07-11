import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    background-color: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font: ${({ theme }) => theme.font.weight.regular} ${({ theme }) =>
  theme.font.size['text-m']} ${({ theme }) => theme.font.family.regular};
  }

  button{
    cursor: pointer;
  }
  `