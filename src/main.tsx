import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { RouterConfig } from "./router.tsx";
// import { ApolloProvider } from "@apollo/client";
// import { client } from "./apollo/client.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ApolloProvider client={client}>   */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterConfig />
      </ThemeProvider>
    {/* </ApolloProvider> */}
  </StrictMode>
);
