import React, { PureComponent } from 'react';
import { WriterWrapper,WriterTitle,WriterSwitch,WriterList,WriterAll,WriterInfo } from '../style';
import {connect} from 'react-redux';
import { actionCreators } from '../store';

class Writer extends PureComponent {
    render() {
      const {list,writePage,totalWritePage,handleChangeWriter } = this.props;
      const newList = list.toJS();
      const pageList = [];

      if (newList.length) {
        if(writePage !== totalWritePage){
          for (let i = (writePage-1)*4; i < writePage*4; i++) {
            pageList.push(newList[i]);
          }
        }else{
          for (let i = (writePage-1)*4; i < newList.length; i++) {
            pageList.push(newList[i]);
          }
        }
      }
      console.log(list);
      console.log(pageList);
        return(
          <WriterWrapper>
            <WriterTitle>
              推荐作者
              <WriterSwitch onClick={() => {handleChangeWriter(writePage,totalWritePage,this.spinIcon)}}>
                 <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe631;</span>  
                 换一批
              </WriterSwitch>
            </WriterTitle>
            <div>
            {
              pageList.map((item) => {
                return (
                <WriterList key={item.id}>
                  <img className='pic' src={item.imgUrl} alt=''/>
                  <WriterInfo>
                    <h3 className='nickname'>{item.nickname}</h3>
                    <p className='desc'>{item.desc}</p>
                  </WriterInfo>
                </WriterList>
                );
              })
            }
            </div>
            <WriterAll>
              查看全部 &gt;
            </WriterAll>
          </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','writerList']),
    writePage: state.getIn(['home','writePage']),
    totalWritePage: state.getIn(['home','totalWritePage'])
});

const mapDispatch = (dispatch) => ({
  handleChangeWriter(writePage,totalWritePage,spin){
    let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
    // console.log(originAngle);
    if (originAngle) {
       originAngle = parseInt(originAngle,10);
    }else {
       originAngle = 0;
    }
    spin.style.transform = 'rotate(' + (originAngle+360)+ 'deg)';
    if (writePage<totalWritePage) {
       dispatch(actionCreators.changePage(writePage+1));
    } else {
       dispatch(actionCreators.changePage(1));
    }
  }
})

export default connect(mapState,mapDispatch)(Writer);