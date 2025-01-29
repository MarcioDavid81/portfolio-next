/* eslint-disable prettier/prettier */
import SectionTitle from "@/app/_components/section-title";
import ExperienceItem from "./experience-item";

const WorkExperience = () => {
  return (
    <section className="container flex py-16 gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="w-full">
        <SectionTitle subtitle="experiências" title="Experiência Profissional" className="md:sticky md:top-1/2" />

      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};

export default WorkExperience;
