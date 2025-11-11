import Header from "./Components/header"
import Hero from "./Components/hero";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <main>
    
    {/*Gradient image */}
    <img className="absolute top-0 right-0 opacity-60 -z-1" src="/public/gradient.png"
    alt=""/>


{/*Blur effect green   #2cff05*/}
    <div className="h-0 w-[40rem] absolute top-[20%]
    right-[-5%] shadow-[0_0_900px_28px_#2cff05]
    -rotate-[30deg] -z-10"> </div>


    
    <Header/>
    <Hero/>
    <Footer/>





    </main>
  )}