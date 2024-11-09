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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C# Developer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "firebase",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Freelancer",
      company_name: "Kulla e Shqiponjes",
      icon: reactjs,
      iconBg: "#383E56",
      date: "June 2024 - June 2024",
      points: [
        ,"Developed a dynamic web application for a restaurant using React.js and Firebase, enabling seamless management of menu items.",
         "The application allows restaurant staff to add, delete, and update menu items in real-time, enhancing operational efficiency and providing an intuitive interface for quick menu adjustments.",
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
      name: "Food Delivery App",
      description:
        "A web platform that enables users to order food from any restaurant registered on the site. Restaurants can showcase their menu items, manage orders, and receive ratings and reviews from customers. This application allows customers to browse nearby restaurants, place orders, and provide feedback to enhance the dining experience for others.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "SQL Server",
          color: "green-text-gradient",
        },
        {
          name: "ASP.Net",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ArditShillova1/FoodDeliveryApp03",
    },
    {
      name: "Restaurant Menagment",
      description:
        "This Windows Forms app makes it easier for restaurants to manage customer orders and billing. It streamlines the whole process, helping staff handle bills quickly and keeping everything organized for smoother daily operations.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Windows App",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ArditShillova1/RestaurantMenagment-master",
    },
    {
      name: "Kulla e Shqiponjes",
      description:
        "A web application that lets customers view the restaurant’s menu and stay updated on offerings. The app also allows the restaurant staff to easily add, delete, and edit menu items, keeping the menu current and accurate.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://kullaeshqiponjes.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };