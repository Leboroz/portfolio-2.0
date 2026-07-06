interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h3 className="text-p3 text-3xl font bold text-s2 font-playfair mb-12">
      {title}
    </h3>
  )
}
