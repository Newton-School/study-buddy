import styled from "styled-components";

export const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 506px;
  height: 550px;
  margin: 24px 0 0 159px;
  padding: 24px 0 0 0px;
  gap: 28px;
  background-color: whitesmoke;

  @media (max-width: 768px) {
    width: 360px;
    margin: 0;
  }
`;
export const StyledMadeP = styled.p`
  font-family: "Mona Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #5b6271;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
    line-height: 19.2px;
  }
`;

export const StyledCollabDiv = styled.div`
  width: 445px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ensures even spacing */
  margin: -20px 0 0 0;

  /* Responsive behavior */
  @media (max-width: 768px) {
    width: 328px;
    justify-content: center;
    gap: 8px; /*  Adds spacing on smaller screens */
    margin: -20px auto;
  }

  & > div:nth-child(1) {
    flex-basis: 226px; /* First section */
    display: flex;
    align-items: center;
    gap: 6px;
  }

  & > div:nth-child(2) {
    flex-basis: auto; /* 'X' in center */
    text-align: center;
  }

  & > div:nth-child(3) {
    flex-basis: 178px; /* Third section */
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: flex-end;
  }
`;

export const StyledIITlogo = styled.div`
  background-color: lightgray;
  width: 32px;
  height: 32px;

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;
export const StyledCollabText = styled.span`
  font-family: "Mona Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28.8px;
  letter-spacing: 0.1px;
  color: #16191d;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const StyledNSTlogo = styled.div`
  background-color: lightgray;
  width: 20px;
  height: 26px;

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const StyledH1 = styled.h1`
  font-family: "Mona Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  color: #000;
  font-size: 40px;
  line-height: 48px;
  span {
    color: #0673f9;
    font-size: 40px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 33.6px;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 28px;
  }
`;

export const StyledBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledShadowBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 7.12px;
  background-color: #005c3d; /* Shadow color */
  transform: rotate(2.45deg); /* Rotate shadow */
  z-index: 0;
`;

export const StyledBox = styled.div`
  border-radius: 7.12px;
  border: 0.89px solid #005c3d;
  padding: 3.02px 6.04px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  gap: 7.56px;
  transform: rotate(-2.45deg);
  background-color: #009965;
  color: white;
  line-height: 140%;
  position: relative;
  z-index: 1;
`;

export const StyledFeatureList = styled.ul`
  list-style-type: none;
  li {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.5px;
    color: #009965;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const StyledCompareDiv = styled.div`
  display: flex;
  align-items: flex-start; /* Aligns text and icon properly */
  gap: 8px; /* Space between icon and text */
  flex-wrap: wrap; /* Allows text to move to the next line when needed */

  @media (max-width: 768px) {
    justify-content: center; /* Centers content on smaller screens */
  }
`;

export const StyledCompareSpan = styled.span`
  font-family: "Mona Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #16191d;
  display: inline-block; /* Ensures proper wrapping */
  max-width: calc(
    100% - 64px
  ); /* Prevents text from overflowing past the container */
  word-break: break-word; /* Breaks words if necessary */

  span {
    color: #0673f9;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const StyledCompareIcon = styled.div`
  height: 24px;
  width: 56px;
  background-color: lightgray;
  flex-shrink: 0; /* Prevents icon from shrinking */

  @media (max-width: 768px) {
    height: 20px;
    width: 48px;
  }
`;
