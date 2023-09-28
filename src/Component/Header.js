import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false);
  return (
    <Container>
        <a href='www.wwere.com'>
            <img src='/images/logo.svg' alt='404'/>
        </a>
        <Menu>
        <a href="www.wwere.com">Model S</a>
        <a href="www.wwere.com">Model 3</a>
        <a href="www.wwere.com">Model X</a>
        <a href="www.wwere.com">Model Y</a>
        </Menu>
        <RightMenu>
            <a href="www.wwere.com">Shop</a>
            <a href="www.wwere.com">Tesla Account</a>
            <Customenu
            onClick={()=>setBurgerStatus(true)}
            />
        </RightMenu>
        <Burgernav show={burgerStatus}>
            <Closewrapper>
            <Customclose onClick={()=>setBurgerStatus(false)}/>
            </Closewrapper>
            <li><a href="www.wwere.com">Existing Inventory</a></li>
            <li><a href="www.wwere.com">Used Inventory</a></li>
            <li><a href="www.wwere.com">Trade-in</a></li>
            <li><a href="www.wwere.com">Cyber Truck</a></li>
            <li><a href="www.wwere.com">Roadster</a></li>
            <li><a href="www.wwere.com">Semi</a></li>
            <li><a href="www.wwere.com">Charging</a></li>
            <li><a href="www.wwere.com">PowerWall</a></li>
            <li><a href="www.wwere.com">Utilities</a></li>
            <li><a href="www.wwere.com">Test Drive</a></li>
        </Burgernav>
        
    </Container>
  )
}

export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
justify-content:space-between;
z-index:1;
`
const Menu=styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
 a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
 }
 @media(max-width:768px){
    display:none;
 }
 a:hover{
    border-bottom:1px solid white;
 }

`
const RightMenu=styled.div`
display:flex;
align-items:center;


a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
    
}
`
const Customenu=styled(MenuIcon)`
cursor:pointer;
`
const Burgernav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
 transform:${props=> props.show ?'translatex(0)':'translatex(100%)'};
 transition:transform 0.2s ease-in;
li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0, .2);

    a{
        font-weight:600;
    }
}

`
const Customclose=styled(CloseIcon)`
cursor:pointer;
`
const Closewrapper=styled.div`
display:flex;
justify-content:flex-end;

`