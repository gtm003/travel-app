import React, {useEffect, useState} from "react";
import {updateCategoriesArrayPhotos} from "../../redux/countryReducer";
import {withSuspense} from "../../components/common/Suspense/withSuspense";
import Navbar from "../../components/Navigation/Navbar";
import './CategoryPage.scss'
import {useDispatch} from "react-redux";
import {MAX_COUNT_PAGE} from "../../utils/constants/constants";

const Photos = React.lazy(() => import('../../components/Photos/Photos'));
const SuspendedPhotos = withSuspense(Photos);

const CountryPage = (props) => {
    console.log(props);
    const {photos, maxCountOfColumns} = props.countryPage;
    const query = props.query;
    const title = photos.length === 0 ? `We Couldn't Find Anything For “${query}”` : query;

    const [currentPage, setCurrentPage] = useState(1);
    const [isFetching, setFetching] = useState(true);

    const dispatch = useDispatch();

    const scrollHandler = (event) => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100
            && currentPage < MAX_COUNT_PAGE) {
            setFetching(true);
        }
    }

    useEffect(() => {
        if (isFetching) {
            dispatch(updateCategoriesArrayPhotos(currentPage, query));
            setCurrentPage(prevState => prevState + 1);
            setFetching(false);
        }
    }, [isFetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    return (
        <>
            <Navbar isMain={false} common={props.common}/>
            <div className={'category'}>
                <section className={'category__header'}>
                    <h1 className={'category__header__title'}>{title}</h1>
                </section>
                <section className={'category__grid'}>
                    <SuspendedPhotos photos={photos} maxCountOfColumns={maxCountOfColumns}/>
                </section>
            </div>
        </>
    );
}

export default CountryPage;
