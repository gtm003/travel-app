import React, { Fragment, useContext } from 'react';
import Context from '../../context';
import styles from './header.module.scss';

export default function Header(props) {
  return (
    <div className={styles.header}>
      <Logo />
      <Search country = {props.country}/>
      <SelectLang />
    </div>
  )
}

function Logo(props) {
  const {selectCountry} = useContext(Context);
  return (
    <div className={styles.logo} onClick = {() => selectCountry(null)}>
      <h2 style = {styles.h2}>TravelApp</h2>
    </div>
  )
}

function Search(props) {
  return (
    <Fragment>
      {!props.country && (
          <div className = {styles.search}>
          <form>
            <input type="search" placeholder="Search country" className = {styles.inputSearch}/>
            <button className = {styles.cancelButton}/>
          </form>
          <button className = {styles.confirmButton}>Search</button>
        </div>
        )
      }
    </Fragment>
  )
}

function SelectLang(props) {
  const indexLang = (
    localStorage.getItem('indexLang') ? localStorage.getItem('indexLang') : 0
  );
  const {selectLang} = useContext(Context);
  return (
    <div className={styles.selectLang}>
      <select defaultValue = {indexLang} onChange = {(event) => selectLang(event.target.value)}>
          <option value="0">English</option>
          <option value="1">Русский</option>
          <option value="2">Беларускі</option>
      </select>
    </div>
  )
}