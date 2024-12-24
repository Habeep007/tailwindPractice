const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Habib. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Habeep007" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/habie007/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;