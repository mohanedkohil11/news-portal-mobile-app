import { Alert } from 'react-native';
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
            .catch(() => {
                Alert.alert('Something went wrong!');
            });
    };
};

export const setFilters = filters => {
    return {
        type: actionTypes.SET_FILTERS,
        payload: filters,
    };
};

export const getTopHeadlinesSources = callback => {
    return async function (dispatch) {
        await API.getTopHeadlineSources()
            .then(response => {
                callback?.();
                dispatch({
                    type: actionTypes.GET_TOP_HEADLINES_SOURCES,
                    payload: response.sources,
                });
            })
            .catch(() => {
                Alert.alert('Something went wrong!');
            });
    };
};

export const getSourceNews = (sourceId, callback) => {
    return async function (dispatch) {
        await API.getSourceNews(sourceId)
            .then(response => {
                callback?.();
                dispatch({
                    type: actionTypes.GET_SOURCE_NEWS,
                    payload: response.articles,
                });
            })
            .catch(() => {
                Alert.alert('Something went wrong!');
            });
    };
};

export const cleanUpSourceNews = () => {
    return {
        type: actionTypes.CLEAN_UP_SOURCE_NEWS,
    };
};
