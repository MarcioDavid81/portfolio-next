/* eslint-disable prettier/prettier */
import Image from "next/image";

const ProjectCard = () => {
    return ( 
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:shadow-md hover:shadow-primary transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 group">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    src="/images/schedule.png"
                    alt="Project FSW Barber"
                    width={380}
                    height={200}
                    unoptimized
                    className="w-full h-full object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
                />
            </div>
            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-lg text-gray-50/90 group-hover:text-primary">FSW Barber</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">Projeto desenvolvido durante a Full Stack Week, promovida pelo professor Felipe Rocha, da escola de programação Full Stack Club</p>
                <span className="text-gray-300 text-xs font-medium block mt-auto truncate" title="NodeJS, PostgreSQL, Prisma, Neon DB, NextJS, React, TypeScript, Tailwind CSS, Shadcn UI, Next Auth">NodeJS, PostgreSQL, Prisma, Neon DB, NextJS, React, TypeScript, Tailwind CSS, Shadcn UI, Next Auth</span>
            </div>
        </div>
     );
}
 
export default ProjectCard;