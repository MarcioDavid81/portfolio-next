/* eslint-disable prettier/prettier */
import { RichTextContent } from '@graphcms/rich-text-types'


export type KnowTechs = {
    iconSvg: string;
    name: string;
    startDate: string;
}

export type ProjectSection = {
    title: string;
    image: {
        url: string;
    }
}

export type Project = {
    slug: string;
    thumbnail: {
        url: string;
    }
    title: string;
    shortDescription: string;
    tecnologies: KnowTechs[]
    pageThumbnail: {
        url: string;
    }
    sections: ProjectSection[]
    description: {
        raw: RichTextContent;
        text: string;
    }
    liveProjectUrl?: string;
    gthubUrl?: string;
}