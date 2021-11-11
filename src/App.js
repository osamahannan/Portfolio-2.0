import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";
function App() {

  const [showLink, setShowLink] = useState(1);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar showLink ={showLink} setShowLink = {setShowLink} />

        <Switch>

          <Route exact path="/">
            <Home setShowLink = {setShowLink} />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/blogs">
            <Blog />
          </Route>

        </Switch>

        <Contact />
      </Router>
    </div>
  );
}

export default App;
