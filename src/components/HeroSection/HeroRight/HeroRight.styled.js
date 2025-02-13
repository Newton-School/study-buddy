import styled from "styled-components";
export const StyledHeroRight = styled.div`
  background-color: rgba(107, 102, 105, 0.21);
  width: 35%;
  height: 53.47vh;
  min-width: 300px;
  border-radius: 1.25vw;
  border: 0.07vw solid black;
  margin: -30vh 0 0 0;

  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    margin-bottom: 20vh;
    margin-top: 0;
  }
`;
