/* eslint-disable prettier/prettier */
import { Link } from "@/app/_components/link";
import TechBadge from "@/app/_components/tech-badge";
import { Project } from "@/app/types/projects";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="w-full h-full">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={420}
          height={304}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="font-mono flex items-center font-medium gap-3 text-lg text-gray-50">
          <span className="text-primary">#</span>
          {project.title}
        </h3>
        <p className="text-gray-400 my-6">{project.shortDescription}</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[450px]">
          {project.tecnologies.map((tech) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name} `}
              name={tech.name}
            />
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-gray-100 hover:text-primary inline-flex items-center gap-1.5"
        >
          Ver Projeto
          <HiArrowNarrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
