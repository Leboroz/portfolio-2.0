interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h3 className="h2 text-2xl text-terminal-green">
      {title}
    </h3>
  )
}
