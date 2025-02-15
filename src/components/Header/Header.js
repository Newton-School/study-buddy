import React from "react";
import { HeaderLeft } from "./HeaderLeft";
import {
  StyledHeader,
  StyledSmallSignupButton,
  StyledMediumSignupButton,
} from "./Page.styled";
import { NSButton } from "@newtonschool/grauity";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLeft></HeaderLeft>
      <StyledSmallSignupButton>
        <NSButton size="small">Sign Up</NSButton>
      </StyledSmallSignupButton>
      <StyledMediumSignupButton>
        <NSButton size="medium">Sign Up</NSButton>
      </StyledMediumSignupButton>
    </StyledHeader>
  );
};

export default Header;
