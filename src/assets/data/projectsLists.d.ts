// src/assets/data/projectsList.d.ts

import { ProjectType } from "../../components/ProjectsSection/ProjectsSection";

declare module "../../assets/data/projectsList" {
    const projectsList: ProjectType[];
    export { projectsList };
}