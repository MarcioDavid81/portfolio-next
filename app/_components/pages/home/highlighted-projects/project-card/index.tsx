/* eslint-disable prettier/prettier */
"use client";

import { Link } from "@/app/_components/link";
import TechBadge from "@/app/_components/tech-badge";
import { Project } from "@/app/types/projects";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {

  return (
    <motion.div
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={420}
          height={304}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      <div>
        <motion.h3
          className="font-mono flex items-center font-medium gap-3 text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{duration: 0.7}}
        >
          <span className="text-primary">#</span>
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{duration: 0.2, delay: 0.3}}
        >
          {project.shortDescription}
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[450px]">
          {project.tecnologies.map((tech, i) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name} `}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{  opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="text-gray-100 hover:text-primary inline-flex items-center gap-1.5"
          >
            Ver Projeto
            <HiArrowNarrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
