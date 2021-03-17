import React from "react";
import './HomePage.scss';
import {withSuspense} from "../../components/common/Suspense/withSuspense";
import Navbar from "../../components/Navigation/Navbar";
import GridCountry from "../../components/gridCountry/gridCountry";

const Header = React.lazy(() => import('../../components/header/header'));
const SuspendedHeader = withSuspense(Header);

const HomePage = (props) => {
    const {headerPhoto} = props.homePage;

    return (
        <>
            <Navbar isMain={true} common={props.common} page={props.homePage}/>
            <SuspendedHeader headerPhoto={headerPhoto} common={props.common} homePage={props.homePage}/>
            <GridCountry indexLang={props.common.indexLang} homePage={props.homePage} />
        </>
    );
}

export default HomePage;

//<SuspendedHeader headerPhoto={headerPhoto} common={props.common} homePage={props.homePage}/>