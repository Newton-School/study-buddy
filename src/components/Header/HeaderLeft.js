import {
  StyledLeftDiv,
  StyledMiddleLine,
  StyledNewtonLogo,
  StyledNewtonLogoMobile,
} from "./Page.styled";

export const HeaderLeft = () => {
  return (
    <>
      <StyledLeftDiv>
        <StyledNewtonLogo></StyledNewtonLogo>
        <StyledNewtonLogoMobile></StyledNewtonLogoMobile>
        <StyledMiddleLine></StyledMiddleLine>
        <h2>JEE Study Buddy</h2>
      </StyledLeftDiv>
    </>
  );
};
