import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  threads,
  typescript,
  aws,
  mysql,
  python,
  golang,
  solidity,
  docker,
  scratch,
  arduino,
  gifted_and_talented,
  dedoco,
  anafore,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Language",
  },
  {
    imageUrl: scratch,
    name: "Scatch",
    type: "Language",
  },
  {
    imageUrl: arduino,
    name: "Arduino",
    type: "Prototyping",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "AWS Services",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Container",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Language",
  },
  {
    imageUrl: golang,
    name: "Golang",
    type: "Backend",
  },
  {
    imageUrl: solidity,
    name: "Solidity",
    type: "Language",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Language",
  },
];

export const experiences = [
  {
    title: "Specialist Teacher",
    company_name: "Gifted and Talented Education & R2D2 Lab",
    icon: gifted_and_talented,
    iconBg: "#accbe1",
    date: "2016 - 2019",
    points: [
      "Teach students ranging from 5-18 years old on Mathematics and Science (GEP and Olympiad level)",
      "In 2018 onwards, Tutor student to program the Arduino micro-controller, coding in Scratch, M-block, and Python.",
      "Learned web development picked up React.js, Node.js, and MongoDB.",
    ],
  },
  {
    title: "Software Engineer (Frontend)",
    company_name: "Dedoco",
    icon: dedoco,
    iconBg: "#fbc3bc",
    date: "2020 - 2021",
    points: [
      "Work on app for digital, electronic signatures and document handling (mostly front-end work, handle deployments to AWS) using primarily ReactJS (redux, middleware)",
      "Refactored an open-source secure file sharing library (https://github.com/ldidry/lufi) to be used for said app",
      "Research on technologies relating to setting up a private blockchain network for the app. E.g., blockchain explorer (Blockscout), private blockchain service (Kaleido).",
    ],
  },
  {
    title: "Full-stack Software Engineer",
    company_name: "Anafore Pte Ltd",
    icon: anafore,
    iconBg: "#b7e4c7",
    date: "2021 - Present",
    points: [
      "Work on app improvements, bug fixes and optimization (Full-Stack)",
      "Develop new features for the main product (ReferralCandy) and ad-hoc infrastructure related services on AWS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Undertake dashboard revamp project (conversion of current app in Ruby to Node.js and React framework)",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/garyfoo88",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Movie Info App",
    description:
      "Developed a web application that allows users to search for movies and TV shows, and view movie details",
    link: "https://movie-stream-next-tailwind-tmdb-api.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "1-1 Chat App",
    description:
      "Built a real-time chat application with Next.js, Tailwind CSS, Google Auth, and Firebase.",
    link: "https://1-1-chat-app-next.vercel.app",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Mock google search engine",
    description:
      "Developed a mock google search engine using Next.js, Tailwind CSS, Google Auth, and Firebase.",
    link: "https://search-engine-app-next.vercel.app",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "ThreeJS Shirt Customizer",
    description:
      "Developed a test web application using Threejs that allows users to customize a shirt with different colors and patterns.",
    link: "https://threejs-shirt-customizer-ten.vercel.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Blockchain Token Minting App",
    description:
      "Developed a backend application that allows users to mint their own ERC-721 tokens (NFTs) on desired blockchain.",
    link: "https://github.com/garyfoo88/Blockchain-Token-Minting-App",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Chat App using React Native",
    description:
      "Developed a mobile chat application using React Native and Firebase.",
    link: "https://github.com/garyfoo88/ReactN-Chat-App",
  },
];
