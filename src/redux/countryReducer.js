import {photoAPI} from '../api/api';
import {isUniquePhoto, photoEditing} from "../utils/photoEditing";


const initialState = {
    photos: [],
    maxCountOfColumns: 3,
    photoPageIndex: 0,
    title: '',
    headerSearchTitle: ''
};

export const actionsCategories = {
    updateArrayPhotos: (photos) =>
        ({type: 'COUNTRY/UPDATE_ARRAY_PHOTOS', photos}),
    setCuratedPageIndex: (page) =>
        ({type: 'COUNTRY/SET_PAGE_INDEX', page}),
    setCategoryTitle: (title) =>
        ({type: 'COUNTRY/SET_CATEGORY_TITLE', title}),
    zeroing: () =>
        ({type: 'COUNTRY/ZEROING_STATE'})
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTRY/UPDATE_ARRAY_PHOTOS': {
            const isUnique = isUniquePhoto(state.photos[state.photos.length - 1], action.photos[action.photos.length - 1]);
            if(isUnique) {
                return {
                    ...state,
                    photos: [...state.photos, ...action.photos],
                };
            }
            return state;
        }
        case 'COUNTRY/SET_PAGE_INDEX': {
            initialState.photoPageIndex = action.page;

            return {
                ...state,
                photoPageIndex: action.page
            };
        }
        case 'COUNTRY/SET_CATEGORY_TITLE': {
            return {
                ...state,
                title: action.title
            };
        }
        case 'COUNTRY/ZEROING_STATE': {
            return {
                ...state,
                photoPageIndex: 0,
                title: '',
                photos: []
            };
        }
        default:
            return state;
    }
}

export const updateCategoriesArrayPhotos = (page, category) => async (dispatch) => {
    const curatedPageIndex = initialState.photoPageIndex;

    if (page !== curatedPageIndex) {
        const data = await photoAPI.getCategoryPhotos(category, page);

        if (Boolean(data)) {
            const photos = photoEditing(data);
            dispatch(actionsCategories.updateArrayPhotos(photos));
            dispatch(actionsCategories.setCuratedPageIndex(page));
        }
    }
}

export default countryReducer;
