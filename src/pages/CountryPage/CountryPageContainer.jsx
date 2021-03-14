import {compose} from "redux";
import {connect, useDispatch} from "react-redux";
import {actions} from "../../redux/homeReducer";
import CountryPage from "./CountryPage";
import {withRouter} from "react-router-dom";
import React, {useEffect} from "react";
import {actionsCategories} from "../../redux/countryReducer";

const CountryPageContainer = (props) => {
    const title = props.match.params.query;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionsCategories.setCategoryTitle(title));

        return () => {
           dispatch(actionsCategories.zeroing());
        }
    }, []);

    // const query = props.match.params.query.split('').map((el, i) => {
    //     return i === 0 ? el.toUpperCase() : el.toLowerCase()
    // }).join('');

    return (
        <CountryPage countryPage={props.countryPage}
                     query={props.match.params.query}
                     common={props.common}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        countryPage: state.countryPage,
        common: state.common
    }
}

export default compose(
    connect(mapStateToProps, {...actions}),
    withRouter
)(CountryPageContainer);
