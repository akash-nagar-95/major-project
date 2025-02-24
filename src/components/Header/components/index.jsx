import Sidebar from "../../SideNavbar/components";

const Header = () => {
  return (
    <header className="shadow-md fixed top-0 left-0 w-full " style={{backgroundColor:"var(--color-primary)"}} >
      <div className="">
        <Sidebar/>
      </div>
      <div className="fixed top-0 left-10 pl-10 w-full z-50 bg-transparent bg-opacity-30 backdrop-blur-md shadow-md">
        <div className="container mx-auto py-4 pl-10 bg-tran flex justify-between items-center opacity-100">
          <div className=""></div>
          
          <h1 className="text-2xl font-bold cursor-pointer text-blackning">Website name</h1>

          <nav className="hidden md:flex space-x-6">
            <a href="/home" className="text-md text-black hover:text-lg hover:text-cyan-400 hover:underline ">Home</a>
            <a href="/about" className="text-md text-black hover:text-lg hover:text-cyan-400 hover:underline">About</a>
            <a href="/contact" className="text-md text-black hover:text-lg hover:text-cyan-400 hover:underline">Contact</a>
            <a href="/login" className="text-md text-black hover:text-lg hover:text-cyan-400 hover:underline">Login</a>
            <a href="/signup" className="text-md text-black hover:text-lg hover:text-cyan-400 hover:underline">Signup</a>
          </nav>

          <div className="md:hidden ">
            <button className="focus:outline-none text-lg">☰</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;