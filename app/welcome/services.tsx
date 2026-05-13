import { PageTitle } from "~/components/pageTitle"
import { Service } from "~/components/service"
import { SERVICES } from "../../lib/data"

export const Services = (props: {}) => {
  return (
    <section className="section">
      <PageTitle title='- Services' />
      <div className="flex flex-col gap-3">
        {SERVICES.map(serviceParams => (<Service serviceParams={serviceParams}></Service>))}
      </div>

    </section>
  )
}
