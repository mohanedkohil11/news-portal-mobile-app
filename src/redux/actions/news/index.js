import { API } from '../../../api';
import actionTypes from '../../actionTypes';

export const getTopHeadlines = (filters, callback) => {
    return async function (dispatch) {
        await API.getTopHeadlines(filters)
            .then(response => {
                callback?.();
                dispatch({
                    type: actionTypes.GET_TOP_HEADLINES,
                    payload: response.articles,
                });
            })
            .catch(err => {
                console.log('failed to get news', err);
            });
    };
};

export const setFilters = filters => {
    return {
        type: actionTypes.SET_FILTERS,
        payload: filters,
    };
};
