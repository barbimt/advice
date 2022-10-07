import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store"

//tiene la funcion dispatch el store-> entonces tenemos q otorgarle la funcion dispatch al componente q necesite para que haya cambios en el store, tenemos q darle la particularidad q es dispatch a tal componente para iniciar el dispatch
console.log(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
