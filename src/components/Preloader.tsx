
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you could replace this with actual asset loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute w-full h-full rounded-full border-4 border-gray-200"></div>
          <div className="absolute w-full h-full rounded-full border-4 border-t-portfolio-blue animate-spin"></div>
        </div>
        <div className="text-2xl font-bold text-portfolio-dark">
          Ali<span className="text-portfolio-blue">Hassan</span>
        </div>
        <p className="text-portfolio-gray mt-2">Web Developer</p>
      </div>
    </div>
  );
};

export default Preloader;
