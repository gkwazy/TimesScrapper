import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SearchPage from "./pages/SearchPage";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Wrapper>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/Results" component={Results} />
            <Route exact path="/Saved" component={Saved} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
