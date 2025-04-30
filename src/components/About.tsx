
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
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

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className={`w-full md:w-1/2 mb-8 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-portfolio-blue to-blue-400 absolute transform -rotate-3"></div>
              <div className="w-full h-[400px] rounded-2xl bg-white p-4 relative z-10 transform rotate-3 shadow-xl">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-portfolio-blue/10"></div>
                  <div className="p-6 z-10">
                    <div className="text-center">
                      <div className="mb-4 inline-block p-6 rounded-full bg-portfolio-blue/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-portfolio-dark mb-2">Frontend Developer</h3>
                      <p className="text-portfolio-gray mb-6">Based in Pakistan</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div>
                          <p className="text-sm font-medium text-portfolio-gray">Email:</p>
                          <p className="font-medium text-portfolio-dark">alihassan.dev8@gmail.com</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-portfolio-gray">Phone:</p>
                          <p className="font-medium text-portfolio-dark">+92 321 691 1480</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-portfolio-gray">Experience:</p>
                          <p className="font-medium text-portfolio-dark">2.5 Years</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-portfolio-gray">Availability:</p>
                          <p className="font-medium text-portfolio-dark">Full-time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`} style={{transitionDelay: '0.3s'}}>
            <h2 className="section-title text-left">About Me</h2>
            <p className="text-portfolio-gray mt-6">
              I'm Ali Hassan, a passionate Web Developer with 2.5 years of experience in creating 
              responsive and user-friendly web applications. I've worked with top companies in the industry, 
              delivering high-quality projects using the latest technologies.
            </p>
            <p className="text-portfolio-gray mt-4">
              My expertise lies in front-end development, where I excel in building intuitive and 
              visually appealing interfaces. I'm proficient in React.js and have extensive experience 
              with HTML, CSS, JavaScript, and Bootstrap.
            </p>
            <p className="text-portfolio-gray mt-4">
              I enjoy solving complex problems and turning ideas into reality. My goal is to create 
              web experiences that are not only beautiful but also functional and accessible to all users.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-blue mr-2"></div>
                <span className="text-portfolio-dark font-medium">Problem Solving</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-blue mr-2"></div>
                <span className="text-portfolio-dark font-medium">Clean Code</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-blue mr-2"></div>
                <span className="text-portfolio-dark font-medium">Responsive Design</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-blue mr-2"></div>
                <span className="text-portfolio-dark font-medium">Communication</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
