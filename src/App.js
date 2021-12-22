import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <main>
      <BrowserRouter>
        <NavTabs />
        <Switch>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/aboutme" element={<AboutMe />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>



        </Switch>
        <Footer />
      </BrowserRouter>

    </main>
  );
}

export default App;
