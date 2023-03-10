import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom/";
import { router } from "./app/router/Routes";
import { store } from "./app/stores/store";
import "./index.css";
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
