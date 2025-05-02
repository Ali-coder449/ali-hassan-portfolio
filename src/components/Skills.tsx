import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skillGroups = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', percentage: 95, color: 'bg-portfolio-red' },
        { name: 'CSS3', percentage: 90, color: 'bg-portfolio-blue' },
        { name: 'JavaScript', percentage: 85, color: 'bg-portfolio-yellow' },
        { name: 'TypeScript', percentage: 80, color: 'bg-portfolio-blue' },
        { name: 'React.js', percentage: 90, color: 'bg-portfolio-blue' },
        { name: 'Next.js', percentage: 85, color: 'bg-portfolio-dark' },
        { name: 'Tailwind CSS', percentage: 90, color: 'bg-portfolio-blue' },
        { name: 'Bootstrap', percentage: 90, color: 'bg-portfolio-green' },
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', percentage: 80, color: 'bg-portfolio-green' },
        { name: 'Express.js', percentage: 75, color: 'bg-portfolio-dark' },
        { name: 'MongoDB', percentage: 70, color: 'bg-portfolio-green' },
        { name: 'Git & GitHub', percentage: 85, color: 'bg-portfolio-dark' },
        { name: 'Responsive Design', percentage: 95, color: 'bg-portfolio-blue' },
        { name: 'UI/UX Design', percentage: 90, color: 'bg-portfolio-green' },
        { name: 'Performance Optimization', percentage: 85, color: 'bg-portfolio-yellow' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title inline-block mx-auto">My Skills</h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto mt-6">
            I've acquired and refined various technical skills throughout my 2.5 years of
            experience in web development, focusing on both frontend and backend technologies.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, groupIndex) => (
            <motion.div 
              key={group.title}
              className="card"
              variants={itemVariants}
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
                      <motion.div 
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-portfolio-dark mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3">
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >HTML5</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >CSS3</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-yellow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >JavaScript</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >TypeScript</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-green"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >React.js</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Next.js</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Tailwind CSS</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-green"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Node.js</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Express.js</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-green"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >MongoDB</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Git</motion.span>
              <motion.span 
                className="cursor-pointer skill-tag bg-portfolio-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >GitHub</motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
