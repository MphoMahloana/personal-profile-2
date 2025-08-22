import { useEffect, useState, useRef, RefObject } from 'react';

interface Options extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement>(options?: Options): [RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect the observer after the element is visible if triggerOnce is true
          if (options?.triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        root: options?.root,
        rootMargin: options?.rootMargin || '0px',
        threshold: options?.threshold || 0.1,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
