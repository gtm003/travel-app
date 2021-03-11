import React, {useEffect, useState} from "react";
import './navbar.scss'
import SearchBar from "../SearchBar/SearchBar";

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
                <SearchBar />
            </div>
        </nav>
    )
};

export default Navbar;
