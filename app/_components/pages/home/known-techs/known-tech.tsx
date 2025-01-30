/* eslint-disable prettier/prettier */
import { CMSIcon } from "@/app/_components/cms-icon";
import { KnowTechs } from "@/app/types/projects";
import { getRelativeTimeString } from "@/app/utils/get-relative-time";

type KnownTechProps = {
    tech: KnowTechs
}

const KnownTech = ({tech}: KnownTechProps) => {

    const relativeTime = getRelativeTimeString(new Date(tech.startDate), "pt-BR").replace("há", "");

    return ( 
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-primary hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                <CMSIcon icon={tech.iconSvg} />
            </div>
            <span className="text-xs mt-2">
                {relativeTime} de Experiência
            </span>
        </div>
     );
}
 
export default KnownTech;