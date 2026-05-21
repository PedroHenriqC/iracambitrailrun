import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import OfficialVideo from "./sections/OfficialVideo";
import Countdown from "./components/Countdown";
import About from "./sections/About";
import Impact from "./sections/Impact";
import History from "./sections/History";
import Gallery from "./sections/Gallery";
import QuoteSection from "./sections/QuoteSection";
import RaceInfo from "./sections/RaceInfo";
import Registration from "./sections/Registration";
import Sponsors from "./sections/Sponsors";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="min-h-screen" style={{ background: "#0a2a0a" }}>
      <Header />
      <main>
        <Hero />
        <OfficialVideo />
        <Countdown />
        <About />
        <Impact />
        <History />
        <Gallery />
        <QuoteSection />
        <RaceInfo />
        <Registration />
        <Sponsors />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
