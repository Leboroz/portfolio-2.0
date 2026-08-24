import { useRef, type ReactNode } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from '@gsap/react';

interface AnimatedLayoutProps {
  children: ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    import("gsap/dist/ScrollTrigger").then((mod) => {
      const ScrollTrigger = mod.ScrollTrigger || mod.default;
      gsap.registerPlugin(ScrollTrigger);

      const slideElements = gsap.utils.toArray<HTMLElement>('.animate-slide');


      slideElements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              scroller: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full overflow-y-auto scroll-smooth lg:h-screen lg:snap-y lg:snap-mandatory"
    >
      {children}
    </div>
  );
}
