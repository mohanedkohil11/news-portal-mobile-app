import actionTypes from '../../actionTypes';

const initialState = {};
const news = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TOP_HEADLINES:
            return {
                ...state,
                topHeadlines: action.payload,
            };
        default:
            return state;
    }
};

export default news;
