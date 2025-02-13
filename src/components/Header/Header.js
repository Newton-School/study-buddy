import React from "react";
import { HeaderLeft } from "./HeaderLeft";
import { StyledHeader } from "./Page.styled";
import { NSButton } from "@newtonschool/grauity";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLeft></HeaderLeft>
      <NSButton>Sign Up</NSButton>
    </StyledHeader>
  );
};

export default Header;
