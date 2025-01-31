/* eslint-disable prettier/prettier */
import { Project } from "@/app/types/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const tecnologies = project.tecnologies.map((tec) => tec.name).join(", ");
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:shadow-md hover:shadow-primary transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-lg text-gray-50/90 group-hover:text-primary">
          {project.title}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          {project.shortDescription}
        </p>
        <span
          className="text-gray-300 text-xs font-medium block mt-auto truncate"
          title={tecnologies}
        >
          {tecnologies}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
