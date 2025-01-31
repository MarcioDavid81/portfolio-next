/* eslint-disable prettier/prettier */

import { KnowTechs, Project } from "./projects"
import type { RichTextContent } from '@graphcms/rich-text-types'
import { WorkExperience } from "./work-experience"

export type Social = {
    iconSvg: string
    url: string
}

export type ProjectPageData = {
    project: Project
  }
  
  export type ProjectsPageData = {
    projects: Project[]
  }
  
  export type ProjectsPageStaticData = {
    projects: {
      slug: string
    }[]
  }

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent;
    }
    tecnologies: KnowTechs[]
    profilePicture: {
        url: string
    }
    social: Social[]
    knowTechs: KnowTechs[]
    highlightProjects: Project[]
}

export type HomePageData = {
    page: HomePageInfo
    workExperiences: WorkExperience[]
}