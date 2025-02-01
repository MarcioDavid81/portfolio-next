/* eslint-disable prettier/prettier */
"use client"

import { Link } from "@/app/_components/link";
import SectionTitle from "@/app/_components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";

const PageIntroduction = () => {
    return ( 
        <section className="w-full lg:h-[875px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-2 pb-10 sm:pb-32 py-8 lg:pb-{110px]">
            <SectionTitle subtitle="projetos" title="Meus Projetos" className="text-center items-center [&>h3]:text-4xl" />
            <motion.div
                className="flex flex-col justify-center items-center"
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 100}}
                transition={{duration: 0.6}}
            >
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm md:text-base">
                    Aqui você encontra uma lista de projetos que desenvolvi ao longo da minha carreira. Navegue à vontade e conheça um pouco mais sobre o meu trabalho.
                </p>
                <motion.div
                    initial={{opacity:0, x:100}}
                    whileInView={{opacity:1, x:0}}
                    exit={{opacity:0, x:100}}
                    transition={{duration:0.6}}
                >
                    <Link href="/" className="text-center mx-auto w-[200px] py-2 px-4 bg-secondary border border-primary text-primary rounded-md hover:bg-primary hover:text-secondary transition-colors duration-300 ease-in-out">
                        <HiArrowNarrowLeft size={20} />
                        Voltar para Home
                    </Link>
                </motion.div>
            </motion.div>
        </section>
     );
}
 
export default PageIntroduction;