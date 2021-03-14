export const initialState = {
    headerInputValue: '',
    navInputValue: '',
    country: '',
    indexLang: 0
};

export const actionsCommon = {
    setHeaderInputValue: (value) =>
        ({type: 'COMMON/SET_HEADER_INPUT_VALUE', value}),
    setNavInputValue: (value) =>
        ({type: 'COMMON/SET_NAV_INPUT_VALUE', value}),
    setCountryElem: (country) =>
        ({type: 'COMMON/SET_COUNTRY', country}),
    setIndexLang: (index) =>
        ({type: 'COMMON/SET_INDEX_LANG', index})
}


const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMMON/SET_HEADER_INPUT_VALUE': {
            return {
                ...state,
                headerInputValue: action.value
            }
        }
        case 'COMMON/SET_NAV_INPUT_VALUE': {
            return {
                ...state,
                navInputValue: action.value
            }
        }
        case 'COMMON/SET_COUNTRY': {
            return {
                ...state,
                country: action.country
            }
        }
        case 'COMMON/SET_INDEX_LANG': {
            return {
                ...state,
                indexLang: action.index
            }
        }
        default:
            return state;
    }
}


export default commonReducer;
