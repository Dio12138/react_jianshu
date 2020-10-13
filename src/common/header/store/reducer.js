import * as constants from './constants';
import { fromJS } from 'immutable';

// immutable库
// immutable对象

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState,action) => {
    // 用switch改写if语句
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
            // return直接出去了，不会再执行下面的语句，所以不写break也没事
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            // 等价于.set().set()...
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
    // if (action.type === constants.SEARCH_FOCUS) {
    //     // immutable对象的set方法，会结合之前immutable对象的值
    //     // 和设置的值，返回一个全新的对象
    //     return state.set('focused',true);
    // }
    // if (action.type === constants.SEARCH_BLUR) {
    //     return state.set('focused',false);
    // }
    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set('list',action.data);
    // }
    // return state;
}
// 将header部分对应的reducer拆分出来写在header目录下的store里