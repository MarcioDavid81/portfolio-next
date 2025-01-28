import { Link } from "@/app/_components/link";
import TechBadge from "@/app/_components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="w-full h-full">
        <Image
          src="/images/ck1.webp"
          alt="Thumbnail do projeto Cookies Kuk's"
          width={420}
          height={304}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="font-mono flex items-center font-medium gap-3 text-lg text-gray-50">
          <span className="text-primary">#</span>Cookies Kuk's
        </h3>
        <p className="text-gray-400 my-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi,
          sit similique cumque animi asperiores, repellat eligendi dolor
          perspiciatis repudiandae corporis! Accusantium corrupti dicta
          reiciendis, blanditiis, soluta hic voluptates nam fuga ex provident
          aspernatur delectus autem exercitationem sint similique voluptate
          quasi? Neque saepe consequuntur delectus molestiae explicabo sint
          error veritatis.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[450px]">
          <TechBadge name="React" />
          <TechBadge name="Styled Components" />
          <TechBadge name="Framer Motion" />
          <TechBadge name="GSap" />
        </div>
        <Link href="/projects/cookies-kuk's">
            Ver Projeto
            <HiArrowNarrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
