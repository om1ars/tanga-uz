import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/' >
                <HomePage />
              </Route>
              <Route  path='/exchanges' >
                <Exchanges />
              </Route>
              <Route  path='/cryptocurrencies' >
                <CryptoCurrencies />
              </Route>
              <Route  path='/crypto/:coinId' >
                <CrpytoDetails />
              </Route>
              <Route  path='/news' >
                <CrpytoDetails />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
