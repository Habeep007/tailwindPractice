const Projects = () => {
    const projects = [
      {
        id: 1,
        title: "Jetzy",
        description: "A modern platform to connect travelers with like-minded individuals.",
        image: "/jetzy.png"
      },
      {
        id: 2,
        title: "Expedient",
        description: "A platform that allows hospitals to track applications and resumes efficiently, conduct interviews and assessments, and compare applicants.",
        image: "/expedient.png"
      },
      {
        id: 3,
        title: "Icon",
        description: "A cutting-edge solution for digital branding.",
        image: "/icon.png"
      }
    ];

    return (
        <section id="projects" className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Projects;