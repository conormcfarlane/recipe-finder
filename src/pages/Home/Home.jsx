import React from "react";
import HomeHero from "./HomeHero";
import HomeHeroFeatures from "./HomeHeroFeatures";
import HomeRealLife from "./HomeRealLife";
import HomeReadyToCook from "./HomeReadyToCook";
export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeHeroFeatures />
      <HomeRealLife />
      <HomeReadyToCook/>
    </div>
  );
}
