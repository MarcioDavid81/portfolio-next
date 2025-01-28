/* eslint-disable prettier/prettier */
"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import SectionTitle from "../section-title";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section className="py-16 px-6 md:py-34 flex item justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          className="items-center text-center"
          subtitle="contatos"
          title="Vamos trabalhar Juntos?"
        />
        <motion.form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-4"
          {...fadeUpAnimation}
        >
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-primary"
            {...register('name')}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-primary"
            {...register('email')}
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-primary"
            {...register('message')}
          />
          <div className="relative w-max mx-auto mt-6">
            <Button className="z-[2] relative shadow-button">
              Enviar Mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-primary blur-2xl opacity-20" />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
