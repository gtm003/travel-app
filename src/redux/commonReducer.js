export const initialState = {
    headerInputValue: '',
    navInputValue: ''
};

export const actionsCommon = {
    setHeaderInputValue: (value) =>
        ({type: 'COMMON/SET_HEADER_INPUT_VALUE', value}),
    setNavInputValue: (value) =>
        ({type: 'COMMON/SET_NAV_INPUT_VALUE', value})
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
        default:
            return state;
    }
}


export default commonReducer;
