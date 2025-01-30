/* eslint-disable prettier/prettier */

import { KnowTechs } from "./projects"
import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
    iconSvg: string
    url: string
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
}

export type HomePageData = {
    page: HomePageInfo
}