
// Function to initialize animation observers
export const initAnimationObservers = () => {
  const animateOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  };

  return {
    animateOnScroll
  };
};

// Function to add delay to elements for staggered animations
export const addStaggeredDelay = (elements: NodeListOf<Element>, baseDelay = 0.1) => {
  elements.forEach((el, index) => {
    (el as HTMLElement).style.transitionDelay = `${baseDelay * index}s`;
  });
};
