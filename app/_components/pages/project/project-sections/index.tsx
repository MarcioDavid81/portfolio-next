/* eslint-disable prettier/prettier */

import Image from "next/image";

const sections = [
    {
        title: "Login",
        image: "/images/schedule.png",
    },
    {
        title: "Dashboard",
        image: "/images/schedule.png",
    },
    {
        title: "Profile",
        image: "/images/schedule.png",
    },
    {
        title: "Settings",
        image: "/images/schedule.png",
    },
    {
        title: "Logout",
        image: "/images/schedule.png",
    },
]

const ProjectSections = () => {
    return ( 
        <section className="container my-12 md-my-32 flex flex-col gap-8 md-gap-32">
            {sections.map(section => (
                <div key={section.title} className="flex flex-col items-center gap-6 md-gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl md-text-3xl font-medium text-gray-300 mb-8">{section.title}</h2>
                            <Image src={section.image} alt={section.title} width={1080} height={672} className="w-full aspect-auto rounded-lg object-cover" unoptimized />
                        </div>
                </div>
            ))}
        </section>
     );
}
 
export default ProjectSections;