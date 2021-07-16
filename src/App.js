import "./App.css";

import ReactDOM from "react-dom";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Navbar from "./components /Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/About">
              <About />
            </Route>

            <Redirect />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
