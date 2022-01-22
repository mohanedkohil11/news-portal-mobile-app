import actionTypes from '../../actionTypes';

const initialState = {
    filters: { country: 'eg', category: 'business' },
    topHeadlines: [],
};
const news = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TOP_HEADLINES:
            return {
                ...state,
                topHeadlines: action.payload,
            };
        case actionTypes.SET_FILTERS:
            return {
                ...state,
                filters: action.payload,
            };
        default:
            return state;
    }
};

export default news;
