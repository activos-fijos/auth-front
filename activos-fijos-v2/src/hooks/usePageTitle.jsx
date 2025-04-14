import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title}`;
    return () => {
      document.title = "Activos Fijos"; // Valor por defecto
    };
  }, [title]);
};

export default usePageTitle;