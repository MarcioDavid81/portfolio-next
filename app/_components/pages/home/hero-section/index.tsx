import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-{110px]">
            <div className="container flex items-start gap-4 justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Marcio David</h2>
                    <p className="text-gray-400 pt-6 text-sm sm:text-base">Estudante do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas na Faculdade Cruzeiro do Sul.</p>

                    <p className="text-gray-400 text-sm sm:text-base">Determinado e comprometido em adquirir as competências necessárias para me destacar neste novo campo e contribuir de forma significativa para o setor de tecnologia, estou sempre em busca de novos desafios e conhecimentos. Alem da faculdade, já concluí os cursos de HTML 5, CSS 3 e de JavaScript, do professor Gustavo Guanabara, ambos em suas versões básicas.</p>

                    <p className="text-gray-400 text-sm sm:text-base">
                    Além dos cursos citados, atualmente estudo JavaScript avançado, Bootstrap e UI/UX Design na Escola de Cursos Origamid do professor André Rafael.
                    E por curiosidade, estou estudando Angular 17.
                    </p>

                    <p className="text-gray-400 text-sm sm:text-base pb-6">Seja bem vindo ao meu portfólio de projetos!</p>
                    <div>
                        techs
                    </div>
                    <div>
                        contato
                    </div>
                </div>
                <Image 
                    width={400}
                    height={400}
                    src="/images/marcio.jpeg"
                    alt="profile-pic"
                    className="rounded-md"
                />
            </div>
        </section>
    )
}