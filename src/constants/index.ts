import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sedulousFurniture,
  historyarchiveapp,
  ecommerceapp,
  threejs,
  iba,
  mindstorm,
  engro,
  creditbook,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI and ML Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Software Developer",
    company_name: "CreditBook",
    icon: creditbook,
    iconBg: "#E6DEDD",
    date: "July 2022 - June 2023",
    points: [
      "Responsible for automation of push notification, push template and in-app messages by integrating MoEngage sdk using NestJS.",
      "Integration of OTPless SDK, reducing login and sign-up cost, by at least a million PKR per month.",
      "Conducted and documented 5 A/B tests using Firebase, analyzing user behavior and improving user conversion rates up to 18.5% for some features.",
      "Developed ReactJS web app for loan management, enhancing operational efficiency.",
    ],
  },
  {
    title: "Game Developer Intern",
    company_name: "Mindstorm Studios",
    icon: mindstorm,
    iconBg: "#E6DEDD",
    date: "August 2021 - October 2021",
    points: [
      "Participated in summer Game Jam 2021 and develop a 3D hyper-casual game (Package Collector) in Unity3d using C#.",
    ],
  },
  {
    title: "Engro IT Intern",
    company_name: "Engro Corp.",
    icon: engro,
    iconBg: "#ffffff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implementation and testing of IdeaHub (one solution for video conferencing) in multiple locations of Engro Corp regional offices.",
      "Training of IT staff on how to use and troubleshoot the new system.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "IBA, Karachi",
    icon: iba,
    iconBg: "#E6DEDD",
    date: "August 2021 - May 2022",
    points: [
      "Conducted tutorials, quizzes, evaluated the performance of 70 students and resolved individual queries for the courses(Data Structures and Operating Systems).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce mobile app",
    description:
      "Mobile-based application that allows users to search, purchase, add to cart the products they desire to purchase from a centralized vendor.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceapp,
    source_code_link: "https://github.com/M-Ali-Alam",
  },
  {
    name: "Sedulous Furnishing",
    description:
      "Mobile base gamed built using unity that enables users to Build their own furnitures by sticking pre built parts.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "mobile game development",
        color: "pink-text-gradient",
      },
    ],
    image: sedulousFurniture,
    source_code_link: "https://github.com/MZX00/sedulus-furnishing-game",
  },
  {
    name: "History Archive mobile app",
    description:
      "A mobile application platform used to save the historical events. User can create new events and save them in the app.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: historyarchiveapp,
    source_code_link: "https://github.com/M-Ali-Alam/HistoryArchiveApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
