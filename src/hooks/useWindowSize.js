import { useEffect, useState } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const updateWindowSize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
