import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import App from "./App"
import { ThemeProvider } from "next-themes"
import React from "react"
import ReactDOM from "react-dom/client"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
         <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)