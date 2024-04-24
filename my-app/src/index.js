// import React from "react";
// import ReactDOM from "react-dom/client";
// // import { Provider } from "react-redux";
// import configureStore from "./store/ConfigureStore";
// import { AuthProvider } from "./contexts/Auth";
// import App from "./App";

// const store = configureStore();
// store.subscribe(() => {
//   console.log(store.getState());
// });
// console.log("product details", store.getState());
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <AuthProvider store={store}>
//     <App />
//   </AuthProvider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import configureStore from "./store/ConfigureStore";
import "antd/dist/reset.css";
import { AuthProvider } from "./contexts/Auth";
import "antd/dist/reset.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

// const store = configureStore();
// store.subscribe(() => {
//   console.log(store.getState());
// });
// console.log("product details", store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
