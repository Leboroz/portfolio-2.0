import { useState } from "react";
import { PageTitle } from "./PageTitle";

interface ServiceCardProps {
  type: string;
  title: string;
  description: string;
}

export const ServiceCard = ({ type, title, description }: ServiceCardProps) => {
  const [serviceHover, setServiceHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setServiceHover(true)}
      onMouseLeave={() => setServiceHover(false)}
      className="relative bg-surface rounded-2xl p-5 flex-1 flex flex-col gap-3"
    >
      <PageTitle title={type} />
      <h2 className="text-[20px] font-bold">{title}</h2>
      <p className="text-muted">{description}</p>
    </div>
  )
}
