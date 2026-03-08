import About from "./Sections/About";
import Work from "./Sections/Work";
import Services from "./Sections/Services";
import Pricing from "./Sections/Pricing";
import Faqs from "./Sections/Faqs";
import Contact from "./Sections/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <About />    
    <Work/>
    <Services/>
    <Pricing/>
    <Faqs/>
    <Contact/>
    </>
  );
}
