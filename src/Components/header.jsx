import 'boxicons/css/boxicons.min.css';
import Typed from 'typed.js';
import { useEffect } from "react";



const Header = () => {

// Define a function, often named 'toggleMobileMenu' of mobile menu
    const toggleMobileMenu = () => {
// Check if the MobileMenu element was found
        const MobileMenu = document.getElementById('MobileMenu');
 // Function If it has the 'hidden' class, remove it, otherwise,add it.
        if(MobileMenu.classList.contains('hidden'))
        {MobileMenu.classList.remove('hidden');}
        else{ MobileMenu.classList.add('hidden');}}

// To use Typed.js in React. This is a write visual animation effect
        useEffect(() => {
            var typed = new Typed('#typed-text', {
            strings: ["Hello World! ", "i'm Your Robot", "My name is Robot Emil","But i can be what you want" , "Nice To Meet You!"],
            typeSpeed: 100,
            backSpeed: 25,
            loop: true
}, []);
return () => {
            typed.destroy();
        };
    }, []);

        
// Return the JSX for the header component     
        
    return(



        
    <header className="flex justify betewwen items-center py-4 px4 lg:px-20">
    <div className='absolute top-4 left-13 w-full'>
    
    <p 
    className="text-1xl md:text-1x1 
    lg:text-1x1  text-green-400 font-light m-0 p-1"> <span id="typed-text"> </span></p>
    </div>
    
    <h1 data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" 
    className="text-3xl md:text-4x1 
    lg:text-5x1 font-mono  text-purple-700 m-0 p-10">
    Robot Emil
    </h1>

    {/*To Desktop Navigation users*/ }
    <nav data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    className="hidden md:flex items-center gap-12">

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-purple-700 z-50"
        href="https://spline.design"> Company
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-purple-700 z-50"
        href="https://mattboldt.com/demos/typed-js"> Features
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-purple-700 z-50"
        href="https://michalsnik.github.io/aos/"> Resources
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-purple-700 z-50"
        href="https://docs.spline.design/basics/what-is-spline"> Docs
        </a>

        <a href="https://app.spline.design/file/399427a5-4b37-45a6-952c-ac5dbc534ae9"
        className="hidden md:block bg-purple-700
        text-green-400 py-3 px-8 rounded-full border-none
        font medium transition-all duration-500
        hover:bg-green-400 hover:text-purple-600 cursor-pointer z-50">
        Modify me
        </a>
    </nav>



{/*To Mobile Navigation users - Visible only mobile version, In this button has menu*/ }
    <button onClick={toggleMobileMenu} className=' md:hidden text-3x1 p-2 z-50'>
    <i class='bx bx-menu-alt-left | text-green-400'></i>
    </button>
        {/* Mobile Menu - Hidden by default*/}
        <div id='MobileMenu' className = 'hidden fixed | top-16  bottom-0 right-0 left-0 | p-5 md:hidden z-40 | bg-black bg-opacity-70 backdrop-blur- md'>
        <nav className= 'flex flex-col | gap-6 | items-center'>
        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-green-400 z-50"
        href="https://spline.design"> Company
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-green-400 z-50"
        href="https://mattboldt.com/demos/typed-js"> Features
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-green-400 z-50"
        href="https://docs.spline.design"> Resources
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-green-400 z-50"
        href="https://github.com/maricindra/Robot_Emil"> Docs
        </a> 

        </nav>
    </div>

    </header>


)}

export default Header;


