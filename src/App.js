import React, { useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Context from './context';
import Content from './components/content/content';

function App() {
  const wrapperStyle = {
    backgroundColor : '#eee',
    height : '100vh',
    display : 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  
  const [country, setCountry] = useState(null);

  function selectCountry(country) {
    console.log(country);
    setCountry(country);
  }

  return (
    <Context.Provider value = {{selectCountry}}>
      <div className = 'wrapper' style={wrapperStyle}>
        <Header country = {country}/>
        <Content country = {country}/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;