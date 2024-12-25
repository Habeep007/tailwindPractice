import profileImage from '../../public/profile.avif'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm Habib</h1>
          <p className="text-xl text-gray-600 mb-8">Full Stack Developer with expertise in modern web technologies</p>
          <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Get in Touch
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={profileImage} alt="Developer" className="rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;