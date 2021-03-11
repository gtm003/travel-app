import React, { useContext } from 'react';
import Context from '../../../context';
import styles from './description.module.scss';

export default function Description(props) {
  const index = props.indexLang;
  //const {selectCountry} = useContext(Context)
  return (
    <div className={styles.description}>
      <h2>{props.country.localizations[index].name}</h2>
      <h3>{props.country.localizations[index].capital}</h3>
      <p>{props.country.localizations[index].description}</p>
    </div>
  )
}