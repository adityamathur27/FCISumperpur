import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // We use a short timeout to let the React DOM update and render the new page
    // before we apply the smooth scroll transition.
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (document.documentElement) {
        document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      if (document.body) {
        document.body.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
