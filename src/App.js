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
  const [indexLang, setIndexLang] = useState(0);

  function selectCountry(country) {
    console.log(country);
    setCountry(country);
  }

  function selectLang(index) {
    console.log(index);
    setIndexLang(index);
    localStorage.setItem('indexLang', index);
  }

  return (
    <Context.Provider value = {{selectCountry, selectLang}}>
      <div className = 'wrapper' style={wrapperStyle}>
        <Header country = {country} indexLang = {indexLang}/>
        <Content country = {country} indexLang = {indexLang}/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;