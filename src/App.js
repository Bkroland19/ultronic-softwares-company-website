
import './App.css';

import ReactDOM from 'react-dom';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

import Navbar from'./components /Navbar';
import Home from './pages/home/Home';
import Contact from './pages/about/Contact';
import About from './pages/about/About';
import Footer from './components /Footer';
import Services from './pages/services/Services';
import Projects from './pages/projects/Projects';
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <main>
     
        <Switch>
          <Route path ="/" exact>
            <Home />
          </Route>

        <Route path="/contact" >
          <Contact />
        </Route>
        <Route path ="/About" >
          <About />
        </ Route>
        <Route path="/services">
        <Services />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Redirect />

        </Switch>
      </main>
       
      </Router>

 
     <Footer/>  
    </div>
  );
}

export default App;
