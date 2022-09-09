import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./style/theme";

import "@fontsource/jetbrains-mono";
import "@fontsource/rubik";
import "@fontsource/ibm-plex-sans";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
