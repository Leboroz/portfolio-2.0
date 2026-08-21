import type { ReactNode } from "react";
import { PageTitle } from "~/components/PageTitle"
import { SubHeading } from "~/components/SubHeading"

interface ContentLayoutProps {
  title: string;
  subHeading: string;
  children: ReactNode[] | ReactNode;
  className?: string;
}
export const ContentLayout = ({ title, subHeading, children, className }: ContentLayoutProps) => {
  return (
    <div className={`content flex flex-col justify-center gap-7 ${className}`}>
      <header className="flex flex-col gap-3">
        <PageTitle title={title} />
        <SubHeading text={subHeading} />
      </header>

      {children}
    </div>
  )
}
