
// Detect if the current device is mobile
export const isMobile = (): boolean => {
  return window.innerWidth < 768;
};

// Detect if the current device is a tablet
export const isTablet = (): boolean => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

// Detect if the current device is desktop
export const isDesktop = (): boolean => {
  return window.innerWidth >= 1024;
};

// Add a listener for screen size changes
export const addResizeListener = (callback: () => void): (() => void) => {
  window.addEventListener('resize', callback);
  return () => {
    window.removeEventListener('resize', callback);
  };
};

// Get current breakpoint
export const getCurrentBreakpoint = (): 'mobile' | 'tablet' | 'desktop' => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};
