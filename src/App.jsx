import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Kits from "./components/Kits";
import Birthday from "./components/Birthday";
import Steps from "./components/Steps";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <Kits />
        <Birthday />
        <Steps />
        <Benefits />
        <Pricing />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>{" "}
      <Footer />
    </>
  );
}
