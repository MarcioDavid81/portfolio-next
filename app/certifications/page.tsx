/* eslint-disable prettier/prettier */
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "../_components/link";
import SectionTitle from "../_components/section-title";

export const metadata = {
  title: "Certificações",
}

const Certifications = () => {
  return (
    <section>
      <div className="w-full lg:h-[875px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-2 pb-10 sm:pb-32 py-8 lg:pb-{110px]">
        <SectionTitle subtitle="certificações" title="Certificações" className="text-center items-center [&>h3]:text-4xl" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm md:text-base">
            Aqui você encontra uma lista de certificados que comprovam a minha dedicaçãoao longo da
            minha carreira.
          </p>
          <Link
            href="/"
            className="text-center mx-auto w-[200px] py-2 px-4 bg-secondary border border-primary text-primary rounded-md hover:bg-primary hover:text-secondary transition-colors duration-300 ease-in-out"
          >
            <HiArrowNarrowLeft size={20} />
            Voltar para Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
