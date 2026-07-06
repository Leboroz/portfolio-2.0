interface ServiceProps {
  serviceParams: {
    title: string;
    description: string[];
    image: string;
  }
}
export const Service = ({ serviceParams }: ServiceProps) => {
  return (
    <article className="group flex-1 flex flex-col items-center p-2 bg-p1 border border-p2/30 rounded-14 transition-all duration-300 hover:border-p3/40">

      <figure className="relative h-50 w-full overflow-hidden rounded-14 border border-p2/50 bg-black-100   ">
        <div className="absolute inset-0 bg-gradient-to-br from-p2/20 to-p1/60 mix-blend-multiply" />

        <img
          src={serviceParams.image}
          alt={serviceParams.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </figure>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-playfair font-bold text-p4 leading-tight">
          {serviceParams.title}
        </h2>

        <ul className="space-y-4">
          {serviceParams.description.map((item, index) => (
            <li key={index} className="flex items-start font-inter text-p3/80 text-md">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-s2 shadow-[0_0_10px_#FFB400] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <span className="text-s1 font-semibold tracking-wide uppercase text-sm border-b-2 border-s1 pb-1 cursor-pointer hover:text-s2 hover:border-s2 transition-colors">
            View Project Details
          </span>
        </div>
      </div>
    </article>
  )
}
