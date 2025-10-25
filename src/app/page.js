import AboutUs from "./components/AboutUs";
import CardTypes from "./components/CardTypes";
import Footer from "./components/Footer";
import Herosection from "./components/HeroSection";
import MissionVision from "./components/MissionVision";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-sky-100 ">
      <Navbar />
      <Herosection />
      <CardTypes />
      <MissionVision />
      <AboutUs />
      <Testimonials />
      <Footer />


    </div>
  );
}