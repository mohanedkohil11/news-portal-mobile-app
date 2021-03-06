import actionTypes from '../../actionTypes';

const initialState = {
    filters: { country: 'eg', category: 'business' },
    topHeadlines: [],
    selectedSourceNews: [],
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
        case actionTypes.GET_TOP_HEADLINES_SOURCES:
            return {
                ...state,
                topHeadlinesSources: action.payload,
            };
        case actionTypes.GET_SOURCE_NEWS:
            return {
                ...state,
                selectedSourceNews: action.payload,
            };
        case actionTypes.CLEAN_UP_SOURCE_NEWS:
            return {
                ...state,
                selectedSourceNews: [],
            };
        default:
            return state;
    }
};

export default news;
