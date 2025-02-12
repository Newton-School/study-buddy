import React from "react";
import { HeaderLeft } from "./HeaderLeft";
import { StyledSignUpButton, StyledHeader } from "./Page.styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLeft></HeaderLeft>
      <StyledSignUpButton></StyledSignUpButton>
    </StyledHeader>
  );
};

export default Header;
