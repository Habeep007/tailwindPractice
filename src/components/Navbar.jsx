const Navbar = () => {
    return (
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#home" className="flex items-center py-4">
                  <span className="font-semibold text-gray-700 text-lg">Habib</span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className="py-4 px-2 text-gray-700 hover:text-blue-500">Home</a>
              <a href="#about" className="py-4 px-2 text-gray-700 hover:text-blue-500">About</a>
              <a href="#projects" className="py-4 px-2 text-gray-700 hover:text-blue-500">Projects</a>
              <a href="#contact" className="py-4 px-2 text-gray-700 hover:text-blue-500">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;