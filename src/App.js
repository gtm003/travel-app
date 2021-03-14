import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Context from './context';
import Content from './components/content/content';
import {connect, useDispatch} from "react-redux";
import {setHeaderPhoto} from "./redux/homeReducer";
import {Redirect, Route, Switch} from 'react-router-dom'
import {compose} from "redux";
import {actionsCommon} from "./redux/commonReducer";
import {withSuspense} from "./components/common/Suspense/withSuspense";


const HomePageContainer = React.lazy(() => import('./pages/HomePage/HomePageContainer'));
const CategoryPageContainer = React.lazy(() => import('./pages/CountryPage/CountryPageContainer'));

const SuspendedHomePage = withSuspense(HomePageContainer);
const SuspendedCountryPage = withSuspense(CategoryPageContainer);

function App() {
  const wrapperStyle = {
    backgroundColor : '#eee',
    height : '100vh',
    display : 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const [country, setCountry] = useState(null);
  const dispatch = useDispatch();
  const [indexLang, setIndexLang] = useState(0);

  function selectCountry(country) {
    setCountry(country);
    dispatch(actionsCommon.setCountryElem(country))
  }

  useEffect(() => {
    dispatch(setHeaderPhoto());

    function getIndexLang() {
      const index = localStorage.getItem('indexLang') ? localStorage.getItem('indexLang') : 0;
      dispatch(actionsCommon.setIndexLang(index));
      return index;
    }

    setIndexLang(getIndexLang());

  }, []);

  return (
    <Context.Provider value = {{selectCountry}}>
      <div className = 'wrapper' style={wrapperStyle}>
        <Switch>
          <Route exact path='/'
                 render={() => <Redirect to={'/travel-app'}/>}/>

          <Route path='/travel-app'
                 render={() => <SuspendedHomePage />}/>

          <Route path='/country/:query?'
                 render={() => <SuspendedCountryPage />}/>

          <Route path='*'
                 render={() => <div>404 NOT FOUND</div>}/>
        </Switch>

        {/*<Header country={country}/>*/}
        <Footer />
      </div>
    </Context.Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    common: state.common,
  }
}

export default compose(
    connect(mapStateToProps, {...actionsCommon})
)(App);

