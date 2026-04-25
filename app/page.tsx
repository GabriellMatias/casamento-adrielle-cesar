import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import FloralDivider from "./components/FloralDivider";
import Couple from "./components/Couple";
import Ceremony from "./components/Ceremony";
import Reception from "./components/Reception";
import DressCode from "./components/DressCode";
import DrinksMenuSection from "./components/DrinksMenuSection";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Countdown />
        <FloralDivider />
        <Couple />
        <FloralDivider />
        <Ceremony />
        <FloralDivider />
        <Reception />
        <FloralDivider />
        <DressCode />
        <FloralDivider />
        <DrinksMenuSection />
        <FloralDivider />
        <RSVP />
      </main>
      <Footer />
    </>
  );
}
