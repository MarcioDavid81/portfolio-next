/* eslint-disable prettier/prettier */

"use client";
import { HorizontalDivider } from "@/app/_components/divider/horizontal";
import SectionTitle from "@/app/_components/section-title";
import ProgectCard from "./project-card";
import { Link } from "@/app/_components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";
import { motion } from "framer-motion";

type HighlightedProjectsProps = {
  projects: Project[];
};

const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em Destaque" />
      <HorizontalDivider className="mb-16" />
      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProgectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <motion.p
          className="flex items-center gap-1.5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-gray-400">Se interessou?</span>
          <Link
            href="/projects"
            className="text-gray-100 hover:text-primary inline-flex"
          >
            Veja todos
            <HiArrowNarrowRight size={20} />
          </Link>
        </motion.p>
      </div>
    </section>
  );
};

export default HighlightedProjects;
