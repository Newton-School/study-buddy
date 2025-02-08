import styled from "styled-components";
export const StyledSection1 = styled.section`
  display: grid;
  grid-template-row: repeat(3, 1fr);
  
  gap: 1.85vh ;
  padding: 1.85vh  0.52vw 1.85vh  0.52vw;
  place-items:center;
  justify-content: center;
  align-items: center;
  margin: 0px;
  justify-items: end;
`;
export const StyledSection2 = styled.section`
  display: grid;
  grid-template-row: repeat(3, 1fr);
  
  gap: 1.85vh ;
  padding: 1.85vh  0.52vw 1.85vh 0vw;
  place-items:center;
  justify-content: center;
  align-items: center;
  margin: 0px;
  justify-items: start;
`;

export const StyledSection3 = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1.05vw;
    padding: 1.05vw;
    place-items:center;
    justify-content: center;
    align-items: center;
    margin: 0px;
    space-between: 0px;
    align-items:flex-end;
`;

export const Mobile=styled.section`
display:flex;
flex-direction:column;
gap:2.78vh;
justify-content:center;
padding-top:4.64vh;
align-items:center;
`
export const Textlower=styled.div`
padding:4.64vh 12.5vw 9.29vh 12.5vw;
gap:5.57vh;
text-align:left;
`;
