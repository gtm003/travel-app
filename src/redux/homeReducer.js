import defaultHeaderImage from '../assets/images/default-header-bg.jpeg';
import {photoAPI} from '../api/api';
import {getRandomInt} from "../utils/common";

const initialState = {
    headerPhoto: {
        src: defaultHeaderImage,
        phNames: 'Nothing ahead',
        phLink: 'https://www.pexels.com/@kira-schwarz'
    },
    filterCountry: [],
    headerSearchTitle: ''
};

export const actions = {
    setHeaderPhoto: (phLink, src, phNames) =>
        ({type: 'MAIN/UPDATE_HEADER_PHOTO', phNames, phLink, src}),
    setFilterCountryArr: (arr) =>
        ({type: 'MAIN/SET_FILTER_COUNTRY_ARR', arr}),
    setHeaderSearchTitle: (title) =>
        ({type: 'MAIN/SET_HEADER_SEARCH_TITLE', title})
}


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAIN/UPDATE_HEADER_PHOTO': {
            const newHeaderPhoto = {
                phLink: action.phLink,
                phNames: action.phNames,
                src: action.src
            };
            return {
                ...state,
                headerPhoto: newHeaderPhoto
            };
        }
        case 'MAIN/SET_FILTER_COUNTRY_ARR': {
            return {
                ...state,
                filterCountry: [...action.arr]
            };
        }
        case 'MAIN/SET_HEADER_SEARCH_TITLE': {
            return {
                ...state,
                headerSearchTitle: action.title
            };
        }
        default:
            return state;
    }
}

export const setHeaderPhoto = () => async (dispatch) => {
    const data = await photoAPI.getHeaderPhoto();
    let src;
    if (Boolean(data)) {
        const indexPhoto = getRandomInt(data?.photos.length);

        const photo = data?.photos[indexPhoto];
        const photographerUrl = photo?.photographer_url || initialState.headerPhoto.phLink;
        const photographer = photo?.photographer || initialState.headerPhoto.phNames;

        try {
            src = (photo.src.landscape !== undefined || photo.src.original !== undefined)
                ? (photo.src.landscape || photo.src.original)
                : initialState.headerPhoto.src;
        } catch (err) {
            console.log(err);
            console.log(data);

            src = initialState.headerPhoto.src;
        }

        dispatch(actions.setHeaderPhoto(photographerUrl, src, photographer));
    }
}

export default homeReducer;
