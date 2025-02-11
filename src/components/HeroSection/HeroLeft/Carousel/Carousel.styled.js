import styled from "styled-components";

export const StyledCarouselContainer = styled.div`
  width: 100%; /* Makes it fully responsive */
  max-width: 424px; /* Keeps a max width */
  overflow: hidden;
  position: relative;
  margin: -10px 0 0 0; /* Centers it horizontally */

  @media (max-width: 768px) {
    max-width: 90%; /* Adjusts width dynamically */
    margin: 0 auto; /* Ensures centering */
  }
`;

export const StyledSlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const StyledSlide = styled.div`
  min-width: 100%; /* Takes full width of container */
  max-width: 424px; /* Restricts it to a max width */
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
    min-width: 100%; /* Allows the slide to be fluid */
    max-width: 320px; /* Maintains a max size */
    background-color: #edeff3;
  }
`;

export const StyledSlideText = styled.span`
  color: black;
  font-family: "Mona Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  font-style: italic;
  word-wrap: break-word; /* Ensures text wraps */
  overflow-wrap: break-word; /* Extra safety */
`;

export const StyledDotsContainer = styled.div`
  text-align: center;
  margin-top: 5px; /* Adds slight spacing */
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
