import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { routes } from "./routes/route";
import AuthInitializer from "./hoc/with-auth-initializer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AuthInitializer>
        <RouterProvider router={routes} />
      </AuthInitializer>
    </ReduxProvider>
  </React.StrictMode>
);
