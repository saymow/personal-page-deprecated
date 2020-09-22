export type IProjectTechs = {
  field: string;
  tecnologies: {
    name: string;
    url: string;
  }[];
}[];

export interface IProject extends ProjectTechs {
  title: string;
  thumbnailUrl: string;
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
