import { PageTitle } from "~/components/PageTitle"
import { SERVICES } from "../../lib/data"
import { ServiceCard } from "~/components/ServiceCard"

export const Services = (props: {}) => {
  return (
    <section id="services" className="section container">

      <div className="content">
        <PageTitle title='My Services' />

        <div className="flex justify-between">
          {SERVICES.map(service => (<ServiceCard key={service.title} title={service.title} image={service.image} ></ServiceCard>))}
        </div>
      </div>

    </section>
  )
}
