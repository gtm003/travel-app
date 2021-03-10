import React, { useContext } from 'react';
import Context from '../../../context';
import styles from './card.module.scss';

export default function Card(props) {
  const {selectCountry} = useContext(Context);
  return (
    <div className={styles.card} onClick = {() => selectCountry(props.country)}>
      <h2>{props.country.localizations[0].name}</h2>
      <h3>{props.country.localizations[0].capital}</h3>
    </div>
  )
}