import type { IconProp } from "@fortawesome/react-fontawesome";

export type Next_Page_Url = string;

export type Tech = {
  name: string,
  icon: string
}

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'
  | 'no-color';

export interface IProject {
  title: string;
  year: number;
  summary: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  sourceCode?: string;
}

export type Social = {
  name: string,
  url: string,
  icon: IconProp,
}
