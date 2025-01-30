/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
import { RichText } from "@/app/_components/rich-text";
import TechBadge from "@/app/_components/tech-badge";
import { cn } from "@/app/lib/utils";
import { WorkExperience } from "@/app/types/work-experience";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import Image from "next/image";

type ExperienceItemProps = {
  experience: WorkExperience;
  className?: string;
}

const ExperienceItem = ({className, experience}: ExperienceItemProps) => {

  const startDate = new Date(experience.startDate);
  const farmatedStartDate = format(startDate, "MMM yyyy", {locale: ptBR});
  const formatedEndDate = experience.endDate ? format(new Date(experience.endDate), "MMM yyyy", {locale: ptBR}) : "O Momento";

  const end = experience.endDate ? new Date(experience.endDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  /*Função para formatar o tempo de serviço */
  const formattedDuration =
  years > 0
    ? `${years} ano${years > 1 ? 's' : ''}${
        monthsRemaining > 0
          ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
          : ''
      }`
    : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <div className={cn("grid grid-cols-[40px,1fr] gap-4 md:gap-10", className)}>
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5 ">
          <Image
            src={experience.companyLogo.url}
            width={50}
            height={50}
            alt={`Logo da empresa ${experience.company}`}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.companyUrl}
            className="font-bold text-gray-500 hover:text-primary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            {experience.company}
          </a>
          <h4 className="text-gray-300">{experience.role}</h4>
          <span className="text-gray-500">
            {farmatedStartDate} - {formatedEndDate} - {formattedDuration}
          </span>
          <div className="text-gray-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[450px] mb-8">
          {experience.tecnologies.map(tech => (
            <TechBadge key={`experience-${experience.company}-tech-${tech.name}`} name={tech.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
