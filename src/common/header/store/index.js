import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

export { reducer,actionCreators,constants };
// 是header目录下store的出口文件，store里的所有文件的数据都可以通过它导出，方便外部的文件调用store里的文件数据