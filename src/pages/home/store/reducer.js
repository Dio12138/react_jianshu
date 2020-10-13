import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false,
    writePage: 1,
    totalWritePage: 1
});


export default (state = defaultState,action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList),
            writerList: fromJS(action.writerList),
            totalWritePage: fromJS(action.totalWritePage),
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
        case constants.CHANGE_PAGE:
            return state.set('writePage',action.writePage);
        default:
            return state;
    }
}