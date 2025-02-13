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
} from "./FeatureSection.Styled";
import { DesktopFeatures, MobileFeatures } from "./Constants";
import { NSButton } from "@newtonschool/grauity";

export const FeaturesSection = () => {
  return (
    <>
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
          {DesktopFeatures.map((feature, index) => (
            <StyledFeatureCard key={feature.id} $index={index}>
              <StyledIconContentWrapper>
                <StyledIcon src={feature.icon} alt={feature.title}></StyledIcon>
                <StyledContent>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </StyledContent>
              </StyledIconContentWrapper>
              <StyledFeatureImage bgImage={feature.bgImage} />
            </StyledFeatureCard>
          ))}

          {MobileFeatures.map((feature, index) => (
            <StyledMobileFeatureCard key={feature.id} $index={index}>
              <StyledFeatureImage bgImage={feature.bgImage} />
              <StyledIconContentWrapper>
                <StyledIcon src={feature.icon} alt={feature.title}></StyledIcon>
                <StyledContent>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </StyledContent>
              </StyledIconContentWrapper>
            </StyledMobileFeatureCard>
          ))}
        </StyledSection>
        <StyledCenteredDiv>
          <NSButton size="extra-large">Start Solving PYQs</NSButton>
        </StyledCenteredDiv>
      </StyledSectionFlexWrapper>
    </>
  );
};
