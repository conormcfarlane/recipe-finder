import React from "react";
import AboutHero from "./AboutHero";
import AboutWhyWeExist from "./AboutWhyWeExist";
import AboutOurFoodPhilosophy from "./AboutOurFoodPhilosophy";
import ReadyToCook from "../../components/ReadyToCook";
import AboutBeyondThePlate from "./AboutBeyondThePlate";
export default function About() {
  return (
    <section>
      <AboutHero />
      <AboutWhyWeExist />
      <AboutOurFoodPhilosophy />
      <AboutBeyondThePlate/>
      <ReadyToCook />
    </section>
  );
}
