export type SkillProps = {
  logo: string;
  text: string;
  skillProficiency?: number;
}
export const Skill = ({ text, logo, skillProficiency = 100 }: SkillProps) => {
  return (
    <div className="bg-p2 p-5 gap-2 rounded border border-s1-700 flex flex-col flex-wrap w-fit items-center">
      <img className="h-10" src={logo} alt={text} />
      <span>{text}</span>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 overflow-hidden">
        <div className="bg-s1 h-2 rounded-full animate-pulse" style={{ width: `${skillProficiency}%` }}></div>
      </div>
    </div>
  )
}
