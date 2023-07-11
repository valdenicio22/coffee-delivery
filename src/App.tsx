import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"



function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1> Hello world </h1>
    </ThemeProvider>
  )
}

export default App
