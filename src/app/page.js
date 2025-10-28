import AboutUs from "./components/AboutUs";
import CardTypes from "./components/CardTypes";
import Footer from "./components/Footer";
import Herosection from "./components/HeroSection";
import MissionVision from "./components/MissionVision";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-s">

      <Navbar />

      <div id="Home">
        <Herosection />
      </div>

      <div id="courses">
        <CardTypes />
      </div>

      <div id="MissionVision">
        <MissionVision />
      </div>

      <div id="AboutUs">
        <AboutUs />
      </div>

      <div>
        <Testimonials />
      </div>

      <Footer />

    </div>
  );
}
