import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
Layout;
function App() {
  return (
    <div className="app">
      <div className="navbar"></div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
