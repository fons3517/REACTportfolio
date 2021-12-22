import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavTabs from './components/NavTabs';
import AboutMe from './components/pages/AboutMe';
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <main>
      <NavTabs />
      <Routes>
        <Route exact path="/portfolio" element={ <Portfolio /> }></Route>
      </Routes>
    
      <Footer />
    </main>
  );
}

export default App;
