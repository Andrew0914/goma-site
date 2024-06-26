export interface JobMeta {
  urlCompany: string;
  technologies: string[];
}

export const jobs: Map<string, JobMeta> = new Map();

jobs.set("bunsan", {
  urlCompany: "https://www.bunsan.io",
  technologies: [
    "android",
    "angular",
    "elixir",
    "javascript",
    "typescript",
    "react",
    "vuejs",
    "flutter",
    "postgresql",
    "html5",
    "css3",
  ],
});

jobs.set("myself", {
  urlCompany: "https://x.com/Andrew_GMx",
  technologies: ["wordpress", "javascript", "php", "mysql", "html5", "css3"],
});

jobs.set("devowrms", {
  urlCompany: "https://github.com/DevWorms",
  technologies: ["android", "javascript", "php", "mysql", "html5", "css3"],
});

jobs.set("wellcom", {
  urlCompany: "https://wellcom.com.mx/",
  technologies: ["java", "javascript", "android", "html5", "css3"],
});

jobs.set("siweb", {
  urlCompany: "https://www.solucionesinformaticasweb.com.mx/",
  technologies: ["java", "javascript", "mysql", "html5", "css3"],
});

export interface Skill {
  name: string;
  icon: string;
  projects: number;
  courses: number;
}

export const skills: Skill[] = [
  {
    name: "javascript",
    icon: "javascript",
    projects: 8,
    courses: 2,
  },
  {
    name: "typescript",
    icon: "typescript",
    projects: 4,
    courses: 2
  },
  {
    name: "vuejs",
    icon: "vuejs",
    projects: 3,
    courses: 9,
  },
  {
    name: "react",
    icon: "react",
    projects: 2,
    courses: 2,
  },
  {
    name: "flutter",
    icon: "flutter",
    projects: 1,
    courses: 0,
  },
  {
    name: "elixir",
    icon: "elixir",
    projects: 0,
    courses: 5,
  },

  {
    name: "postgresql",
    icon: "postgresql",
    projects: 0,
    courses: 2,
  },
  {
    name: "html5",
    icon: "html5",
    projects: 8,
    courses: 2,
  },
  {
    name: "css3",
    icon: "css3",
    projects: 8,
    courses: 2,
  },

];
