import {
    mobile,
    backend,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    leetcode,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "React JS Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
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
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
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
  ];
  
  const skills = [
    {
      title: "Web Developer",
      company_name: "Projects",
      icon: html,
      iconBg: "#383E56",
      date: "Jul 2022 - Present",
      points: [
        "Prepared some early projects such as JS-Clock, Calculator, etc.",
        "Learning web frameworks such as React.JS, Next.JS for collaborative projects.",
      ],
    },
    {
      title: "React.JS Developer",
      company_name: "Learning",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Mar 2023 - Present",
      points: [
        "Preapred this portfolio website with React.JS",
        "Currently working on different FrontEnd projects."
      ],
    },
    {
      title: "Android Developer",
      company_name: "Learning",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Present",
      points: [
        "Learning Android development from Meta Android Specialization Certification",
        "Have gained knowledge of programming languages such as Java and Kotlin",
        "Currently developing projects with Jetpack Compose",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Learning",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Present",
      points: [
        "Developed high-fidelity mockups for projects.",
        "Completed Meta certification on UI/UX Design."
      ],
    },
    {
      title: "Competetive Programming",
      company_name: "Leetcode, CodeChef",
      icon: leetcode,
      iconBg: "#383E56",
      date: "July 2022 - Present",
      points: [
        "Participated in many competitions on CodeChef. Max Rating 1645 (3 Star).",
        "Solved over 100 questions based on different topics on Leetcode."
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, skills, testimonials, projects };