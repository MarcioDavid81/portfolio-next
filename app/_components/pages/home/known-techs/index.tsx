/* eslint-disable prettier/prettier */
"use client";
import SectionTitle from "@/app/_components/section-title";
import KnownTech from "./known-tech";
import { HorizontalDivider } from "@/app/_components/divider/horizontal";
import { KnowTechs } from "@/app/types/projects";
import { motion } from "framer-motion";

type KnowTechsProps = {
  techs: KnowTechs[];
};

const KnownTechs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Tecnologias Conhecidas" />
      <HorizontalDivider />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.05, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
