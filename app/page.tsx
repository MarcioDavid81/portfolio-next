/* eslint-disable prettier/prettier */
import { HeroSection } from "./_components/pages/home/hero-section";
import HighlightedProjects from "./_components/pages/home/highlighted-projects";
import KnownTechs from "./_components/pages/home/known-techs";
import WorkExperience from "./_components/pages/home/work-experience";
import { HomePageData } from "./types/pege-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

export const metadata = {
  title: "Home",
}

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
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          tecnologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        company
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        tecnologies {
          name
        }
      }
    }
  `;

  return fetchHygraphQuery(query, 60);
};

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knowTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
