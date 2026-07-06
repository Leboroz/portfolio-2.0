import { faArchive } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type Experience = {
  company: {
    name: string,
    location: string,
    period: string,
  },
  description: {
    title: string,
    archievements: string[],
    type: string,
  },
};

interface ExperienceGridProps {
  experience: Experience[];
}

export const ExperienceGrid = ({ experience }: ExperienceGridProps) => {

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {experience.map((item, index, list) => {
        const isTheLastIndex = index + 1 == list.length;

        return (
          <React.Fragment key={index}>
            <div className="p-6 text-white rounded shadow">
              <h6 className="h6">{item.company.name}</h6>
              <p>{item.company.period}</p>
            </div>
            <div className="flex justify-center">
              <div className="m-auto rounded-full p-1 w-10 border border-dashed border-p2-500  aspect-square">
                <div className="w-full aspect-square rounded-full bg-s2"></div>
              </div>
            </div>
            <div className="p-6 text-white rounded shadow">
              <h6 className="h6">{item.description.title}</h6>
              <ul className="text-sm">
                {item.description.archievements.map(archievement => (<li>{archievement}</li>))}
              </ul>
            </div>

            {!isTheLastIndex && (
              <div className="col-span-3 flex justify-center relative">
                <div className="h-24 w-1 border-r border-dashed border-p2-500 absolute -top-12 left-1/2 -translate-x-1"></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
