import jsonData from "@/data.json";

const { techs } = jsonData.pages.home.sections.skills.data;

export interface Tech {
  items: {
    name: string;
    img: {
      file: string;
      invertInDarkMode: boolean;
    };
  }[];
  level: number;
}

export type TechKey = keyof typeof techs;

export type DataNode = TechKey | Record<TechKey, DataNode[]>;
