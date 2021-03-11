import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import {actionsCommon} from "../../../redux/commonReducer";

const HeaderContent = (props) => {
    const SearchProps = {
        value: props.common.headerInputValue,
        isBigSearchBar: true,
        setInput: actionsCommon.setHeaderInputValue
    }

    return (
        <div className={'header__content'}>
            <h1 className={'header__title'}>Travel travel cho-to tam</h1>
            <div className={'header__search-container'}>
                <SearchBar searchProps={SearchProps}/>
            </div>
        </div>
    )
}

export default HeaderContent;
