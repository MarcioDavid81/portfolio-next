/* eslint-disable prettier/prettier */
import TechBadge from "@/app/_components/tech-badge";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

type ExperienceItemProps = {
  className?: string;
}

const ExperienceItem = ({className}: ExperienceItemProps) => {
  return (
    <div className={cn("grid grid-cols-[40px,1fr] gap-4 md:gap-10", className)}>
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5 ">
          <Image
            src="/images/agropan.webp"
            width={50}
            height={50}
            alt="Logo Agropan"
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.agropan.coop.br"
            className="font-bold text-gray-500 hover:text-primary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Agropan
          </a>
          <h4 className="text-gray-300">Escriturário</h4>
          <span className="text-gray-500">
            out 2002 • mai 2007 • (4 anos e 7 meses)
          </span>
          <p className="text-gray-400">
            Atuei na área administrativa, realizando atendimento ao cliente,
            controle de estoque, organização de documentos, entre outras
            atividades.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[450px] mb-8">
            <TechBadge name="Atendimento ao Cliente" />
            <TechBadge name="Controle de Estoque" />
            <TechBadge name="Faturamento de Grãos" />
            <TechBadge name="Logística" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
