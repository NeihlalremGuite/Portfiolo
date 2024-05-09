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
    java,
    next,
    flashkart,
    admin,
    weather,
    clipshare,
    threejs,
    wipro,
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
        id: "project",
        title: "Project",
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Structure and Algorithm",
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
      name: "Java",
      icon: java,
    },
    {
      name: "Next",
      icon: next,
    },
  ];
  
  const experiences = [
    {
      title: "Associate Analyst",
      company_name: "Wipro Limited",
      icon: wipro,
      iconBg: "#383E56",
      date: "Aug 2021 - Aug 2023",
      points: [
        "Guided a team of 4 individuals, providing clear guidance, fostering collaboration, and monitoring progress to successfully achieve project goals and increasing teamwork efficiency.",
        "Utilized SQL database optimization techniques resulting in a 50% increase in efficiency.",
        "Initiated a project transforming workflows, achieving an 80% productivity surge. Implemented automated critical data analysis, reducing processing time by 50% using tools like Jira, HRO Workbench, Bluezone.",
        "Participating in code reviews and providing constructive feedback to other tester.",
      ],
    },
    {
      title: "Setup Configuration Specialist",
      company_name: "Wipro Limited",
      icon: wipro,
      iconBg: "#383E56",
      date: "Feb 2021 - Jul 2021",
      points: [
        "Provided support for major and minor issues on daily basis.",
        "Revamped the change order system, overseeing UI modifications and executing system configuration file updates, achieving a 40% efficiency boost and 25% error reduction in 3 months.",
      ],
    },
    
    
  ];
  

  
  const projects = [
    {
      name: "Weather Application",
      description:
        "Users can enter any location and see the current weather. This is created with the help of openweathermap API.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/NeihlalremGuite/weather-app",
      live_code_link: "https://snazzy-gaufre-2e1fc2.netlify.app/",
      
    },
    {
      name: "ClipShare",
      description:
        "Web-based platform that allows users to share videos online, upload new videos in their account, comments or like other videos posted by other users.",
      tags: [
        {
          name: "react",
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
      image: clipshare,
      source_code_link: "https://github.com/NeihlalremGuite/ClipShare/tree/main",
      live_code_link: "https://clipshare-1.onrender.com/",
      
    },
    {
      name: "FlashKart",
      description:
        "Online e-commerce platform where users will be able to browse products, filter based on their requirements and finally make a purchase.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
      ],
      image: flashkart,
      source_code_link: "https://github.com/NeihlalremGuite/e-commerce-store",
      live_code_link: "https://e-commerce-store-liard.vercel.app/",
    },
    {
      name: "FlashKart Admin Dashboard",
      description:
        "This is an admin dashboard for the FlashKart e-commerce web apllications where admin can see the revenue, modify products from store and can also see the orders or purchase made by the customer.",
      tags: [
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
        {
          name: "Prisma",
          color: "green-text-gradient",
        },
        {
          name: "PlanetScale",
          color: "pink-text-gradient",
        },
      ],
      image: admin,
      source_code_link: "https://github.com/NeihlalremGuite/e-commerce-admin",
      live_code_link: "https://e-commerce-admin-eight.vercel.app/",
    },

  ];
  
  export { services, technologies, experiences, projects };