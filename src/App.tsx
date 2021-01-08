import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Sponsors from './pages/Sponsors';
import Resources from './pages/Resources';
import Quiz from './pages/Quiz';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/events' component={Events}/>
        <Route exact path='/sponsors' component={Sponsors}/>
        <Route exact path='/resources' component={Resources}/>
        <Route exact path='/quiz' component={Quiz}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
