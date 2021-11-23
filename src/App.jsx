import React from "react";
import ReactDOM from "react-dom";
import Header from "header/Header";
import "./index.css";

const App = () => (
  <div>
    <Header />
    Hi there, I'm Home App. <h1>Home.</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
