import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesCfg from './RoutesCfg';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Header />
        <main>
          <RoutesCfg />
        </main>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
