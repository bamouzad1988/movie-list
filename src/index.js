import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// APP
import App from "./App";
// Store
import { Provider } from "react-redux";
import store from "./store/index";
// Router
import { BrowserRouter } from "react-router-dom";

// import fonts
import "./assets/font/Iranian-Sans.ttf";

// Importing the Bootstrap 5 CSS
import "bootstrap/dist/css/bootstrap.rtl.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
