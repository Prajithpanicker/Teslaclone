import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
     <Section 
     title='Model S'
     descripton="Order Online for Touchless Delivery"
     bagimage='model-s.jpg'
     leftbtntext='Custom Order'
     rightbtntext='Existing inventory'
     />
     <Section 
     title='Model Y'
     descripton="Order Online for Touchless Delivery"
     bagimage='model-y.jpg'
     leftbtntext='Custom Order'
     rightbtntext='Existing inventory'
     />
   
     <Section 
     title='Model 3'
     descripton="Order Online for Touchless Delivery"
     bagimage='model-3.jpg'
     leftbtntext='Custom Order'
     rightbtntext='Existing inventory'
     />
     <Section 
     title='Model X'
     descripton="Order Online for Touchless Delivery"
     bagimage='model-x.jpg'
     leftbtntext='Custom Order'
     rightbtntext='Existing inventory'
     />
     <Section 
     title='Lowest Cost Solar Panels'
     descripton="Money-back gaurantee"
     bagimage='solar-panel.jpg'
     leftbtntext='Order now'
     rightbtntext='Learn more'
     />
     <Section 
     title='Solar for New Roofs'
     descripton="Solar Roof Costs Less Than  a New Roof Plus Solar Panels"
     bagimage='solar-roof.jpg'
     leftbtntext='Order now'
     rightbtntext='Learn more'
     />
     <Section 
     title='Accessories'
     descripton=""
     bagimage='accessories.jpg'
     leftbtntext='Shop now'
    
     />
   
    </Container>   
  )
}



export default Home

const Container=styled.div`
height:100vh;

`