import { SERVICES } from "../../lib/data"
import { ServiceCard } from "~/components/ServiceCard"
import { Tag } from "~/components/Tag"
import { SectionLayout } from "../layouts/SectionLayout"

export const Services = () => {
  return (
    <SectionLayout>
      <div className="flex justify-between gap-3">
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

      <Tag text='COMPONENT SYSTEMS / SPATIAL INTERFACES / PERFORMANCE BUDGETS' />
    </SectionLayout>
  )
}
