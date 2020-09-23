import { FluidObject } from 'gatsby-image';

export type IProjectTechs = {
  field: string;
  tecnologies: {
    name: string;
    url: string;
  }[];
}[];

export interface IProject extends ProjectTechs {
  title: string;
  fluidImage: FluidObject;
  description: {
    pt: string;
    en: string;
  };
  references: {
    type: 'Github' | 'Netlify';
    url: string;
  }[];
  techsUsed: IProjectTechs;
}
