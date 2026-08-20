interface SubHeadingProps {
  text: string;
}

export const SubHeading = ({ text }: SubHeadingProps) => {
  return (
    <h2 className="h2">
      {text}
    </h2>
  )
}
