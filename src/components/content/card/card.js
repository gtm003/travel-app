import React, { useContext } from 'react';
import Context from '../../../context';
import styles from './card.module.scss';

export default function Card(props) {
  const {selectCountry} = useContext(Context);
  const index = props.indexLang;
  
  return (
    <div className={styles.card} onClick = {() => selectCountry(props.country)}>
      <h2>{props.country.localizations[index].name}</h2>
      <h3>{props.country.localizations[index].capital}</h3>
      <img src = {props.country.imageUrl} alt = {props.country.imageUrl}></img>
    </div>
  )
}
