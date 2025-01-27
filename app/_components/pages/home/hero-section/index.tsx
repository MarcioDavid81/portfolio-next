import { Button } from "@/app/_components/button";
import TechBadge from "@/app/_components/tech-badge";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-8 lg:pb-{110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono">Hello world!</p>
          <div className="txt-animado">
            <span></span>
          </div>
          <p className="text-gray-400 pt-6 text-sm sm:text-base">
            Estudante do Curso Superior de Tecnologia em Análise e
            Desenvolvimento de Sistemas na Faculdade Cruzeiro do Sul.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Determinado e comprometido em adquirir as competências necessárias
            para me destacar neste novo campo e contribuir de forma
            significativa para o setor de tecnologia, estou sempre em busca de
            novos desafios e conhecimentos. Alem da faculdade, já concluí os
            cursos de HTML 5, CSS 3 e de JavaScript, do professor Gustavo
            Guanabara, ambos em suas versões básicas.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Além dos cursos citados, atualmente estudo JavaScript avançado,
            Bootstrap e UI/UX Design na Escola de Cursos Origamid do professor
            André Rafael. E por curiosidade, estou estudando Angular 17.
          </p>

          <p className="text-gray-400 text-sm sm:text-base pb-6">
            Seja bem vindo ao meu portfólio de projetos!
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <TechBadge  key={index} name="JavaScript" />
            ))}
          </div>
          <div className="mt-5">
            <Button>Entre em contato</Button>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/marcio.jpeg"
          alt="Foto de perfil Marcio David - Web Developer"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
    <section>
        <div className="container">
            <h2>Projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card">
                <Image
                width={400}
                height={400}
                src="/images/marcio.jpeg"
                alt="profile-pic"
                className="rounded-md"
                />
                <h3>Projeto 1</h3>
                <p>Descrição do projeto 1</p>
            </div>
            <div className="card">
                <Image
                width={400}
                height={400}
                src="/images/marcio.jpeg"
                alt="profile-pic"
                className="rounded-md"
                />
                <h3>Projeto 2</h3>
                <p>Descrição do projeto 2</p>
            </div>
            <div className="card">
                <Image
                width={400}
                height={400}
                src="/images/marcio.jpeg"
                alt="profile-pic"
                className="rounded-md"
                />
                <h3>Projeto 3</h3>
                <p>Descrição do projeto 3</p>
            </div>
            </div>
        </div>
    </section>
    </>
  );
};
