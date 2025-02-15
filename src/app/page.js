"use client";

import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Header from "@/components/Header/Header";
import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import Lowertext from "@/components/FeaturesSection/Lowertext";

const Page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Lowertext />
    </>
  );
};

export default Page;
