import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.js";
import { ModalProvider } from "./components/modalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
