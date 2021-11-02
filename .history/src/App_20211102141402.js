import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Exchanges } from "./components/Exchanges";
import { CryptoCurrencies } from "./components/CryptoCurrencies";
import { CrpytoDetails } from "./components/CrpytoDetails";
import { News } from "./components/News";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/cryptocurrencies">
                <CryptoCurrencies />
              </Route>
              <Route path="/crypto/:coinId">
                <CrpytoDetails />
              </Route>
              <Route path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title level={5} style={{color}}>
          Crpytooverse <br />
          All rigths reserved
        </Typography.Title>
      </div>
    </div>
  );
}

export default App;
