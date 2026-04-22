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
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: "/projects/quiz.png",
    link: "https://abdullahwajid-sudo.github.io/QuizApp/",
  },
  {
    id: 2,
    title: "ToDo App",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/projects/todo.png",
    link: "https://to-do-app-phi-ten-47.vercel.app/",
  },
  {
    id: 3,
    title: "speach to text app",
    technologies: ["Python", "Flask", "OpenAI API"],
    image: "/projects/quiz.png",
    link: "https://socialmedia.abdullahwajid.com",
  },
  {
    id: 4,
    title: "Chatbot Application",
    technologies: ["Python", "Flask", "OpenAI API"],
    image: "/projects/todo.png",
    link: "https://socialmedia.abdullahwajid.com",
  },
];
