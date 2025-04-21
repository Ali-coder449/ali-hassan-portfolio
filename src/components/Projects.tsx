
import { useEffect, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (section) {
        const position = section.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE2MTYyMzQ3Nzg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
      description: 'A full-featured e-commerce platform with product listing, cart functionality, and payment integration',
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'HTML/CSS',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXx8fHx8fDE2MTYyMzQ3MjU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
      description: 'Professional website for a corporate client with multiple pages and responsive design',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE2MTYyMzQ4MjM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
      description: 'Interactive dashboard for tracking portfolio performance with real-time data visualization',
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'HTML/CSS',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTYxNjIzNDczNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
      description: 'Elegant website for a high-end restaurant with menu display and reservation system',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      id: 5,
      title: 'Travel Booking App',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE2MTYyMzQ4MjM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
      description: 'Interactive travel booking application with search functionality and user accounts',
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      id: 6,
      title: 'Personal Blog',
      category: 'HTML/CSS',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXx8fHx8fDE2MTYyMzQ3MjU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
      description: 'Minimalist blog with content management system and responsive design',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];
  
  const categories = ['All', 'React', 'HTML/CSS'];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block mx-auto">My Projects</h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto mt-6">
            Here are some of the projects I've worked on. Each project demonstrates my skills
            in different aspects of web development, from responsive design to interactive functionality.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 p-1 bg-gray-100 rounded-full">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-portfolio-blue text-white shadow-md' 
                    : 'text-portfolio-gray hover:text-portfolio-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 bg-white/20 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.technologies.slice(0, 2).map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-portfolio-gray">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-portfolio-gray">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  <button className="text-portfolio-blue hover:text-blue-700 font-medium transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn btn-primary inline-block">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
