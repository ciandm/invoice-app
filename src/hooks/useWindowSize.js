import { useEffect, useState } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowSize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
