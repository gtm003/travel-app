import React, {useEffect, useState} from "react";
import './navbar.scss'
import SearchBar from "../SearchBar/SearchBar";
import styles from "../header/header.module.scss";
import {useDispatch} from "react-redux";

import {actionsCommon} from "../../redux/commonReducer";
import Logo from "../header/logo";
import {useRef} from "react";
import {actions} from "../../redux/homeReducer";


const SelectLang = (props) => {
    const dispatch = useDispatch();
    const selectRef = useRef(null);

    const onChangeSelect = () => {
        const index = +(selectRef?.current?.value);
        localStorage.setItem('indexLang', index);
        dispatch(actionsCommon.setIndexLang(index));
    }

    return (
        <div className={'selectLang'}>
            <select ref={selectRef} value={props.indexLang} onChange={onChangeSelect}>
                <option value="0">English</option>
                <option value="1">Русский</option>
                <option value="2">Беларускі</option>
            </select>
        </div>
    )
}

const Navbar = (props) => {
    const [scrollTop, setScrollTop] = useState(0);

    document.addEventListener('scroll', () => {
        const temp = window.pageYOffset;
        if (((temp > 50) && (scrollTop <= 50)) || ((temp <= 50) && (scrollTop > 50))) {
            setScrollTop(temp);
        }
    });

    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        if(scrollTop > 50 && isTransparent) setIsTransparent(false);
        if(scrollTop <= 50 && !isTransparent) setIsTransparent(true);
    }, [scrollTop]);

    const SearchProps = {
        value: props.page.headerSearchTitle || '',
        isBigSearchBar: false,
        setInput: actions.setHeaderSearchTitle
    }

    return (
        <nav className={`navigation ${!props.isMain && isTransparent ? 'navigation__transparent' : ''}`}>
            <Logo />
            <div className={'navigation__search-bar'}>
                {!props.isHideSearch && <SearchBar indexLang={props.common.indexLang} searchProps={SearchProps}/>}
            </div>
            <SelectLang indexLang={props.common.indexLang}/>
        </nav>
    )
};

export default Navbar;
