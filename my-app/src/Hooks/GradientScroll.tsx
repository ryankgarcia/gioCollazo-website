import { useEffect, useRef, useState } from 'react';

export function useIntersectionVisibleStates(length: number) {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [visibleStates, setVisibleStates] = useState<boolean[]>(
    new Array(length).fill(false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = imageRefs.current.findIndex(
            (element) => element === entry.target,
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleStates((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    imageRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return { imageRefs, visibleStates };
}
