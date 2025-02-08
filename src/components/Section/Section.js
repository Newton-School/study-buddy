"use client";
import React from "react";
import { StyledSection1, StyledSection3 } from "./Section.styled";
import { StyledSection2 } from "./Section.styled";
import { Img1 } from "./Images/Img1.js";
import { Img2 } from "./Images/Img2.js";
import { Img3 } from "./Images/Img3.js";
import { Img4 } from "./Images/Img4.js";
import { Upper } from "./Images/Upper";
import "./Style.css";
import { MyComponent } from "./Startsolvingbutton";
import { Formobile } from "./Formobile";
import Lowertext from "./Lowertext";
export const Section = () => {
  return (
    <>
      <div className="desktop-logo">
        <StyledSection3>
          <StyledSection1>
            <Upper></Upper>
            <Img1></Img1>
            <Img3></Img3>
          </StyledSection1>
          <StyledSection2>
            <Img2></Img2>
            <Img4></Img4>
          </StyledSection2>
        </StyledSection3>

        <MyComponent></MyComponent>
      </div>

      <div className="mobile-logo">
        <Formobile></Formobile>
      </div>

      <Lowertext></Lowertext>
    </>
  );
};

export default Section;
