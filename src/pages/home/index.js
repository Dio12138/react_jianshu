import React, {  PureComponent } from 'react';
import { HomeWrapper,HomeLeft,HomeRight,BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends  PureComponent {  // 纯组件：PureComponent内在实现了shouldComponentUpdate函数，提升性能，最好搭配immutable使用
    handleScrollTop() {
      window.scrollTo(0,0);
    }

    render() {
        return(
            <HomeWrapper>
              <HomeLeft>
                <img className="banner-img" src="http://5b0988e595225.cdn.sohucs.com/images/20170901/d69d9058034e4c059e3c6b5576c74322.jpeg" alt=''/>
                <Topic/>
                <List/>
              </HomeLeft>
              <HomeRight>
                <Recommend/>
                <Writer/>
              </HomeRight>
              {/* 回到顶部功能组件 */}
              {this.props.showScroll?<BackTop onClick={this.handleScrollTop}><img src='/icon/back_top.png' alt=''/></BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
      this.props.changeHomeData();
      this.bindEvents();
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
  
    bindEvents() {
      window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
  
  }
  
  const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
  })
  
  const mapDispatch = (dispatch) => ({
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreators.toggleTopShow(true))
      }else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  });
  
  export default connect(mapState, mapDispatch)(Home);