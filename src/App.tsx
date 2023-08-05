import React from "react";
import { Provider } from "react-redux";

import "./App.css";

import { store } from "./store";
import McBaseLayout from "./layouts";
import Route from "./components/Route";
import Map from "./components/Map";

function App() {
  return (
    <Provider store={store}>
      <McBaseLayout>
        <Route />
        <Map />
      </McBaseLayout>
    </Provider>
  );
}

export default App;
