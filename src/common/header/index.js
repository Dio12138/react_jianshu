import React,{ Component } from "react";
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import { HeaderWrapper,
   Logo,Nav,NavItem,
   NavSearch,Addition,Button,
   SearchWrapper,SearchInfo,
   SearchInfoTittle,SearchInfoSwitch,
   SearchInfoItem,SearchInfoList } from './style';


class Header extends Component {

   getListArea() {
      const { focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
      const newList = list.toJS();
      const pageList = [];

      if (newList.length) {
         if(page !== totalPage){
            for (let i = (page-1)*10; i < page*10; i++) {
               pageList.push(
                  <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
               )
            }
         }else{
            for (let i = (page-1)*10; i < newList.length; i++) {
               pageList.push(
                  <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
               )
            }
         }
         
      }
      
      if (focused || mouseIn) {
         return (
            <SearchInfo
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
                  <SearchInfoTittle>
                     热门搜索
                     <SearchInfoSwitch onClick={() => {handleChangePage(page,totalPage,this.spinIcon)}}>
                        <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe631;</span>  
                        换一批
                     </SearchInfoSwitch>
                  </SearchInfoTittle>
                  <SearchInfoList>
                     {pageList}
                  </SearchInfoList>
                </SearchInfo>
         );
      } else {
         return null;
      }
   }
   
   render() {
      const { focused,handleInputFocus,handleOnBlur,list,login,logout } = this.props;
      return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
           <NavItem className='left active'>首页</NavItem>
           <NavItem className='left'>下载App</NavItem>
           {
              login ? 
            //   React框架的JSX编码格式要求，style必须是一个对象，外部的{ }表示这是JavaScript句法，里面的{ }是一个对象
              <NavItem onClick={logout} className='right' style={{cursor:"pointer"}}>退出</NavItem> : 
              <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
           }
           <NavItem className='right'>
             <span className="iconfont">&#xe636;</span>
           </NavItem>
           <SearchWrapper>
             <CSSTransition         // CSSTransition里只能放一个子组件
               in={focused}
               timeout={200}
               classNames='slide'   // 这里是classNames，不是className
             >
               <NavSearch
                 className={focused ? 'focused':''}
                 onFocus={() => {handleInputFocus(list)}}
                 onBlur={handleOnBlur}
               ></NavSearch>
             </CSSTransition>
             <span className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe601;</span>
            {this.getListArea(focused)}
           </SearchWrapper>
        </Nav>
        <Addition>
           <Link to='/write'>
             <Button className='writting'>
               <span className="iconfont">&#xe600;</span>写文章
             </Button>
           </Link>
           <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper> 
      )
   }
}

const mapStateToProps = (state) => {
   return {
      // 把reducer写到header下后，由于要取到focused多了一层，所以要加一层.header
      // 使用immutable后，就不能用'.focused'调用focused属性，要用'.get('focused')'方法
      // 等价于：focused: state.get('header').get('focused')
      focused: state.getIn(['header','focused']),
      list: state.getIn(['header','list']),
      page: state.getIn(['header','page']),
      totalPage: state.getIn(['header','totalPage']),
      mouseIn: state.getIn(['header','mouseIn']),
      login: state.getIn(['login','login']),
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      handleInputFocus(list){
         if (list.size === 0) {
            dispatch(actionCreators.getList());
         }
         dispatch(actionCreators.searchFocus());
      },

      handleOnBlur(){
         dispatch(actionCreators.searchBlur());
      },

      handleMouseEnter(){
         dispatch(actionCreators.mouseEnter());
      },

      handleMouseLeave(){
         dispatch(actionCreators.mouseLeave());
      },
      handleChangePage(page,totalPage,spin){
         let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
         if (originAngle) {
            originAngle = parseInt(originAngle,10);
         }else {
            originAngle = 0;
         }
         spin.style.transform = 'rotate(' + (originAngle+360)+ 'deg)';
         if (page<totalPage) {
            dispatch(actionCreators.changePage(page+1));
         } else {
            dispatch(actionCreators.changePage(1));
         }
      },
      logout(){
         // 这里要改的是login这块里的数据，所以要用到的是login组件下的actionCreators
         dispatch(loginActionCreators.logout());
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);