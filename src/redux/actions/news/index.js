import { API } from '../../../api';
import actionTypes from '../../actionTypes';

export const getTopHeadlines = callback => {
    return async function (dispatch) {
        await API.getTopHeadlines()
            .then(response => {
                callback?.();
                dispatch({
                    type: actionTypes.GET_TOP_HEADLINES,
                    payload: response.articles,
                });
            })
            .catch(err => {
                console.log('failed to getUserData', err);
            });
    };
};
