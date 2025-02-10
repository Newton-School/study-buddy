import styled from "styled-components";
import { StyledHeroText } from "./DivL/DivL.styled";
export const StyledHeroSection = styled.div`
  /* background-image: ${({ Background }) => Background}; */

  background-color: #e8e8e8;
  width: 100%;
  height: 573.88px;
  margin: 56px 0 0 0;

  @media (max-width: 768px) {
    width: 360px;
    height: 930px;
  }
`;
export default StyledHeroSection;
