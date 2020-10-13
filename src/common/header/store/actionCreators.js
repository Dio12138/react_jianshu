import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    // 将从json文件中获得的data普通数组转换成immutable类型的json数组
    // 这样才能写到reducer中的immutable类型的state里的list数组
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}