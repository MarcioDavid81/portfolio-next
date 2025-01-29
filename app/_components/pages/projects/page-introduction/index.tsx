/* eslint-disable prettier/prettier */


import { Link } from "@/app/_components/link";
import SectionTitle from "@/app/_components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";

const PageIntroduction = () => {
    return ( 
        <section className="w-full lg:h-[875px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-2 pb-10 sm:pb-32 py-8 lg:pb-{110px]">
            <SectionTitle subtitle="projetos" title="Meus Projetos" className="text-center items-center [&>h3]:text-4xl" />
            <div>
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm md:text-base">
                    Aqui você encontra uma lista de projetos que desenvolvi ao longo da minha carreira. Navegue à vontade e conheça um pouco mais sobre o meu trabalho.
                </p>
                <Link href="/" className="text-center block mx-auto w-[200px] py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300 ease-in-out">
                    Voltar para Home
                    <HiArrowNarrowLeft size={20} />
                </Link>
            </div>
        </section>
     );
}
 
export default PageIntroduction;