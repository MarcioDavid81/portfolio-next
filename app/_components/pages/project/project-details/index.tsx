/* eslint-disable prettier/prettier */

import { Button } from "@/app/_components/button";
import SectionTitle from "@/app/_components/section-title";
import TechBadge from "@/app/_components/tech-badge";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { Link } from "@/app/_components/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { RichText } from "@/app/_components/rich-text";
import { Project } from "@/app/types/projects";

type ProjectDetailsProps = {
  project: Project;
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
      />
      <SectionTitle
        title={project.title}
        subtitle="projeto"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        <RichText content={project.description.raw} />
      </div>
      <div className="flex flex-wrap gap-2 w-full items-center justify-center max-w-[330px]">
        {project.tecnologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        {project?.gthubUrl && (
          <a href={project.gthubUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} className="mr-2" />
              Repositório
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} className="mr-2" />
              Projeto Online
            </Button>
          </a>
        )}
      </div>
      <Link href="/projects" className="text-gray-400 text-sm sm:text-base">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
};

export default ProjectDetails;
