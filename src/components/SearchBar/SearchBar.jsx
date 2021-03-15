import React, {useEffect, useRef, useState} from "react";
import './search-bar.scss'
import searchIcon from '../../assets/icons/search.svg';
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {actions} from "../../redux/homeReducer";
import countries from "../../constants/country.json";


const SearchBar = (props) => {
    const {isBigSearchBar, value,setInput} = props.searchProps;
    const inputEl = useRef(null);
    const dispatch = useDispatch();

    const [redirect, setRedirect] = useState('');

    const addResentWordEvent = () => {
        const value = inputEl.current?.value.trim();
        if (value.length !== 0) setRedirect(`/country/${value}`)

        dispatch(setInput(''));
    }

    const keydownHandler = (event) => {
        if (event.key === 'Enter') {
            const isFocused = document.activeElement === inputEl.current;
            if (isFocused) addResentWordEvent();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return function () {
            document.removeEventListener('keydown', keydownHandler);
        }
    }, []);

    const onChange = () => {
        const value = inputEl.current?.value.toLowerCase().trim();
        dispatch(setInput(value));

        const arr = [];
        countries.forEach((el) => {
            const country = el.localizations[0].name.toLowerCase();
            if (country.includes(value)) arr.push(country);
        });

        dispatch(actions.setFilterCountryArr(arr));
    }

    const onClick = () => {
        addResentWordEvent();
    }

    return (
       <form className={'search-bar ' + (isBigSearchBar && ' search-bar--bigger ')} method="get">
           { redirect !== '' && <Redirect to={redirect} />}
           <div className={'search-bar__container'}>
               <input ref={inputEl} value={value} onChange={onChange} placeholder="Search travel" type="search"/>
               <button onClick={onClick}>
                   <i className={'svg-icon'}><img src={searchIcon}/></i>
               </button>
           </div>
       </form>
   )
}

export default SearchBar;
