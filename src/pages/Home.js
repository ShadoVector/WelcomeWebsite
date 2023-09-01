import React from "react";
import Faqs from "../components/Home/Faqs";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";
import Overview from "../components/Home/Overview";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Features />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
