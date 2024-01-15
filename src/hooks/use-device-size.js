import { useState, useEffect } from 'react';

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return { width };
};

export default useDeviceSize;
