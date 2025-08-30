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
    id: 'project1',
  },
  {
    name: 'RomeWheels Car Rental',
    description: 'MERN App With Tailwind CSS and GSAP',
    link: 'https://romewheels.netlify.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288735/zlhqkqh9szjg0iifqvys.png',
    id: 'project2',
  },
  {
    name: "Core Education ",
    description: "A NextJs Site Built with TailwindCss and Motion.dev",
    link: "https://coreeducationpk.vercel.app/",
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1750070035/coreedu_bdxdns.png',
    id: 'project3',
  },
  {
    name: "Bayaan Official",
    description: "Bayaan Official Band Website with Elementor",
    link: "https://bayaanofficial.com/",
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288737/vmqxlr2h7bqueb535me2.png',
    id: 'project4',
  },
  {
    name: 'Aminarts Ecommerce Store',
    description: 'Custom Built Ecommerce Store with Elementor and Lenis on WordPress',
    link: 'https://aminart.talhajeweller.pk/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288735/bs6deswgtpqrifp3w0xe.jpg',
    id: 'project5',
  },
  {
    name: 'Echo Notes',
    description: 'MERN App designed for efficiently taking and managing notes',
    link: 'https://echonote.netlify.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288736/c5mrdxedasjllddwkcva.png',
    id: 'project6',
  },
  {
    name: 'Hamsburger',
    description: 'MERN Stack App With Real Time Dashboard For Orders',
    link: 'https://hamsburger.netlify.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1756552927/Screenshot_30-8-2025_16229_hamsburger.netlify.app_kaaked.jpg',
    id: 'project7',
  },
  {
    name: 'Urban Edge Salon',
    description: 'Site designed with React ,Tailwind CSS and GSAP',
    link: 'https://urbanedge.netlify.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288736/rykhkqbvngmqoa4uts1x.png',
    id: 'project8',
  },
  {
    name: 'Tech N Threads Blogs',
    description: 'NextJs SSG with Tailwind CSS, NextAuth and ContentLayer',
    link: 'https://technthread.vercel.app/',
    image: 'https://res.cloudinary.com/dj4h4yls7/image/upload/v1745288735/ln69nuqhndsqj4vfge70.png',
    id: 'project9',
  },
  {
    name: 'Anvo Financial Calculator',
    description: 'Use financial calculators to make smart and rational decisions.',
    link: 'https://anvo.vercel.app/',
    video: 'https://res.cloudinary.com/dj4h4yls7/video/upload/v1744556301/bkt0b9b2v0im5jhbs5nc.mp4',
    id: 'project10',
  },


]

export const WORK_EXPERIENCE: WorkExperience[] = [
  // {
  //   company: 'Freelance',
  //   title: 'MERN Stack | NextJs | Wordpress Developer',
  //   start: '2023',
  //   end: 'Present',
  //   id: 'work1',
  // },
  // {
  //   company: 'Techlio Pvt Ltd',
  //   title: 'Associate Software Engineer',
  //   start: '2025',
  //   end: 'Present',
  //   id: 'work1',
  // },
  {
    company: 'Quality Resource Pvt Ltd',
    title: 'Web Developer',
    start: 'June 2025',
    end: 'August 2025',
    id: 'work2',
  },
  {
    company: 'Cyberwing Solutions',
    title: 'Web Developer Intern',
    start: '2023',
    end: '2024 (3Months)',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'React’s `useMemo` — What, Why, and When to Use It',
    description: 'How To Use useMemo in Your React App to Optimize the Performance',
    link: '/blog/when-and-why-you-need-useMemo',
    uid: 'blog-1',
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
