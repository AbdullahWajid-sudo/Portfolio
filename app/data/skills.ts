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
    value: 80,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    color: "#007acc",
    value: 60,
  },
  {
    id: 3,
    name: "React",
    icon: "/icons/react.svg",
    color: "#61dafb",
    value: 70,
  },
  {
    id: 4,
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    color: "#f34f29",
    value: 70,
  },

  {
    id: 5,
    name: "Python",
    icon: "/icons/python.svg",
    color: "#306998",
    value: 75,
  },
  {
    id: 6,
    name: "Prisma",
    icon: "/icons/prisma.svg",
    color: "#ffffff",
    value: 70,
  },
  {
    id: 7,
    name: "Firebase",
    icon: "/icons/firebase.svg",
    color: "#F78C00",
    value: 60,
  },

  {
    id: 8,
    name: "Supabase",
    icon: "/icons/supabase.svg",
    color: "#3ECF8E",
    value: 85,
  },
  {
    id: 9,
    name: "Git / Github",
    icon: "/icons/git.svg",
    color: "#78258C",
    value: 85,
  },
  {
    id: 10,
    name: "NumPy",
    icon: "/icons/numpy.svg",
    color: "#4C75CF",
    value: 80,
  },
  {
    id: 11,
    name: "Pandas",
    icon: "/icons/pandas.svg",
    color: "#130754",
    value: 80,
  },
  {
    id: 12,
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    color: "#68a063",
    value: 55,
  },
];
