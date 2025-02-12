"use client";
import React from "react";
import Header from "@/components/Header/Header";
import { FeaturesSection } from "@/components/Section/FeaturesSection";
import Lowertext from "@/components/Section/Lowertext";

const page = () => {
  return (
    <>
      <Header />
      <FeaturesSection />
      <Lowertext></Lowertext>
    </>
  );
};

export default page;
