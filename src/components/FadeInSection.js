import React, { useEffect, useRef, useState } from "react";

function FadeInSection({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = setTimeout(() => setIsVisible(true), delay);
          return () => clearTimeout(id);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? 'fadeInUp' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 320ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
