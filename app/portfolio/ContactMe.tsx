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
    <SectionLayout id="contact" className="flex flex-col gap-8 lg:flex-row">
      <ContentLayout
        title="03 / OPEN FOR COLLABORATION"
        subHeading="Have a complex interface in mind?"
        className="flex-1"
      >
        <p className="text-muted">
          I partner with ambitious teams to make demanding digital experiences feel fast, focused, and memorable.
        </p>

        <Tag text="AVAILABLE FOR SELECTED PROJECTS · RESPONDS WITHIN 48H" />

        <div className="flex flex-col justify-center gap-2">
          <h4 className="font-kode-mono text-terminal-green">FIND ME ELSEWHERE</h4>
          <ul className="flex gap-2">
            {socials.map((social: Social) => (
              <li key={social.name} className="relative aspect-square w-10 rounded-2xl bg-surface text-lg">
                <a
                  href={social.url}
                  className="absolute top-1/2 left-1/2 -translate-1/2"
                  target="_blank" rel="noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </ContentLayout>

      <div className="flex flex-1 items-center justify-center pb-10">
        <ContactForm className="flex-1" />
      </div>
    </SectionLayout>
  )
}
