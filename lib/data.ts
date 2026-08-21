import { faW } from '@fortawesome/free-solid-svg-icons';
import type { IProject, Social } from '../types';
import { faGithubAlt, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

export const MY_STACK = {
  frontend: [
    {
      name: 'JavaScript',
      icon: '/logo/js.png',
    },
    {
      name: 'TypeScript',
      icon: '/logo/ts.png',
    },
    {
      name: 'React',
      icon: '/logo/react.png',
    },
    {
      name: 'Next.js',
      icon: '/logo/next.png',
    },
    {
      name: 'Redux',
      icon: '/logo/redux.png',
    },
    {
      name: 'Tailwind CSS',
      icon: '/logo/tailwind.png',
    },
    {
      name: 'GSAP',
      icon: '/logo/gsap.png',
    },
    {
      name: 'Sass',
      icon: '/logo/sass.png',
    },
    {
      name: 'Bootstrap',
      icon: '/logo/bootstrap.svg',
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: '/logo/node.png',
    },
    {
      name: 'NestJS',
      icon: '/logo/nest.svg',
    },
    {
      name: 'Express.js',
      icon: '/logo/express.png',
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: '/logo/mysql.svg',
    },
    {
      name: 'PostgreSQL',
      icon: '/logo/postgreSQL.png',
    },
    {
      name: 'MongoDB',
      icon: '/logo/mongodb.svg',
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: '/logo/git.png',
    },
    {
      name: 'Docker',
      icon: '/logo/docker.svg',
    },
    {
      name: 'AWS',
      icon: '/logo/aws.png',
    },
  ],
};

export const HOME_TITLE = {
  title: 'SENIOR FRONTEND ENGINEER',
  heading: 'I build<br />interfaces that<br /> feel alive.',
  subHeading: 'React specialist shaping high-performance digital products where systems thinking meets visual depth.',
  callToAction: "Let's start a conversation",
  terminal: {
    user: 'leboroz',
    prompt: 'npm run build:experience',
    progress: [
      'React composition / clean motion / spatial systems',
      'Three.js scenes tuned for real humans and real devices',
      'Clean code and beautiful interfaces',
    ],
    stack: MY_STACK.frontend,
  },
}
export const SOCIAL_LINKS: Social[] = [
  { name: 'github', url: 'https://github.com/Leboroz', icon: faGithubAlt },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/leboroz', icon: faSquareLinkedin },
  { name: 'Wellfound', url: 'https://wellfound.com/u/leonardo-albornoz', icon: faW },
];

export const PROJECTS: IProject[] = [
  {
    title: 'Light-brain',
    liveUrl: 'https://light-brain.com/en/',
    year: 2025,
    summary: 'A web dashboard that connects ad platforms and displays live performance metrics in real time.',
    description: `
      Light brain is a reporting tool that allows connecting multiple digital advertising platforms and visualizing their results in real time.
      
      Key Features:<br/>
      <ul>
        <li>Save time in delivering results to your end customer.</li>
        <li>Analyze your audience in an easier way to obtain better results in your campaign.</li>
        <li>Understand in a more detailed way the behavior of your digital audience to have a stronger communication with them.</li>
        <li>Lower your costs in terms of time and money by automating all your custom metrics in an online presentation.</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Fetched data from Companies campaign using RESTFUL API.</li>
        <li>Converted data from json to SQL using Talend jobs</li>
        <li>Modeled tables to suffice the reports the user need.</li>
      </ul>
      `,
    techStack: [
      'PHP',
      'Windows Server',
      'Talend',
      'Postgressql',
      'PL/SQL',
      'Power BI'
    ],
  },
  {
    title: 'clarifion landing page',
    techStack: [
      'React',
      'Tailwind CSS',
      'Checkout champ'
    ],
    liveUrl: 'https://checkout-page-react.netlify.app/',
    year: 2023,
    summary: 'A responsive multi-step checkout built with React, featuring cart review, upsell, confirmation, and trust signals.',
    description: `
    Ejam – React Checkout Page<br/>

    A fully responsive, multi-step checkout experience built with React and deployed on Netlify.<br/>

    The site guides users through a realistic purchase flow for the Clarifion Air Ionizer, including:<br/>
    <ul>
      <li>Cart review</li>
      <li>Checkout</li>
      <li>A one-time special offer (upsell)</li>
      <li>Order confirmation</li>
    </ul>
    Key features include persuasive trust signals (30-day guarantee, free shipping over $40, 50k+ happy customers, 256-bit SSL), a discounted bundle offer, customer testimonials, and a clean, conversion-focused design.

    Built as a modern, mobile-friendly React application to demonstrate real-world e-commerce UI/UX patterns and component-based development.
    `,
  },
  {
    title: 'RentUrTech',
    techStack: [
      'PostgreSQL',
      'React',
      'React-testing-library',
      'Redux',
      'SASS',
    ],
    liveUrl: 'https://renturtechrender.netlify.app/',
    year: 2023,
    summary: 'A React + Redux web app for browsing, reserving, and managing equipment rentals with user authentication and a clean, responsive interface.',
    description: 'A full-stack web application that allows users to browse, reserve, and manage equipment rentals for specific time periods. Built with React and Redux on the frontend, it includes user authentication, protected reservation management, and a clean, responsive UI. The project is connected to a Ruby on Rails backend and follows a modern rental marketplace workflow.',
  },
];

export const SERVICES = [
  {
    type: 'Systems',
    title: 'React architecture',
    description: 'Scalable component systems and considered interaction patterns built for long-term velocity.',
  },
  {
    type: 'Dimension',
    title: 'Three.js Experiences',
    description: 'Spatial product moments that feel tactile, performant, and at home on the modern web.',
  },
  {
    type: 'Speed',
    title: 'Performance engineering',
    description: 'Fast-loading interfaces, motion budgets, and rendering decisions that make every interaction count.',
  },
]

export const LINKS = [
  {
    href: "#intro",
    text: "Intro",
  },
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#expertise",
    text: "Experties",
  },
  {
    href: "#services",
    text: "Services",
  },
  {
    href: "#work",
    text: "My Work",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

export const START_DATE = '2023-06-28'
