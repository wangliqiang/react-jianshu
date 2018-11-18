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
    SearchWrapper
} from "./style";

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch className={props.focused ? 'focused' : ''}
                                   onFocus={props.handleInputFocus}
                                   onBlur={props.handleInputBlur}></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont icon-magnifier' : 'iconfont icon-magnifier'}></i>
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

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);