const About = () => {
  return (
    <section id="about" className="py-12 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600">
              With 3 years of experience in web development, I've worked on a variety of projects ranging from startups to enterprise-level applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded">
                <p className="font-medium">Frontend</p>
                <p className="text-gray-600">React</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <p className="font-medium">Backend</p>
                <p className="text-gray-600">Node.js, Express</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <p className="font-medium">Database</p>
                <p className="text-gray-600">MySQL, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
