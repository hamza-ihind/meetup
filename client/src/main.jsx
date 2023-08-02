import React from "react";
import ReactDOM from "react-dom/client";
import ApolloProvider from "./ApolloProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>{ApolloProvider}</BrowserRouter>
  </React.StrictMode>
);
