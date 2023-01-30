import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistedStore} from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            <App/>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
