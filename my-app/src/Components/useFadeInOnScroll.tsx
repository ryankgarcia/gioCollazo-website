import './useFadeInOnScroll.css';

import { useEffect, useRef, useState } from 'react';

export const useFadeInOnScroll = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const node = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return { ref, isVisible };
};

export default useFadeInOnScroll;
