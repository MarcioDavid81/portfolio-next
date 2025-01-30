/* eslint-disable prettier/prettier */

import { Button } from "@/app/_components/button";
import SectionTitle from "@/app/_components/section-title";
import TechBadge from "@/app/_components/tech-badge";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from 'react-icons/fi'
import { Link } from "@/app/_components/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            "url(/images/hero.png) no-repeat center/cover, url(/images/hero-bg.png) no-repeat center/cover",
        }}
      />
      <SectionTitle
        title="Barber Schedule"
        subtitle="projeto"
        className="text-center items-center sm:[&>h3]:text-4xl"
        />
        <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Barber Schedule é uma plataforma de agendamento de horários para barbearias. O projeto foi desenvolvido com o intuito de facilitar a vida dos barbeiros e dos clientes, permitindo que os clientes possam agendar horários com os barbeiros de sua preferência, e os barbeiros possam gerenciar seus horários de forma mais eficiente.
        </p>
        <div className="flex flex-wrap gap-2 w-full items-center justify-center max-w-[330px]">
            <TechBadge name="NodeJS" />
            <TechBadge name="PostgreSQL" />
            <TechBadge name="Prisma" />
            <TechBadge name="NextJS" />
            <TechBadge name="Chakra UI" />
        </div>
        <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
            <a href="https://github.com/MarcioDavid81/barberschedule" target="_blank" rel="noreferrer">
                <Button className="min-w-[180px]">
                    <TbBrandGithub size={20} className="mr-2" />
                    Repositório
                </Button>
            </a>
            <a href="https://barberschedule.vercel.app/" target="_blank" rel="noreferrer">
                <Button className="min-w-[180px]">
                    <FiGlobe size={20} className="mr-2" />
                    Projeto Online
                </Button>
            </a>
        </div>
        <Link href="/projects" className="text-gray-400 text-sm sm:text-base">
            <HiArrowNarrowLeft size={20} />
            Voltar para projetos
        </Link>
    </section>
  );
};

export default ProjectDetails;
