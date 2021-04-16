// Libs
import { FC } from "react";
import { HorizontalBar } from "react-chartjs-2";
import { orderBy } from "lodash";

// Models
import { HardSkill } from "../../typings/skills";

// Utils
import { hex2rgba } from "../../utils/colors";

type Props = {
  category: string;
  skills: HardSkill[];
  height?: number;
  className?: string;
};

export const HardSkillsChart: FC<Props> = ({ category, skills, height, className }) => {
  const orderedSkills = orderBy(skills, ["name"]);
  const data = {
    labels: orderedSkills.map((skill) => skill.name),
    datasets: [
      {
        label: "Nivel",
        data: orderedSkills.map((skill) => skill.level),
        backgroundColor: orderedSkills.map((skill) => (skill.color ? hex2rgba(skill.color, 0.7) : undefined)),
        borderColor: orderedSkills.map((skill) => skill.color),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: category,
      fontSize: 16,
      fontColor: "#000000",
    },
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 4,
            stepSize: 1,
            callback: (value: number) => `L${value}`,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };

  return (
    <div className={className}>
      <HorizontalBar data={data} options={options} height={height} />
    </div>
  );
};

export default HardSkillsChart;
