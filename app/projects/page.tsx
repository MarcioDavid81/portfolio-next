/* eslint-disable prettier/prettier */

import PageIntroduction from "../_components/pages/projects/page-introduction";
import ProjectsList from "../_components/pages/projects/projects-list";
import { ProjectsPageData } from "../types/pege-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        tecnologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    60
  )
}

const Projects = async () => {

  const { projects } = await getPageData();
  console.log(projects)

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  );
};

export default Projects;
