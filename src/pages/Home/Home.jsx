import React from "react";
import HomeHero from "./HomeHero";
import HomeHeroFeatures from "./HomeHeroFeatures";
import HomeRealLife from "./HomeRealLife";
import ReadyToCook from "../../components/ReadyToCook";
export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeHeroFeatures />
      <HomeRealLife />
      <ReadyToCook />
    </div>
  );
}
