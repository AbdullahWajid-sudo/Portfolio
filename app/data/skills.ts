export interface Skill {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    color: "#f0db4f",
    value: 90,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    color: "#007acc",
    value: 80,
  },
  {
    id: 3,
    name: "React",
    icon: "/icons/react.svg",
    color: "#61dafb",
    value: 80,
  },
  {
    id: 4,
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    color: "#000000",
    value: 70,
  },

  {
    id: 5,
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    color: "#68a063",
    value: 75,
  },
  {
    id: 6,
    name: "Express.js",
    icon: "/icons/expressjs.svg",
    color: "#000000",
    value: 70,
  },
  {
    id: 7,
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
    color: "#47a24b",
    value: 70,
  },
  {
    id: 8,
    name: "GraphQL",
    icon: "/icons/graphql.svg",
    color: "#e10098",
    value: 60,
  },

  {
    id: 9,
    name: "Git",
    icon: "/icons/git.svg",
    color: "#f34f29",
    value: 85,
  },
];
