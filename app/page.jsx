export const dynamic = "force-dynamic";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Faqs from "./Pages/Faqs";
import Contact from "./Pages/Contact";
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
