import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { routes } from "./routes/route";
import { AuthInitializer } from "./hoc/with-auth-initializer";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthInitializer>
          <RouterProvider router={routes} />
        </AuthInitializer>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
