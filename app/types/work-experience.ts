/* eslint-disable prettier/prettier */


import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnowTechs } from './projects'

export type WorkExperience = {
  companyLogo: {
    url: string
  }
  role: string
  company: string
  companyUrl: string
  startDate: string
  endDate: string
  tecnologies: KnowTechs[]
  description: {
    raw: RichTextContent
  }
}