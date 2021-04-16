// Libs
import { FC } from "react";

// Models
import { SkillLevel } from "../typings/skills";

type Props = {
  levels: SkillLevel[];
  className?: string;
};

export const SkillLevelTable: FC<Props> = ({ levels, className }) => {
  return (
    <div className={`shadow overflow-hidden rounded ${className}`}>
      <table className="bg-white text-xs">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold">Nivel</th>
            <th className="text-left py-3 px-4 uppercase font-semibold">Nombre</th>
            <th className="text-left py-3 px-4 uppercase font-semibold">Descripción / Requisitos</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level) => (
            <tr key={level.name} className="even:bg-gray-100">
              <td className="text-left py-2 px-4">L{level.value}</td>
              <td className="text-left py-2 px-4">{level.name}</td>
              <td className="text-left py-2 px-4">{level.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillLevelTable;
