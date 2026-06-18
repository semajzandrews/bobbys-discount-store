import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Directory from "./components/Directory";
import Why from "./components/Why";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import CallPill from "./components/CallPill";

export default function Home() {
  return (
    <>
      <Reveal />
      <Nav />
      <CallPill />
      <main className="lg:pl-[clamp(220px,17vw,288px)]">
        <Hero />
        <Marquee />
        <Directory />
        <Why />
        <Gallery />
        <Visit />
        <Footer />
      </main>
    </>
  );
}
