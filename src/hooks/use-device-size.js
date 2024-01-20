import { useState, useEffect } from 'react';

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      console.log('3');
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return { width };
};

export default useDeviceSize;
