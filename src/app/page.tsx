import Image from "next/image";
import Hero from "./components/Hero";
import InfoDetails from "./components/InfoDetails";
import Courses from "./components/Courses";
import About from "./components/About";
import Categories from "./components/Categories";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
     
        <Hero/>
        <InfoDetails/>
        <Courses/>
        <About/>
        <Categories/>
        <Subscribe/>
        <Footer/>
     
   
    </div>
    
  );
}
