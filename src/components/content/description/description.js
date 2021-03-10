import React, { useContext } from 'react';
import Context from '../../../context';
import styles from './description.module.scss';

export default function Description(props) {
  //const {selectCountry} = useContext(Context)
  return (
    <div className={styles.description}>
      <h2>{props.country.localizations[0].name}</h2>
      <h3>{props.country.localizations[0].capital}</h3>
      <p>{props.country.localizations[0].description}</p>
    </div>
  )
}