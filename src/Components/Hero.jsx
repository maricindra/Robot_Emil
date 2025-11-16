import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';


const hero = () => {

return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">


{/* box Container to Left page */}
        <div className=" max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">


        {/* TAG BOX with gradient border - box 'Intro 3D Experience'*/}
        <div className=' relative  w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#800080] to-[#229756] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'> 
        <div data-aos="zoom-in" className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
        <i class='bx bx-planet'></i>intro 3D Experience
        </div></div>


    {/* Main Heading text - 'I'm Your 3d Robot'*/}
    <h1  data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
        className='text-3x1 sm:text-4x1 md:text-5x1 lg:text-6x1 font-semibold text-green-500 tracking-wider my-8'>
        I'M YOUR <br/> 3D ROBOT</h1>



    {/* Description Paragraph */}
        <p data-aos="zoom-in"
        className='text-purple-600 sm:text-lg tracking-wider max-w-[25rem] lg:max-w-[30rem]'>
        I'm a 3D robot that brings immersive, interactive visuals to your site. Built for performance and easy customization, I handle animations, responsive layouts, and user interactions. I'am perfect for portfolios, demos, and experimental web experiences, lets be partner?
        </p><br/>



    {/*Container of Buttons*/}
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className=' flex gap-4 mt-12'> 
    
        <a className='border border-[#27F576] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm
        font-semibold tracking-wider transition-all duration-300 text-purple-600 hover:text-green-400' 
        href="https://github.com/maricindra/Robot_Emil">
        Documentation <i class='bx bx-link-external' ></i>
        </a>

        <a className='border border-[#27F576] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm
        font-semibold tracking-wider transition-all duration-300 text-green-500 hover:text-purple-600' 
        href="https://app.spline.design/file/399427a5-4b37-45a6-952c-ac5dbc534ae9">
        Get Started <i class='bx bx-link-external' ></i>
        </a> 
</div></div>


        {/* 3D Robot - right*/}
        <Spline data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:lefet [-2%] h-full' scene="https://prod.spline.design/jR6ieRY7A0x3IIv7/scene.splinecode" />
    <br></br> </main>



)
}

export default hero
