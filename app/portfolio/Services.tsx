import { SERVICES } from "../../lib/data"
import { ServiceCard } from "~/components/ServiceCard"
import { Tag } from "~/components/Tag"
import { ContentLayout } from "~/layouts/ContentLayout"
import { SectionLayout } from "~/layouts/SectionLayout"


export const Services = () => {
  return (
    <SectionLayout id="services">
      <ContentLayout title='01 / Services' subHeading='From the first wireframe to the final frame.'>
        <div className="flex flex-col justify-between gap-3 lg:flex-row">
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
      </ContentLayout>
    </SectionLayout>
  )
}
