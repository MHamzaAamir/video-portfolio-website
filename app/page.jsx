import Image from "next/image";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Faqs from "./Pages/Faqs";
import Contact from "./Pages/Contact";

export default function Home() {
  return (
    <>
    <About />    
    <Work/>
    <Services/>
    <Pricing/>
    <Faqs/>
    <Contact/>
    </>
  );
}
