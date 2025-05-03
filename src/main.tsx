import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import App from "./App"
import { ThemeProvider } from "next-themes"
import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)