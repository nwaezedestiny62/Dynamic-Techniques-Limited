import Navbar from "./Section/Navbar"
import Hero from "./Section/Hero";
import About from "./Section/About";
import WhyChooseUs from "./Section/WhyChooseUs";
import "swiper/css"
import Services from "./Section/Services";
import Portfolio from "./Section/Portfolio";
import Team from "./Section/Team";
import Testimonial from "./Section/Testimonial";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";
import Gallery from "./Section/Gallery";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <Portfolio />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
