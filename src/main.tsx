import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import App from "./App"
import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ColorModeProvider } from "@components/ui/color-mode"

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(

    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ColorModeProvider>
    </ChakraProvider>,
)