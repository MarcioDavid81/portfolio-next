/* eslint-disable prettier/prettier */

import { ProjectSection } from "@/app/types/projects";
import Image from "next/image";

type ProjectSectionProps = {
    section: ProjectSection[]
}


const ProjectSections = ({section}: ProjectSectionProps) => {
    return ( 
        <section className="container my-12 md-my-32 flex flex-col gap-8 md-gap-32">
            {section?.map(leite => (
                <div key={leite.title} className="flex flex-col items-center gap-6 md-gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl md-text-3xl font-medium text-gray-300 mb-8">{leite.title}</h2>
                            <Image src={leite.image.url} alt={leite.title} width={1080} height={672} className="w-full aspect-auto rounded-lg object-cover" unoptimized />
                        </div>
                </div>
            ))}
        </section>
     );
}
 
export default ProjectSections;