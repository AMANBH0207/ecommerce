import { useEffect } from 'react';

const useColorMode = () => {
  const colorMode = 'dark'


  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    colorMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode];
};

export default useColorMode;
