import React, { Fragment, useContext } from 'react';
import styles from './header.module.scss';
import './header.scss';
import HeaderContent from "./HeaderContent/HeaderContent";

const Header = (props) => {
    const {headerPhoto} = props;

    return (
        <header className={'header'}>
            <div className={'header__background'}>
                <img src={headerPhoto.src}/>
            </div>
            <div className={'header__footer'}>
                <div className="header__footer__item header__footer__item--align-right">
                    <a href={headerPhoto.phLink}
                       target={'_blank'}>Photo by {headerPhoto.phNames}</a>
                </div>
            </div>
            <HeaderContent common={props.common} homePage={props.homePage} />
        </header>
    )
}

export default Header;
