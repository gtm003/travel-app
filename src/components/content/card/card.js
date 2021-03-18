import React, { useContext } from 'react';
import Context from '../../../context';
import styles from './card.module.scss';
import {useDispatch} from "react-redux";
import {actionsCommon} from "../../../redux/commonReducer";
import {useState} from "react";
import {Redirect} from "react-router-dom";

export default function Card(props) {
  const {selectCountry} = useContext(Context);
  const index = props.indexLang;
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const onCardClickHandler = () => {
      dispatch(actionsCommon.setCountryElem(props.country));
      setRedirect(true);
  }

  return (
    <div className={styles.card} onClick={onCardClickHandler} key={props.country.localizations[index].name}>
      <h2>{props.country.localizations[index].name}</h2>
      <h3>{props.country.localizations[index].capital}</h3>
      <img src={props.country.imageUrl} alt={props.country.imageUrl}></img>
        {redirect && <Redirect to={`/travel-app/country/${props.country.localizations[0].name.toLowerCase()}`}/>}
    </div>
  )
}
