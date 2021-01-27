import { useEffect } from 'react';

const useTitle = (page) => {
  useEffect(() => {
    const { title } = document;
    document.title = `${page} - ${title}`;

    return () => {
      document.title = title;
    };
  });
};

export default useTitle;
