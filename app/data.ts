type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}
// Define the type for a skill
type Skill = string;

// Define the array of skills
export const Skills: Skill[] = [
  "MERN Stack",
  "Next JS",
  "React Js",
  "Node Js",
  "Express JS",
  "Tailwind",
  "WordPress",
  "Elementor",
  "Redux",
  "Framer Motion",
  "TypeScript",
  "Javascript",
  "Mongo DB",
  "Oracle DB",
  "Git",
  "C++",
  "AWS",
  "Azure 365"
];


export const PROJECTS: Project[] = [

  {
    name: 'Wrapxen Ecommerce',
    description: 'Wix Headless with Next.js and Tailwind CSS',
    link: 'https://wrapxen.vercel.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288735/fmg95xkkxddt5pgbjrwi.png',
    id: 'project2',
  },
  {
    name: 'RomeWheels Car Rental',
    description: 'MERN App With Tailwind CSS and GSAP',
    link: 'https://romewheels.netlify.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288735/zlhqkqh9szjg0iifqvys.png',
    id: 'project3',
  },
  {
    name: 'Aminarts Ecommerce Store',
    description: 'Custom Built Ecommerce Store with Elementor and Lenis on WordPress',
    link: 'https://aminart.talhajeweller.pk/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288735/bs6deswgtpqrifp3w0xe.jpg',
    id: 'project6',
  },
  {
    name: 'Echo Notes',
    description: 'MERN App designed for efficiently taking and managing notes',
    link: 'https://romewheels.netlify.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288736/c5mrdxedasjllddwkcva.png',
    id: 'project4',
  },
  {
    name: 'Flavusion Online Ordering',
    description: 'A React App With Redux, Bootstrap and Firebase',
    link: 'https://flavusion.netlify.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288736/oafrvypqq53tvnwdtpbt.png',
    id: 'project5',
  },
  {
    name: 'Urban Edge Salon',
    description: 'Site designed with React ,Tailwind CSS and GSAP',
    link: 'https://urbanedge.netlify.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288736/rykhkqbvngmqoa4uts1x.png',
    id: 'project7',
  },
  {
    name: 'Tech N Threads Blogs',
    description: 'NextJs SSG with Tailwind CSS, NextAuth and ContentLayer',
    link: 'https://technthread.vercel.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288735/ln69nuqhndsqj4vfge70.png',
    id: 'project8',
  },
  {
    name: 'Anvo Financial Calculator',
    description:
      'Use financial calculators to make smart and rational decisions.',
    link: 'https://anvo.vercel.app/',
    video:
      'https://res.cloudinary.com/dj4h4yls7/video/upload/v1744556301/bkt0b9b2v0im5jhbs5nc.mp4',
    id: 'project9',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Full Stack Developer | Wordpress Developer',
    start: '2023',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Cyberwing.pk',
    title: 'Web Developer Intern',
    start: '2023',
    end: '2024 (3Months)',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Mubashir1920/',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/TheTechGuy_1',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mubashir1902/',
  },
]

export const EMAIL = 'mubashir417@outlook.com'
