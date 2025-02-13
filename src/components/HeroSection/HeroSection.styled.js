import styled from "styled-components";
import { Background_Image_Link_Desktop } from "./HeroSection.constants";
import { Background_Image_Link_Mobile } from "./HeroSection.constants";

export const StyledHeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  background-image: url(${Background_Image_Link_Desktop});
  background-size: 103% auto;
  background-position: top center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    background-image: url(${Background_Image_Link_Mobile});
    background-size: cover;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    gap: 5vh;
  }
`;
export default StyledHeroSection;
