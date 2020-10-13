import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-lfet: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 20px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${((props) => props.imgUrl)});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    height:300px;
`;

export const WriterTitle = styled.div`
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const WriterSwitch = styled.span`
    float: right;
    font-size: 14px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 14px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const WriterList = styled.div`
    width: 280px;
    height: 48px;
    overflow: hidden;
    margin-top: 15px;
    .pic {
        display: block;
        width: 48px;
        height: 48px;
        float: left;
        border-radius: 24px;
        margin-right: 10px;
    }
`;

export const WriterInfo = styled.span`
    width: 200px;
    .nickname {
        line-height: 20px;
        padding-top: 8px;
        font-size: 14px;
        color: #333;
    }
    .desc {
        line-height: 20px;
        margin-top: 2px;
        margin-bottom: 10px;
        font-size: 13px;
        color: #999;
    }
`;

export const WriterAll = styled.div`
    width: 280px;
    height: 34px;
    line-height: 34px;
    background-color: #f7f7f7;
    font-size: 14px;
    color: #787878;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 40px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    line-height: 60px;
    border: 1px solid #dcdcdc;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
`;