import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/projects">
          <Projects />
        </Route>
        <Route exact path = "/blogs">
          <Blog />
        </Route>
    
      </Switch>

      <Contact />
    </Router>
  );
}

export default App;
