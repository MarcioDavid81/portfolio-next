/* eslint-disable prettier/prettier */
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
import { KnowTechs } from "@/app/types/projects";
import { CMSIcon } from "@/app/_components/cms-icon";

type KnowTechsProps = {
  techs: KnowTechs[];
}


const KnownTechs = ({techs}: KnowTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Tecnologias Conhecidas" />
      <HorizontalDivider />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnownTech
            key={tech.name}
            tech={tech}
          />
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
