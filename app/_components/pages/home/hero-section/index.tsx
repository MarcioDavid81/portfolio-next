/* eslint-disable prettier/prettier */
"use client";

import { Button } from "@/app/_components/button";
import { CMSIcon } from "@/app/_components/cms-icon";
import { RichText } from "@/app/_components/rich-text";
import TechBadge from "@/app/_components/tech-badge";
import { HomePageInfo } from "@/app/types/pege-info";
import Image from "next/image";
import {  HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animations";



type HomeSectionProps = {
  homeInfo: HomePageInfo;
}


export const HeroSection = ({homeInfo}: HomeSectionProps) => {

  const handleContactClick = () => {
    const contactForm = document.getElementById("contact-form");
    if(contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
    <section className="w-full lg:h-[875px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-8 lg:pb-{110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div 
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}

        >
          <p className="font-mono">Hello world!</p>
          <div className="txt-animado">
            <span></span>
          </div>
          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {homeInfo.tecnologies.map((tech, i) => (
              <TechBadge
                key={`intro-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{duration: 0.5, delay: i * 0.1}}
              />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 sm:flex-row flex-col">
            <Button className="shadow-button w-max" onClick={handleContactClick}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-primary flex items-center h-20 gap-3 md:text-4xl">
              {homeInfo.social.map((social, index) => (
                <a
                  key={`social-${index}`}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={social.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          exit={{opacity: 0, y: 200, scale: 0.5}}
          transition={{duration: 0.5}}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil Marcio David - Web Developer"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
    </>
  );
};
