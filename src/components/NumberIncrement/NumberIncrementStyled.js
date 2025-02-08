import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNumberIncrementWrapper = styled.div`
  display: flex;
  font-family: var(--font-Mona-Sans);
  font-size: 42px;
  font-weight: bold;
  display: inline-flex;
`;

export const StyledDigitColumn = styled.div`
  position: relative;
  width: 0.65em;
  height: 0.8em;
  overflow: hidden;
`;

export const StyledDigit = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  will-change: transform;
  //   hints to browsers how an element is expected to change
`;
