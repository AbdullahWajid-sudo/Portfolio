export interface Projects {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  link: string;
}

export const projects: Projects[] =[
    {
        id: 1,
        title: "Personal Portfolio Website",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        image: "/projects/portfolio.png",
        link: "https://abdullahwajid.com",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        technologies: ["Next.js", "Stripe API", "MongoDB"],
        image: "/projects/ecommerce.png",
        link: "https://ecommerce.abdullahwajid.com",
    },
    {
        id: 3,
        title: "Social Media App",
        technologies: ["React", "Node.js", "Socket.io"],
        image: "/projects/social-media.png",
        link: "https://socialmedia.abdullahwajid.com    ",
    },
];