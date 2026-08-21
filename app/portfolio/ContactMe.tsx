import { Tag } from "~/components/Tag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactForm } from "~/components/ContactForm";
import { SectionLayout } from "~/layouts/SectionLayout";
import { ContentLayout } from "~/layouts/ContentLayout"
import type { Social } from "../../types"

interface ContactMeProps {
  socials: Social[];
}

export const ContactMe = ({ socials }: ContactMeProps) => {
  return (
    <SectionLayout id="contact" className="flex gap-8">
      <ContentLayout
        title="03 / OPEN FOR COLLABORATION"
        subHeading="Have a complex interface in mind?"
        className="flex-1"
      >
        <p className="text-muted">
          I partner with ambitious teams to make demanding digital experiences feel fast, focused, and memorable.
        </p>

        <Tag text="AVAILABLE FOR SELECTED PROJECTS · RESPONDS WITHIN 48H" />

        <div className="flex flex-col gap-2 justify-center">
          <h4 className="text-terminal-green font-kode-mono">FIND ME ELSEWHERE</h4>
          <ul className="flex gap-2">
            {socials.map((social: Social) => (
              <li key={social.name} className="bg-surface rounded-2xl aspect-square w-10 relative text-lg">
                <a
                  href={social.url}
                  className="absolute top-1/2 left-1/2 -translate-1/2"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </ContentLayout>

      <div className="flex-1 flex justify-center items-center">
        <ContactForm className="flex-1" />
      </div>
    </SectionLayout>
  )
}
