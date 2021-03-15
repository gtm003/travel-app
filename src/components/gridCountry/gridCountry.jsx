import React from 'react';
import styles from "../content/content.module.scss";
import country from "../../constants/country.json";
import Card from "../content/card/card";
import {useEffect, useState} from "react";

const GridCountry = (props) => {
    const {filterCountry} = props.homePage;
    const [gridCountry, setGridCountry] = useState([...country]);

    useEffect(() => {
        const title = props.homePage.headerSearchTitle.trim();

        if (title === '') setGridCountry([...country]);
        else {
            const arr = [];
            country.forEach((el) => {
                if (filterCountry.includes(el.localizations[0].name.toLowerCase())) {
                    arr.push(el);
                    // setGridCountry([...arr]);
                }
            });
            setGridCountry([...arr]);
        }
    }, [props.homePage.headerSearchTitle]);

    return  (
        <div className={styles.contentMain}>
            {
                gridCountry.map((item, index) => {
                    return <Card key={index} country={item} indexLang={props.indexLang}/>
                })
            }
        </div>)
}

export default GridCountry;
