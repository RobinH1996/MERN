import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import AuthChecker from "./components/AuthChecker.tsx";
import { store } from "./store/index.tsx";
import { ToastContainer } from "react-toastify";
import LoadingIndicator from "./components/LoadingIndicator.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
        <AuthChecker />
      </Router>
      <ToastContainer position="bottom-right" />
      <LoadingIndicator />
    </React.StrictMode>
  </Provider>
);
