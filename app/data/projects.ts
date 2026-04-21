export interface Projects {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  link: string;
}

export const projects: Projects[] = [
  {
    id: 1,
    title: "Quiz APP",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/one.jpg",
    link: "https://abdullahwajid.com",
  },
  {
    id: 2,
    title: "ToDo App",
    technologies: ["Next.js", "Stripe API", "MongoDB"],
    image: "/projects/two.jpg",
    link: "https://ecommerce.abdullahwajid.com",
  },
  {
    id: 3,
    title: "speach to text app",
    technologies: ["Python", "Flask", "OpenAI API"],
    image: "/projects/three.jpg",
    link: "https://socialmedia.abdullahwajid.com    ",
  },
  {
    id: 4,
    title: "Chatbot Application",
    technologies: ["Python", "Flask", "OpenAI API"],
    image: "/projects/three.jpg",
    link: "https://socialmedia.abdullahwajid.com    ",
  },
];
