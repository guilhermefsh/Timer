import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/Router"
import { CyclesContextProvider } from "./contexts/CyclesContexts"

function App() {


  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
