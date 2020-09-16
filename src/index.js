import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css";
import App from "./components/App";

function Main() {
  return (
    <div className="Main">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default Main;