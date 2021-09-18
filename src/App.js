import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="content">
        <Header/>
        <Menu/>
          <div>content</div>
        <Footer/>
    </div>
  );
}

export default App;
