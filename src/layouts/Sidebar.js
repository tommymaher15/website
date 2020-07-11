import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";
import { FaGithubSquare, FaLinkedin,FaTwitterSquare } from 'react-icons/fa';


const Sidebar1 = styled.aside`
     background-color:${theme.colors.navy};
    grid-area: sidebar;

@media (max-width: 768px) {
  display:none;
}

`;




const StickyTesting = styled.div`
 position: fixed;
  bottom: 0;
  left: 0;

 
`;

const SocialList = styled.ul`

transform: rotate(360deg);

padding-right:1em;
list-style-type:none;

::after
{
content: "";
display: block;
width: 1px;
height: 10vh;
margin: 0px auto;
background-color: rgb(168, 178, 209);

}
`;


const SocialListItem = styled.li`
font-size:24px;
padding:30px;
color: ${theme.colors.vLightSlate};
cursor: pointer;
&:hover{
  color:${theme.colors.green};
  transform: scale(1.150);
};




`;

const A = styled.a`
text-decoration:none;
`;

export default function Sidebar() {
    return (
 
        <Sidebar1> 
       
        
        <StickyTesting>
        <SocialList> 
        <SocialListItem><A href="https://github.com/tommymaher15"><FaGithubSquare /></A></SocialListItem>
        <SocialListItem><A href=" https://www.linkedin.com/in/tommymaher10/"><FaLinkedin /></A></SocialListItem>
        <SocialListItem><FaTwitterSquare /></SocialListItem>
       
        </SocialList>

   
        </StickyTesting>
        
        
        </Sidebar1>
      
    )
}

