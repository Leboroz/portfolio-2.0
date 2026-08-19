interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h3 className="h3 text-terminal-green">
      {title}
    </h3>
  )
}
