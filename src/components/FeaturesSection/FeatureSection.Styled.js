import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledFeatureImage = styled.div`
  width: 36.37vw;
  height: 29vh;
  background-image: url(${(props) => props.desktopBgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.mobileBgImage});
    background-position: center;
  }
`;

export const StyledFeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  font-family: "Mona Sans";
  overflow: hidden;

  @media (min-width: 768px) {
    justify-self: ${(props) => (props.$index % 2 === 0 ? "end" : "start")};
    background: #ffffff;
    padding: 10px 0px 20px 20px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    border: 2px solid #f0f0f0;
    width: 36.37vw;
    height: 28vh;
  }

  @media (max-width: 400px) {
    display: flex;
    border: 1px solid #e1e5ea;
    border-radius: 12px;
    flex-direction: column;
    width: 90vw;
    height: 40vh;
    padding: 1.125rem;
    justify-content: space-between;
  }

  @media (max-width: 768px) and (min-width: 376px) {
    display: flex;
    border: 1px solid #e1e5ea;
    border-radius: 12px;
    flex-direction: column;
    width: 93vw;
    height: 35vh;
    padding: 1.125rem;
    justify-content: space-between;
  }
`;

export const StyledIcon = styled.img`
  width: 3.17vw;
  height: 5.6vh;
  align-self: left;
  @media (max-width: 768px) {
    width: 20%;
    height: 70%;
    margin-bottom: 6%;
  }
`;

export const StyledContent = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    font: Mona Sans;
    line-height: 24px;
    color: #16191d;
    margin-bottom: 6px;
  }
  p {
    margin-top: 6px;
    font-size: 0.875rem;
    color: #5b6271;
    font-weight: 500px;
    line-height: 19.2px;
  }
`;

export const StyledIconContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7vh;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 6px;
    align-items: end;
    height: 70px;
  }
`;

export const StyledTextOpacity = styled.h6`
  color: #8c95a6;
  margin-bottom: 1.2vh;
  font-family: "Mona Sans";
`;

export const StyledHeading = styled.h2`
  color: #16191d;
  line-height: 5.04vh;
  margin-bottom: 2.5vh;
  font-family: "Mona Sans";
  font-size: 2rem;
  @media (max-width: 768px) {
    line-height: 4.04vh;
    font-size: 1.875rem;
  }
`;

export const StyledSpannedContent = styled.span`
  color: #0673f9;
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 2.5vh;
  }
`;

export const StyledSpan = styled.span`
  color: black;
`;

export const StyledPara = styled.div`
  line-height: 3.34vh;
  font-weight: 500;
  margin-bottom: 6vh;
`;
export const StyledHeadingText = styled.h4`
  margin-bottom: 2.55vh;
  font-size: 1.5rem;
  color: #16191d;
`;

export const StyledParaText = styled.p`
  color: #5b6271;
  font-size: 1.125rem;
`;

export const StyledSectionFlexWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`;

export const StyledCenteredDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledHeadingTextUpper = styled.div`
  padding: 2.64vh 12.5vw 0vh 9.4vw;
  margin-left: 3.2vw;
  @media (max-width: 768px) {
    margin-left: 0vw;
    padding: 2.64vh 12.5vw 0vh 5.4vw;
  }
`;

export const StyledTextlower = styled.div`
  padding: 8.64vh 12.5vw 9.29vh 9.4vw;
  margin-left: 3.2vw;
  gap: 5.57vh;
  text-align: left;
  font-family: "Mona Sans";
  @media (max-width: 768px) {
    margin-left: 0vw;
    padding: 6.44vh 12.5vw 0vh 5.4vw;
  }
`;

export const StyledPageWrapper = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
`;
