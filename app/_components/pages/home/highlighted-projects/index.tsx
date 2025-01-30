/* eslint-disable prettier/prettier */
import { HorizontalDivider } from "@/app/_components/divider/horizontal";
import SectionTitle from "@/app/_components/section-title";
import ProgectCard from "./project-card";
import { Link } from "@/app/_components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type HighlightedProjectsProps = {
    projects: Project[];
}

const HighlightedProjects = ({projects}: HighlightedProjectsProps) => {
    return ( 
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em Destaque" />
            <HorizontalDivider className="mb-16" />
            {projects.map(project => (
                <div key={project.slug}>
                    <ProgectCard project={project} />
                    <HorizontalDivider className="my-16" />
                </div>
            ))}
            <p className="flex items-center gap-1.5">
                <span className="text-gray-400">Se interessou?</span>
                <Link href="/projects" className="text-gray-100 hover:text-primary inline-flex">
                    Veja todos
                    <HiArrowNarrowRight size={20} />
                </Link>
            </p>
        </section>
     );
}
 
export default HighlightedProjects;