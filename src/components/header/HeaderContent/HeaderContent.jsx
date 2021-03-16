import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import {actions} from "../../../redux/homeReducer";

const HeaderContent = (props) => {
    // const SearchProps = {
    //     value: props.homePage.headerSearchTitle,
    //     isBigSearchBar: true,
    //     setInput: actions.setHeaderSearchTitle
    // }

    return (
        <div className={'header__content'}>
            <h1 className={'header__title'}>Travel travel cho-to tam</h1>
            {/*<div className={'header__search-container'}>*/}
            {/*    <SearchBar indexLang={props.common.indexLang} searchProps={SearchProps}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default HeaderContent;
