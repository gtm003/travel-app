import React from 'react';
import styles from "../content/content.module.scss";
import country from "../../constants/country.json";
import Card from "../content/card/card";

const GridCountry = (props) => {
    return  (
        <div className={styles.contentMain}>
            {
                country.map((item, index) => {
                    return <Card key={index} country={item} indexLang={props.indexLang}/>
                })
            }
        </div>)
}

export default GridCountry;
