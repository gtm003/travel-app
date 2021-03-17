import React, {useEffect, useState} from "react";
import {updateCategoriesArrayPhotos} from "../../redux/countryReducer";
import {withSuspense} from "../../components/common/Suspense/withSuspense";
import Navbar from "../../components/Navigation/Navbar";
import './CategoryPage.scss'
import {useDispatch} from "react-redux";
import {MAX_COUNT_PAGE} from "../../utils/constants/constants";
import Content from "../../components/content/content";
import country from '../../constants/country.json';
import {actionsCommon} from "../../redux/commonReducer";


const Photos = React.lazy(() => import('../../components/Photos/Photos'));
const SuspendedPhotos = withSuspense(Photos);

const CountryPage = (props) => {
    // const {photos, maxCountOfColumns} = props.countryPage;
    const [indexCountry, setIndexCountry] = useState(-1);
    const query = props.query;
    const dispatch = useDispatch();
    const indexLang = props.common.indexLang;

    const [title, setTitle] = useState('');

    useEffect(() => {
        for (let i = 0; i < country.length; i++) {
            const typesQuery = [];

            country[i].localizations.forEach((el) => {
               typesQuery.push(el.name.toLowerCase());
               typesQuery.push(el.capital.toLowerCase());
            });

            if (typesQuery.includes(query.toLowerCase())){
                dispatch(actionsCommon.setCountryElem(country[i]));
                setTitle(country[i].localizations[indexLang].name);
                setIndexCountry(i);
                break;

            } else if(country.length - 1 === i) {
                dispatch(actionsCommon.setCountryElem(null));
                switch (indexLang) {
                    case 0:
                        setTitle(`Travels to "${query}" region were not found `);
                        break;
                    case 1:
                        setTitle(`Путешествия в "${query}" регион не найдены `);
                        break;
                    case 2:
                        setTitle(`Падарожжа ў "${query}" рэгіён не знойдзены`);
                        break;
                    default:
                        setTitle(`Travels to "${query}" region were not found `);
                }
            }
        }
    }, [query]);

    const [currentPage, setCurrentPage] = useState(1);
    const [isFetching, setFetching] = useState(true);

    const scrollHandler = (event) => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100
            && currentPage < MAX_COUNT_PAGE) {
            setFetching(true);
        }
    }

    // useEffect(() => {
    //     if (isFetching) {
    //         dispatch(updateCategoriesArrayPhotos(currentPage, query));
    //         setCurrentPage(prevState => prevState + 1);
    //         setFetching(false);
    //     }
    // }, [isFetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    return (
        <>
            <Navbar isHideSearch={true} isMain={false} common={props.common} page={props.countryPage}/>
            <div className={'category'}>
                <section className={'category__header'}>
                    <h1 className={'category__header__title'}>{title}</h1>
                </section>

                <Content indexCountry={indexCountry} country={props.common.country} indexLang={props.common.indexLang} />

            </div>
        </>
    );
}

export default CountryPage;
