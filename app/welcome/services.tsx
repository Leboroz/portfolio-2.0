import { PageTitle } from "~/components/pageTitle"
import { Service } from "~/components/service"
import { SERVICES } from "../../lib/data"
import { ServiceCard } from "~/components/ServiceCard"

export const Services = (props: {}) => {
  return (
    <section id="services" className="section container">

      <div className="content">
        <PageTitle title='My Services' />

        <div className="flex justify-between">
          {SERVICES.map(service => (<ServiceCard title={service.title} image={service.image} ></ServiceCard>))}
        </div>
      </div>

    </section>
  )
}
