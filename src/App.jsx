import Header from "./Components/header"
import Hero from "./Components/hero";
import Footer from "./Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once 
    });
  }, []);
  
  return (
    <main>
  
  {/*Blur effect green   #4b0082*/}
      <div className="h-0 w-[40rem] absolute top-[20%]
      right-[-5%] shadow-[0_0_900px_28px_#4b0082]
      -rotate-[30deg] z-20"> </div>
  
  
      
      <Header/>
      <Hero/>
      <Footer/>

  </main>
  )}
