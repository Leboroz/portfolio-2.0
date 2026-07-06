import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  image: string;
}
export const ServiceCard = ({ title, image }: ServiceCardProps) => {
  const [serviceHover, setServiceHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setServiceHover(true)}
      onMouseLeave={() => setServiceHover(false)}
      className="relative"
    >
      <div
        className={`clip-path transition-colors duration-300 ease-in-out bg-p2 ${serviceHover ? 'bg-s1' : ''} border-b backdrop-blur-md flex flex-col justify-between`}
      >
        <h3 className="h6 border-b p-7 pt-9">{title}</h3>

        <figure className={`h-3/5 echo transition-all duration-300 ease-in-out ${serviceHover ? 'scale-110' : ''}`}>
          <img className="w-full h-full object-cover object-center rounded-t-3xl" src={image} alt={title + " image"} />
        </figure>

        <svg width="410" height="500" viewBox="0 0 410 500" style={{ position: 'absolute', pointerEvents: 'none' }}>
          <defs>
            <path id="shape-geometry" d="M 20,0 L 390,0 Q 410,0 410,20 L 410,380 Q 410,400 390,400 L 360,400 Q 310,400 310,460 L 310,480 Q 310,500 290,500 L 20,500 Q 0,500 0,480 L 0,20 Q 0,0 20,0 Z" />

            <clipPath id="complex-shape">
              <use href="#shape-geometry" />
            </clipPath>
          </defs>

          <use href="#shape-geometry" fill="none" stroke="var(--color-s3)" stroke-width="4" />
        </svg>
      </div>

      <button
        type="button"
        className={`transition-colors duration-300 ease-in-out absolute bottom-0 right-0 bg-p2 ${serviceHover ? 'bg-s1' : ''} aspect-square rounded-full w-22 text-3xl`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  )
}
