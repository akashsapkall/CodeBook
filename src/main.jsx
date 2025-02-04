import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import{ store } from "./store/store.js"
import{ ScrollToTop } from "./components/ScrollToTop.jsx"
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Router>
    <Provider store={store}>
        <App />
        <ToastContainer position={"bottom-right"}/>
        <ScrollToTop />
    </Provider>
      </Router>
  </StrictMode>
);
