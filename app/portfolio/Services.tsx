import { PageTitle } from "~/components/PageTitle"
import { SERVICES } from "../../lib/data"
import { ServiceCard } from "~/components/ServiceCard"
import { SubHeading } from "~/components/SubHeading"

export const Services = (props: {}) => {
  return (
    <section id="services" className="section container">

      <div className="content flex flex-col justify-center gap-7">
        <header className="flex flex-col gap-3">
          <PageTitle title='My Services' />
          <SubHeading text='From the first wireframe to the final frame.' />
        </header>

        <div className="flex justify-between">
          {
            SERVICES
              .map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  type={`${(index + 1).toString().padStart(2, '0')} / ${service.type}`}
                />
              ))
          }
        </div>
      </div>

    </section>
  )
}
