import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { FaGithubSquare,FaExternalLinkSquareAlt  } from 'react-icons/fa';
//import Image from "./test.jpg";



/*
Update for tomorrow. 

CSS GRID.

Figure out two grid layouts and then implement them both to work at different screensizes.
Refer back to the grid layout for the Overall shape to view the media queries. 
Understand how the grid works, and Implement this within the 12 col. grid. 

01.06.20

-Tommy 


*/


const Div = styled.section`

background-color:${theme.colors.navy};
block-size:100%;

`;
/*OverArching Grid Container. */
const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style: none;
  margin: 0 20px;

`;

const Card = styled.div`
 display: flex;
flex-direction: column;
background-color:${theme.colors.Navy};

box-shadow: -5px 4px 5px 0px rgba(0, 0, 0, 0.3);
width: 100%;

@media (min-width: 768px) {
  
  padding: 20px;
width:60%;
margin-left:8em;
};

`;

const SkillList = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
align-content:flex-end;`;

const SkillListItem = styled.li`
padding-left:1em;
font-size: 13px;
color: ${theme.colors.vLightSlate};
margin-right: 20px;
margin-bottom: 7px;
white-space: nowrap;
;`;


const Heading1 = styled.h4`font-size: 13px;
font-weight: normal;
color: ${theme.colors.green};
font-family: "SF Mono";
font-weight:400;
margin-top: 10px;
padding-top: 0px;`;

const Heading2= styled.h5`
font-size: 28px;
margin: 0px 0px 20px;
color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight:600;
`;

const Paragraph = styled.div`padding: 25px;
color: rgb(168, 178, 209);
font-size: 18px;
border-radius: 3px;
box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
background-color: ${theme.colors.lightNavy};
width:65%;
align-content:center;
justify-content:center;


@media (min-width: 768px){
  
  width:33%;};

`;

const HeadingTitle = styled.h3`
::before{
    counter-increment: section 2;
    content: "0" counter(section) ".";
    margin-right: 10px;
    font-family: "SF Mono";
    font-weight: 400;
    color:${theme.colors.green};
    font-size: 20px;
    position: relative;
    padding-left:2em;
    };

   
    @media (min-width: 768px) {
      ::after
    {
    content: "";
    display: block;
    height: 1px;
    width: 300px;
    background-color:#303c55;
    position: relative;
    top: -15px;
    margin-left: 13.5em;}
    };


    
    padding-left:-1em;
    font-size:22px;
    font-weight: 600;
    color: ${theme.colors.vLightSlate};

    @media (min-width: 768px) {font-size:30px;
    font-weight: 600;
    };
`;

const HeadingContainer = styled.div`

display:flex;
justify-content:center;


`;

const SocialList = styled.ul`
display: flex;
flex-wrap: nowrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
justify-content:flex-end;
align-content:flex-end;
top: -8rem;`;

const SocialListItem = styled.li`
padding-left:1em;
font-size: 24px;
color: ${theme.colors.vLightSlate};
margin-right: 1em;
position:relative;
top:-2.5em;
white-space: nowrap;
&:hover{
  color:${theme.colors.green};
  transform: scale(1.150);
};
`;

export default class MyWork extends Component {
    render() {
        return (
           <Div>
             <HeadingContainer>
           <HeadingTitle><a href name = "work">Some Things I've Built</a></HeadingTitle>
           </HeadingContainer>
              <GridContainer>
              <Card>
        
          <Heading1>Featured Project</Heading1>
          <Heading2>Project Name</Heading2>


 <Paragraph>
 <p>udantium, tota voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit ame</p>

 </Paragraph>

          <SkillList>
          
              <SkillListItem>React</SkillListItem>
              <SkillListItem>HTML & CSS</SkillListItem>
              <SkillListItem>Coffee</SkillListItem>
              
         </SkillList>


        <SocialList>
        <SocialListItem>
        <FaGithubSquare></FaGithubSquare>
        </SocialListItem>

        <SocialListItem>
<FaExternalLinkSquareAlt ></FaExternalLinkSquareAlt>
        </SocialListItem>
       
        </SocialList>
      

      
      </Card>



   
           </GridContainer>
           </Div>
        )
    }
}
