import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import MyNav from './components/MyNav';
import Axios from 'axios';
import MainCard from './components/MainCardHarryP';
import MainCardAvenger from './components/MainCardAvenger';
import MainCardStarTrek from './components/MainCardStarTrek';
import Footer from './components/Footer';


function App() {
  return (

    <div className="App">
      <header>
        <MyNav />
      </header>
      <main>
        <MainCard />
        <MainCardAvenger />
        <MainCardStarTrek />
      </main>
      <Footer />
    </div>
  );
}

export default App;
