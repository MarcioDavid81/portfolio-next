import SectionTitle from "@/app/_components/section-title";
import KnownTech from "./known-tech";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { HorizontalDivider } from "@/app/_components/divider/horizontal";

const KNOWN_TECHS = [
  {
    icon: <TbBrandHtml5 size={30} />,
    name: "HTML 5",
    startDate: "2024-03-01",
  },
  {
    icon: <TbBrandCss3 size={30} />,
    name: "CSS 3",
    startDate: "2024-03-01",
  },
  {
    icon: <TbBrandJavascript size={30} />,
    name: "JavaScript",
    startDate: "2024-06-01",
  },
  {
    icon: <TbBrandBootstrap size={30} />,
    name: "Bootstrap",
    startDate: "2024-08-01",
  },
  {
    icon: <TbBrandReact size={30} />,
    name: "React",
    startDate: "2024-09-01",
  },
  {
    icon: <TbBrandTailwind size={30} />,
    name: "Tailwind",
    startDate: "2024-09-01",
  },
  {
    icon: <TbBrandTypescript size={30} />,
    name: "TypeScript",
    startDate: "2024-09-01",
  },
  {
    icon: <TbBrandNextjs size={30} />,
    name: "NextJS",
    startDate: "2024-12-01",
  },
];

const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Tecnologias Conhecidas" />
      <HorizontalDivider />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {KNOWN_TECHS.map((tech, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: tech.icon,
              name: tech.name,
              startDate: tech.startDate,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
