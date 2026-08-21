import type { ReactNode } from "react"

interface SectionLayoutProps {
  children: ReactNode | ReactNode[];
  id: string;
  className?: string;
}
export const SectionLayout = ({ children, id, className }: SectionLayoutProps) => {
  return (
    <section id={id} className={`section container ${className}`}>
      {children}
    </section>
  )
}
