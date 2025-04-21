
import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
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

  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', percentage: 95, color: 'bg-portfolio-red' },
        { name: 'CSS3', percentage: 90, color: 'bg-portfolio-blue' },
        { name: 'JavaScript', percentage: 85, color: 'bg-portfolio-yellow' },
        { name: 'Bootstrap', percentage: 90, color: 'bg-portfolio-green' },
        { name: 'React.js', percentage: 85, color: 'bg-portfolio-blue' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', percentage: 80, color: 'bg-portfolio-dark' },
        { name: 'Responsive Design', percentage: 90, color: 'bg-portfolio-blue' },
        { name: 'UI/UX Basics', percentage: 75, color: 'bg-portfolio-green' },
        { name: 'Performance Optimization', percentage: 70, color: 'bg-portfolio-yellow' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block mx-auto">My Skills</h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto mt-6">
            I've acquired and refined various technical skills throughout my 2.5 years of
            experience in web development, focusing primarily on frontend technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillGroups.map((group, groupIndex) => (
            <div 
              key={group.title}
              className={`card transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${groupIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-portfolio-dark mb-6">{group.title}</h3>
              <div className="space-y-6">
                {group.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-portfolio-dark">{skill.name}</span>
                      <span className="text-portfolio-gray">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.percentage}%` : '0%',
                          transitionDelay: `${(groupIndex * 0.2) + (index * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-xl font-bold text-portfolio-dark mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3">
              <span className="skill-tag bg-portfolio-blue">HTML5</span>
              <span className="skill-tag bg-portfolio-blue">CSS3</span>
              <span className="skill-tag bg-portfolio-yellow">JavaScript</span>
              <span className="skill-tag bg-portfolio-green">Bootstrap</span>
              <span className="skill-tag bg-portfolio-blue">React.js</span>
              <span className="skill-tag bg-portfolio-red">Responsive Web Design</span>
              <span className="skill-tag bg-portfolio-dark">Git</span>
              <span className="skill-tag bg-portfolio-blue">GitHub</span>
              <span className="skill-tag bg-portfolio-green">VS Code</span>
              <span className="skill-tag bg-portfolio-yellow">Web Performance</span>
              <span className="skill-tag bg-portfolio-blue">Cross-Browser Compatibility</span>
              <span className="skill-tag bg-portfolio-red">SEO Basics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
