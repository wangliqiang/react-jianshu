import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div `
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
  href: "/"
})
`   
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div `
    width: 1600px;
    height: 100%;
    margin: 0 auto;
    box-sizing:border-box;
    padding-right: 100px;
`;
export const NavItem = styled.div `
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color: #333;
    &.left{
        float:left;
    }
    &.right{
        float:right; 
        color:#969696;
    }
    &.active {
        color: #ea6f5a;
    }  
`;

export const SearchWrapper = styled.div `
    position: relative;
    float: left;
    .icon-magnifier {
        position:absolute;
        right: 5px;
        bottom:5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #999;
            color:#fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})
`
      width: 120px;
      height: 38px;
      margin-top:9px;
      margin-left: 20px;
      padding: 0 30px 0 20px;
      box-sizeing: border-box;
      border: none;
      outline: none;
      border-radius: 19px;
      background:#eee;
      font-size: 14px;
      color: #666;
      &::placeholder{
        color:#999；
      }
      &.focused{
        width: 200px;
      }
      &.slide-enter{
        transition: all .3s ease-out;
       }
      &.slide-enter-active{
            width:200px;
       }
      &.slide-exit{
        transition: all .3s ease-out;
       }
      &.slide-exit-active{
            width:120px;
       }
`;
export const Addtion = styled.div `
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div `
   float: right;
   line-height: 38px;
   border-radius: 19px;
   margin-top: 9px;
   margin-right: 15px;
   padding: 0 30px;
   border: 1px solid #ec6149;
   font-size:14px;
   &.reg{
        color: #ec6149;
   }
   &.writting{
        color:#fff;
        background:#ec6149;
   }
`;