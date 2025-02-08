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
`;
export const StyledMadeP = styled.p`
  font-family: "Mona Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #5b6271;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const StyledCollabDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledIITlogo = styled.div`
  background-color: lightgray;
  width: 32px;
  height: 32px;
`;
export const StyledCollabText = styled.span`
  font-family: "Mona Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28.8px;
  letter-spacing: 0.1px;
  font-variation-settings: "wdth" 100;
  color: #16191d;
  padding: 0 4px 0 4px;
`;
export const StyledNSTlogo = styled.div`
  background-color: lightgray;
  width: 20px;
  height: 26px;
`;
export const StyledH1 = styled.h1`
  font-family: "Mona Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  color: #000;
  span {
    color: #0673f9;
    font-size: 40px;
    line-height: 48px;
    font-weight: 700px;
  }
`;

export const StyledFeatureList = styled.ul`
  list-style-type: none;
  li {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.5px;
    color: #009965;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const StyledCompareDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCompareSpan = styled.span`
  font-family: "Mona Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 160%;
  letter-spacing: 0.1px;

  color: #16191d;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const StyledCompareIcon = styled.div`
  height: 24px;
  width: 56px;
  background-color: lightgray;
`;
