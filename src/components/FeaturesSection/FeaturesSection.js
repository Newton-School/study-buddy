"use client";
import React from "react";
import {
  StyledSection,
  StyledFeatureCard,
  StyledIcon,
  StyledContent,
  StyledFeatureImage,
  StyledIconContentWrapper,
  StyledSectionFlexWrapper,
  StyledHeadingTextUpper,
  StyledMobileFeatureCard,
  StyledTextOpacity,
  StyledHeading,
  StyledSpannedContent,
  StyledCenteredDiv,
  StyledSpan,
  StyledPageWrapper,
} from "./FeatureSection.Styled";
import { Features } from "./Constants";
import StyledStartSolvingButton from "../HeroSection/HeroLeft/StartSolvingButton/StartSolvingButton";

export const FeaturesSection = () => {
  return (
    <>
      <StyledPageWrapper>
        <StyledSectionFlexWrapper>
          <StyledHeadingTextUpper>
            <StyledTextOpacity>
              WELCOME TO THE OUTCOME POWERHOUSE
            </StyledTextOpacity>
            <StyledHeading>
              WHY CHOOSE{" "}
              <StyledSpannedContent>
                JEE STUDY BUDDY <StyledSpan>?</StyledSpan>
              </StyledSpannedContent>
            </StyledHeading>
          </StyledHeadingTextUpper>
          <StyledSection>
            {Features.map((feature, index) => (
              <StyledFeatureCard key={feature.id} $index={index}>
                <StyledFeatureImage bgImage={feature.BgImage} />
                <StyledIconContentWrapper>
                  <StyledIcon
                    src={feature.icon}
                    alt={feature.title}
                  ></StyledIcon>
                  <StyledContent>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </StyledContent>
                </StyledIconContentWrapper>
              </StyledFeatureCard>
            ))}

            {Features.map((feature, index) => (
              <StyledMobileFeatureCard key={feature.id} $index={index}>
                <StyledFeatureImage bgImage={feature.MobileBgImage} />
                <StyledIconContentWrapper>
                  <StyledIcon
                    src={feature.icon}
                    alt={feature.title}
                  ></StyledIcon>
                  <StyledContent>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </StyledContent>
                </StyledIconContentWrapper>
              </StyledMobileFeatureCard>
            ))}
          </StyledSection>
          <StyledCenteredDiv>
            <StyledStartSolvingButton />
          </StyledCenteredDiv>
        </StyledSectionFlexWrapper>
      </StyledPageWrapper>
    </>
  );
};
