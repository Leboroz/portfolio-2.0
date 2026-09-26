import { Tag } from "~/components/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactForm } from "~/components/ContactForm";
import { SectionLayout } from "~/layouts/SectionLayout";
import { ContentLayout } from "~/layouts/ContentLayout";
import type { Social } from "../../types";

interface ContactMeProps {
  socials: Social[];
}

export const ContactMe = ({ socials }: ContactMeProps) => {
  return (
    <SectionLayout id="contact" className="flex flex-col gap-8 lg:flex-row">
      <ContentLayout
        title="03 / OPEN FOR COLLABORATION"
        subHeading="Have a complex interface in mind?"
        className="flex flex-1 flex-col gap-6"
      >
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          I partner with ambitious teams to make demanding digital experiences feel fast, focused, and memorable.
        </p>

        <div className="hidden w-full rounded-lg pb-1 sm:pb-0 lg:block">
          <Tag text="AVAILABLE FOR SELECTED PROJECTS · RESPONDS WITHIN 48H" />
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-kode-mono text-sm tracking-wider text-terminal-green uppercase">
            FIND ME ELSEWHERE
          </h4>
          <ul className="flex flex-wrap gap-3">
            {socials.map((social: Social) => (
              <li
                key={social.name}
                className="flex size-10 items-center justify-center rounded-2xl bg-surface text-lg transition-colors hover:bg-surface/80"
              >
                <a
                  href={social.url}
                  className="flex size-full items-center justify-center text-muted transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ContentLayout>

      <div className="flex w-full flex-1 items-center justify-center pb-6 lg:pb-0">
        <ContactForm className="w-full" />
      </div>
    </SectionLayout>
  );
};
