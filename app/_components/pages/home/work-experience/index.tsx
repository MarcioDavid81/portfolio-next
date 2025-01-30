/* eslint-disable prettier/prettier */
import SectionTitle from "@/app/_components/section-title";
import ExperienceItem from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};

const WorkExperience = ({experiences}: WorkExperienceProps) => {
  return (
    <section className="container flex py-16 gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="w-full">
        <SectionTitle subtitle="experiências" title="Experiência Profissional" className="md:sticky md:top-1/2" />

      </div>
      <div className="flex flex-col gap-4">
        {experiences.map(experience => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
