import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./redux/store";
import "./scss/index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
