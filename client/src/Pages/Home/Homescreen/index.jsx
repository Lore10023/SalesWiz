import HeroSection from "../HeroSection";
import Features from "../Features";
import Solutions from "../Solution";
import ContactForm from "../Contact";
import About from "../About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Home (){
  return (
    //react fragments (we do not put anything in here so that we avoid having just empty divs taking up space in our code
    <>
      <div id="herosection">
        <HeroSection />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="solution">
        <Solutions />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
}