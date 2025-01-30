/* eslint-disable prettier/prettier */
import { HeroSection } from "./_components/pages/home/hero-section";
import HighlightedProjects from "./_components/pages/home/highlighted-projects";
import KnownTechs from "./_components/pages/home/known-techs";
import WorkExperience from "./_components/pages/home/work-experience";
import { HomePageData } from "./types/pege-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        tecnologies {
          name
        }
        profilePicture {
          url
        }
        social {
          url
          iconSvg
        }
        knowTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
}
