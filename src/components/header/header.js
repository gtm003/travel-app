import React, { Fragment, useContext } from 'react';
import Context from '../../context';
import styles from './header.module.scss';
import './header.scss';
import HeaderContent from "./HeaderContent/HeaderContent";

// export default function Header(props) {
//   return (
//     <div className={styles.header}>
//       <Logo />
//       <Search country = {props.country}/>
//       <SelectLang />
//     </div>
//   )
// }
//
// function Logo(props) {
//   const {selectCountry} = useContext(Context);
//   return (
//     <div className={styles.logo} onClick = {() => selectCountry(null)}>
//       <h2 style = {styles.h2}>TravelApp</h2>
//     </div>
//   )
// }
//
// function Search(props) {
//   console.log(props.country);
//   return (
//     <Fragment>
//       {!props.country && (
//           <div className = {styles.search}>
//           <form>
//             <input type="search" placeholder="Search country" className = {styles.inputSearch}/>
//             <button className = {styles.cancelButton}/>
//           </form>
//           <button className = {styles.confirmButton}>Search</button>
//         </div>
//         )
//       }
//     </Fragment>
//   )
// }
//

// function SelectLang(props) {
//   return (
//     <div className={styles.selectLang}>
//       <select>
//           <option value="0">English</option>
//           <option value="1">Русский</option>
//           <option value="2">Беларускі</option>
//       </select>
//     </div>
//   )
// }

const Header = (props) => {
    const {headerPhoto} = props;
    return (
        <header className={'header'}>
            <div className={'header__background'}>
                <img src={headerPhoto.src}/>
            </div>
            <div className={'header__footer'}>
                <div className="header__footer__item header__footer__item--align-right">
                    <a href={headerPhoto.phLink}
                       target={'_blank'}>Photo by {headerPhoto.phNames}</a>
                </div>
            </div>
            <HeaderContent common={props.common}/>
        </header>
    )
}

export default Header;
