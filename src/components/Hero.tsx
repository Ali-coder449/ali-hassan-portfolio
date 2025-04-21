
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="text-left space-y-4">
              <h4 className="text-xl md:text-2xl font-medium text-portfolio-gray animate-fade-in">
                Hello<span className="text-portfolio-blue">.</span> I am
              </h4>
              <h1 className="text-4xl md:text-6xl font-bold text-portfolio-dark">
                Ali <span className="text-portfolio-blue">Hassan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-portfolio-dark mt-2">
                <span className="relative inline-block">
                  Web Developer
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-blue"></span>
                </span>
              </h2>
              <p className="text-lg text-portfolio-gray mt-4 max-w-lg">
                Experienced developer with 2.5 years of expertise in building professional 
                web applications using React.js, JavaScript, HTML, CSS, and Bootstrap.
              </p>
              <div className="flex space-x-4 mt-8">
                <a href="#projects" className="btn btn-primary animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  View Projects
                </a>
                <a href="#contact" className="px-6 py-3 rounded-lg border-2 border-portfolio-blue text-portfolio-blue font-medium transition-all duration-300 hover:bg-portfolio-blue hover:text-white animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 flex justify-center mt-12 md:mt-0 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-blue to-blue-400 absolute animate-pulse-soft"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white p-3 relative z-10">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-portfolio-blue/20 to-portfolio-blue/10">
                    <div className="w-4/5 h-4/5 bg-portfolio-blue rounded-t-full flex items-center justify-center">
                      <span className="text-9xl text-white font-bold opacity-20">AH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg animate-float">
                <div className="bg-portfolio-blue text-white p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-red-500 text-white p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </div>
              </div>
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="bg-yellow-500 text-white p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
