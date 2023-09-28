import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
function Section({title,descripton, leftbtntext, rightbtntext,bagimage}) {
  return (
    <Wrap bgimage={bagimage}>
        <Fade bottom>
       <Itemtext>
        <h1>{title}</h1>
        <p>{descripton}</p>
       </Itemtext>
        </Fade>
       <Buttons>
        <Fade bottom>

       <Buttongroup>
        <Leftbutton>
            {leftbtntext}
        </Leftbutton>
        {rightbtntext && 
        <Rightbutton>
        {rightbtntext}
    </Rightbutton>
    }
       </Buttongroup>
    </Fade>
       <Downarrow src='/images/down-arrow.svg'/>
       </Buttons>
     
        </Wrap>
  )
}

export default Section

const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props =>`url('/images/${props.bgimage}')`};

`
const Itemtext=styled.div`
padding-top:15vh;
text-align:center
`
const Buttongroup=styled.div`
display:flex;
margin-bottom:30px;

@media (max-width:768px){
    flex-direction:column;
}
`
const Leftbutton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:50px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const Rightbutton=styled(Leftbutton)`
background:white;
opacity:0.65;
color:black;
`
const Downarrow=styled.img`
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
position:relative;
left:250px;

@media (max-width:768px){
  left:109px;
    position:relative;
}

`
const Buttons=styled.div`

`
