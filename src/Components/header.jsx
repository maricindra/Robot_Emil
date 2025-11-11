import 'boxicons/css/boxicons.min.css';

const Header = () => {

    // Define a function, often named 'toggleMobileMenu' of mobile menu
    const toggleMobileMenu = () => {
    // Check if the MobileMenu element was found
        const MobileMenu = document.getElementById('MobileMenu');
    // Function If it has the 'hidden' class, remove it, otherwise,add it.
        if(MobileMenu.classList.contains('hidden'))
        {MobileMenu.classList.remove('hidden');}
        else{ MobileMenu.classList.add('hidden');}}
        
    return(
    <header className="flex justify betewwen items-center py-4 px4 lg:px-20">
    <div className='absolute border-red-600 top-4 left-13 w-full'>
    <p className="text-1xl md:text-1x1 
    lg:text-1x1  text-green-500 font-light m-0 p-1"> Hello, my name is </p>
    </div>
    
    <h1 className="text-3xl md:text-4x1 
    lg:text-5x1 font-light  text-purple-700 m-0 p-10">
    Robot Emil
    </h1>

    {/*To Desktop Navigation users*/ }
    <nav className="hidden md:flex items-center gap-12">

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-purple-700 z-50"
        href="https://spline.design"> Company
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-purple-700 z-50"
        href="https://michalsnik.github.io/aos"> Features
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-purple-700 z-50"
        href="#"> Resources
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-purple-700 z-50"
        href="https://docs.spline.design/basics/what-is-spline"> Docs
        </a>

        <button className="hidden md:block bg-green-400
        text-black py-3 px-8 rounded-full border-none
        font medium transition-all duration-500
        hover:bg-purple-700 hover:text-green-400 cursor-pointer z-50">
        Sign in
        </button>
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
        href="#"> Company
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-green-400 z-50"
        href="#"> Features
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-green-400 z-50"
        href="#"> Resources
        </a>

        <a className="text-green-300 tracking-sider
        trasnsition-colors hover:text-green-400 z-50"
        href="#"> Docs
        </a>  
        </nav>
    </div>

    </header>


)}

export default Header;


