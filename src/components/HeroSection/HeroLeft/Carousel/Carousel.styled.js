import styled from "styled-components";

export const StyledCarouselContainer = styled.div`
  width: 100%;
  max-width: 424px;
  overflow: hidden;
  position: relative;
  margin: -10px 0 0 0;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

export const StyledSlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const StyledSlide = styled.div`
  min-width: 100%;
  max-width: 424px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 320px;
    background-color: #edeff3;
  }
`;

export const StyledSlideText = styled.span`
  color: black;
  font-family: "Mona Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 1vh;
  text-align: center;
  font-style: italic;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const StyledDotsContainer = styled.div`
  text-align: center;
  margin-top: 5px;
`;

export const StyledDot = styled.span`
  height: 6px;
  width: 6px;
  margin: 0 5px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "black" : "white")};

  @media (max-width: 768px) {
    background-color: ${({ active }) => (active ? "black" : "#edeff3")};
  }
`;
