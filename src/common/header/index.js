import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addtion,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from "./style";

class Header extends Component {
    getListArea() {
        const {focused, list, page} = this.props;
        const newList = list.toJS();
        const pageList = [];

       if(newList.length !== 0){
           for (let i = (page - 1) * 10; i < page * 10; i++) {
               pageList.push(
                   <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
               );
           }
       }

        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            <i className="iconfont icon-shuaxin"></i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
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
        const {focused} = this.props;
        const {handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont icon-Aa"></i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : ''}
                                       onFocus={handleInputFocus}
                                       onBlur={handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont icon-magnifier' : 'iconfont icon-magnifier'}></i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addtion>
                    <Button className='writting'>
                        <i className="iconfont icon-weibiaoti1"></i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addtion>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getSearchList())
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);