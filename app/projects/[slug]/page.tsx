/* eslint-disable prettier/prettier */

import ProjectDetails from "@/app/_components/pages/project/project-details";
import ProjectSections from "@/app/_components/pages/project/project-sections";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/pege-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectProps = {
    params: {
        slug: string
    }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
    const query = `query MyQuery {
        project(where: {slug: "${slug}"}) {
          pageThumbnail {
            url
          }
          thumbnail {
            url
          }
          sections {
            title
            image {
              url
            }
          }
          title
          shortDescription
          description {
            raw
            text
          }
          tecnologies {
            name
          }
          liveProjectUrl
          gthubUrl
        }
      }
      `

  return fetchHygraphQuery(
    query,
    60
  )
}



const Project = async ({params: {slug}}: ProjectProps) => {

    const  {project}  = await getProjectDetails(slug)
    console.log(project)
    if(!project.title) return notFound()
    return ( 
        <>
            <ProjectDetails project={project} />
            <ProjectSections sections={project.sections} />
        </>
     );
}

// export async function generetaStaticParams() {
//     const query = `
//       query ProjectsSlugQuery(){
//         projects (first: 100){
//           slug
//         }
//       }
//     `
//     const {projects} = await fetchHygraphQuery<ProjectsPageStaticData>(query)

//     return projects

// } 

// eslint-disable-next-line spaced-comment
/*SEO*/
export async function generateMetadata({params:{slug}}: ProjectProps): Promise<Metadata> {
    const data = await getProjectDetails(slug)
    const project = data.project;

    return {
      title: project.title,
      description: project.description.text,
      openGraph: {
        images: [
          {
            url: project.thumbnail.url,
            width: 1200,
            height: 630,
          }
        ]
      }
    }
}
export default Project;