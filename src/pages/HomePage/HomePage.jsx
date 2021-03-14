import React, {useEffect, useState} from "react";
import './HomePage.scss';
import {withSuspense} from "../../components/common/Suspense/withSuspense";
import Navbar from "../../components/Navigation/Navbar";
import Content from "../../components/content/content";

const Header = React.lazy(() => import('../../components/header/header'));
const SuspendedHeader = withSuspense(Header);

const HomePage = (props) => {
    const {headerPhoto} = props.homePage;
    console.log(props);

    return (
        <>
            <Navbar isMain={true} common={props.common}/>
            <SuspendedHeader headerPhoto={headerPhoto} common={props.common}/>
            <Content country={props.common.country} indexLang={props.common.indexLang}/>
        </>
    );
}

export default HomePage;
