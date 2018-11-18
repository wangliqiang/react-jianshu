import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});
export const getSearchList = () => {
    return (dispatch) => {
        axios.get('api/getSearchList.json')
            .then((res) => {
                let data = res.data;
                dispatch(changeList(data.data));
            }).catch((error) => {
            console.log(error);
        })
    }
}