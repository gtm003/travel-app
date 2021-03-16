import React from 'react';
import "../content/Content.scss";
import country from "../../constants/country.json";
import Card from "../content/card/card";
import {useEffect, useState} from "react";

const GridCountry = (props) => {
    const {filterCountry} = props.homePage;
    const [gridCountry, setGridCountry] = useState([...country]);
    const indexLang = props.indexLang;

    useEffect(() => {
        const title = props.homePage.headerSearchTitle.trim();

        if (title === '') setGridCountry([...country]);
        else {
            const arr = [];
            country.forEach((el) => {
                if (filterCountry.includes(el.localizations[indexLang].name.toLowerCase())
                    || filterCountry.includes(el.localizations[indexLang].capital.toLowerCase())) {
                    arr.push(el);
                }
            });
            setGridCountry([...arr]);
        }
    }, [props.homePage.headerSearchTitle]);

    return  (
        <div className = 'content-main'>
            {
                gridCountry.map((item, index) => {
                    return <Card key={index} country={item} indexLang={indexLang}/>
                })
            }
        </div>)
}

export default GridCountry;
