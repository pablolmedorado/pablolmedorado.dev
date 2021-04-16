// Libs
import { FC } from "react";
import { Radar } from "react-chartjs-2";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import resolveConfig from "tailwindcss/resolveConfig";

// Config
import tailwindConfig from "../../../tailwind.config.js";

// Models
import { SoftSkill } from "../../typings/skills";

// Utils
import { hex2rgba } from "../../utils/colors";

const tailwindFullConfig = resolveConfig(tailwindConfig);

type Props = {
  skills: SoftSkill[];
  height?: number;
  className?: string;
};

const options = {
  scale: {
    ticks: { min: 1, max: 4, stepSize: 1 },
  },
  legend: {
    display: false,
  },
  tooltips: {
    display: false,
  },
};

export const SoftSkillsChart: FC<Props> = ({ skills, height, className }) => {
  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Nivel",
        data: skills.map((skill) => skill.level),
        backgroundColor: hex2rgba(tailwindFullConfig.theme.colors.secondary.light, 0.25),
        borderColor: hex2rgba(tailwindFullConfig.theme.colors.secondary.dark, 0.5),
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={className}>
      <Radar data={data} options={options} height={height} />
    </div>
  );
};

export default SoftSkillsChart;
