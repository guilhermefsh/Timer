import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/Router"

function App() {


  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
