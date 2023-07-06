import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const myDiv = styled.div`
   width:2rem;
   height:2rem;
   position:fixed;
   top:40px ;
   right:30px ;
   display:none;
   curser:pointer;
   z-index:50;
   @media (max-width: 768) {
      diplay:flex;
      justify-content:space-around;
      flex-direction:column;  
   }
   div{
     width:2rem;
     height:0.25rem;
     background:blue;
     border-radius:10px;
     transform-origin:1px;
     transition:all 0.3s linear;
     &:nth-child(1) {
        transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
     }
     &:nth-child(2) {
        transform: ${(props) =>
          props.open ? "translate(-100%)" : "translate(0)"};
        opacity: ${(props) => (props.open ? 0 : 1)};
     }
     &:nth-child(3) {
        transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
     } 
   } 
`;
function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <>
    <myDiv open={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div></div>
      <div></div>
      <div></div>
    </myDiv>
    <Navbar open={isOpen}/>
   </>
  );
}

export default Burger;
