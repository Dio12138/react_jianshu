import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const changeHomeDate = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList,
    totalWritePage: Math.ceil(result.writerList.length/4)
});

const addHomeList = (list,nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeDate(result);
            dispatch(action);
        })
    }
};

export const getMoreList = (page) => {
    return(dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result,page + 1));
        })
    }
};

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
});

export const changePage = (writePage) => ({
    type: constants.CHANGE_PAGE,
    writePage
});