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
    </div>
  )
}
