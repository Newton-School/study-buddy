"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import styled from "styled-components";

const NumberIncrementWrapper = styled.div`
  display: flex;
  font-family: var(--font-geist-mono);
  font-size: 48px;
  font-weight: bold;
  color: var(--foreground);
`;

const DigitColumn = styled.div`
  position: relative;
  width: 1em;
  height: 1.2em;
  overflow: hidden;
`;

const Digit = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  will-change: transform;
//   hints to browsers how an element is expected to change
`;

export const NumberIncrement=({targetNumber=50000,duration=5}) => {
  const [progress,setProgress]=useState(0);
  const animationRef=useRef();
  const startTimeRef=useRef();
  useEffect(()=>{
    startTimeRef.current=performance.now();
    const animate = (currentTime) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const elapsedTime=currentTime-startTimeRef.current;
      const newProgress=Math.min(elapsedTime / (duration*1000),1);
      const eased =newProgress===1?1:1-Math.pow(1-newProgress,2);
      setProgress(eased);

      if (newProgress<1){
        animationRef.current=requestAnimationFrame(animate);
      }
    };
    animationRef.current=requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setProgress(0);
    };
  }, [targetNumber,duration]);

  const currentNumber=Math.floor(progress*targetNumber);
  const displayNumber=currentNumber.toString().padStart(5,"0");

  return (
    <NumberIncrementWrapper>
      {displayNumber.split("").map((digit,index) => {
        const position=4-index;
        const multiplier=Math.pow(10, position);
        const value=(currentNumber/multiplier)%10;
        
        return (
          <DigitColumn key={index}>
            <Digit
              initial={false}
              style={{
                y: `${-value*100}%`,
                transition: `transform 0.05s cubic-bezier(0.2, 0, 0, 1)`
              }}>
              {[...Array(10).keys()].map((num) => (
                <div 
                  key={num} 
                  style={{ 
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translateZ(0)"
                  }}>
                  {num}
                </div>
              ))}
            </Digit>
          </DigitColumn>
        );
      })}
    </NumberIncrementWrapper>
  );
};
export default NumberIncrement;