import { Skill } from "~/components/skill"
import { MY_STACK } from "../../lib/data"
import React from "react"
import { PageTitle } from "~/components/pageTitle"

export const Stack = (props: {}) => {
  return (
    <section className="section bg-p1">
      {/* Corrected spelling of "Expertise" and matched the Title component to your fonts */}
      <PageTitle title="- Expertise" />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-6 md:gap-y-0">
        {Object.entries(MY_STACK).map(([techStackTitle, techStack]) => (
          <React.Fragment key={techStackTitle}>
            {/* Column 1: Category Title */}
            <div className="capitalize text-3xl text-s1 font-playfair font-bold p-6 border-b md:border-b-0 md:border-r border-p2/30 bg-p1/50 rounded-t-14 md:rounded-tr-none md:rounded-l-14 flex items-center">
              {techStackTitle}
            </div>

            {/* Column 2: Skills Wrapper */}
            <div className="flex flex-wrap gap-4 p-6 border-b border-p2/30 md:border-b-0 rounded-b-14 md:rounded-bl-none md:rounded-r-14  mb-8 md:mb-0">
              {techStack.map((technology: tech) => (
                <Skill
                  key={technology.name}
                  logo={technology.icon}
                  text={technology.name}
                  skillProficiency={90}
                /* Ensure the Skill component uses p3 for the text and s2 for the progress bar */
                />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
