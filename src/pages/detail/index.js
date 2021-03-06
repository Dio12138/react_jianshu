import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { DetailWrapper,Header,Content } from './style';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
    render() {
        window.scrollTo(0,0);
        console.log(this.props);
        return(
            <DetailWrapper>
              <Header>{this.props.title}</Header>
              {/* 防止content被转移成字符串，显示对应的html效果 */}
              <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content']),
});

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));