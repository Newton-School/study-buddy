import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNumberIncrementWrapper = styled.div`
  display: flex;
  font-family: var(--font-geist-mono);
  font-size: 48px;
  font-weight: bold;
  color: var(--foreground);
`;

export const StyledDigitColumn = styled.div`
  position: relative;
  width: 1em;
  height: 1.2em;
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
