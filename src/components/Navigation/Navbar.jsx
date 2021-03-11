import React, {useEffect, useState} from "react";
import './navbar.scss'
import SearchBar from "../SearchBar/SearchBar";
import styles from "../header/header.module.scss";
import {actionsCommon} from "../../redux/commonReducer";


function SelectLang() {
    return (
        <div className={'selectLang'}>
            <select>
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
    })

    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        if(scrollTop > 50 && isTransparent) setIsTransparent(false);
        if(scrollTop <= 50 && !isTransparent) setIsTransparent(true);
    }, [scrollTop]);

    const SearchProps = {
        value: props.common.navInputValue,
        isBigSearchBar: false,
        setInput: actionsCommon.setNavInputValue
    }

    return (
        <nav className={`navigation ${props.isMain && isTransparent ? 'navigation__transparent' : ''}`}>
            <a className={'navigation__logo'} href={'/'}>
                <div className={'navigation__logo__text'}>Travel App</div>
            </a>
            <div className={'navigation__search-bar'}>
                <SearchBar searchProps={SearchProps}/>
            </div>
            <SelectLang />
        </nav>
    )
};

export default Navbar;
