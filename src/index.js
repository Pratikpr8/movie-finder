import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import { AppProvider } from "./component/context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter basename="/movie-finder">
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
