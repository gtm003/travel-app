import React, { useState, useEffect } from 'react';
import Footer from './components/footer/footer';
import Context from './context';
import {connect, useDispatch} from "react-redux";
import {actions, setHeaderPhoto} from "./redux/homeReducer";
import {Redirect, Route, Switch} from 'react-router-dom'
import {compose} from "redux";
import {actionsCommon} from "./redux/commonReducer";
import {withSuspense} from "./components/common/Suspense/withSuspense";
import countries from './constants/country.json';
import ScrollToTop from "./utils/ScrollToTop";


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

    const indexLang = getIndexLang();
    setIndexLang(indexLang);

    const arr = [];
    countries.forEach((el) => {
      arr.push(el.localizations[indexLang].name.toLowerCase());
      arr.push(el.localizations[indexLang].capital.toLowerCase());
    });

    dispatch(actions.setFilterCountryArr(arr));

  }, []);

  return (
    <Context.Provider value = {{selectCountry}}>
    <ScrollToTop/>
      <div className = 'wrapper' style={wrapperStyle}>
        <Switch>
          <Route exact path={'/travel-app'}
                 render={() => <Redirect to={'/'}/>}/>

          <Route exact path='/'
                 render={() => <SuspendedHomePage />}/>

          <Route exact path='/country/:query?'
                 render={() => <SuspendedCountryPage />}/>

          <Route exact path='*'
                 render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
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

