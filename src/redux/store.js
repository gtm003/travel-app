import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import homeReducer from "./homeReducer";
import commonReducer from "./commonReducer";
import countryReducer from "./countryReducer";

const rootReducer = combineReducers({
    homePage: homeReducer,
    common: commonReducer,
    countryPage: countryReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store

