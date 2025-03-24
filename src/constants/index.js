import {
  gym,
  piechart,
  javascript,
  c,
  html,
  css,
  reactjs,
  python,
  tailwind,
  sql,
  postgresql,
  engineer,
  git,
  docker,
  threejs,
  nasa,
  spatialcomp,
  database,
  fractol,
  minishell,
  pushswap,
  virtualbox,
  uma,
  harvard,
  london, pancake_stack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
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
    title: "Full-Stack Developer",
    icon: pancake_stack,
  },
  {
    title: "Low-level Programmer",
    icon: database,
  },
  {
    title: "Software Developer",
    icon: engineer,
  },
  {
    title: "Marketing Analyst",
    icon: piechart,
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
    name: "C/C++",
    icon: c,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "B.A. Marketing and Market Research",
    company_name: "Universidad de Málaga",
    icon: uma,
    iconBg: "#FFFFFF",
    date: "09/2022 - 07/2025",
    points: [
      "Core marketing concepts like consumer behavior, branding, design and digital marketing",
      "Market research methods to analyze consumer trends and competitive landscapes",
      "Law, statistics, and accounting classes to build a strong analytical and legal foundation",
      "Specialized topics such as e-commerce, geomarketing, and social media marketing",
    ],
  },
  {
    title: "CS50 - Computer Science",
    company_name: "Harvard",
    icon: harvard,
    iconBg: "#FFFFFF",
    date: "04/2024 - 06/2024",
    points: [
      "Learned programming fundamentals in C, Python, and SQL",
      "Implemented algorithms and explored cybersecurity concepts like encryption and network security",
      "Built web applications using HTML, CSS, JavaScript, and Flask",
    ],
  },
  {
    title: "Bootcamp - Coding Fundamentals",
    company_name: "42 London",
    icon: london,
    iconBg: "#FFFFFF",
    date: "08/2024",
    points: [
      "Developed strong C programming skills by implementing algorithms, data structures, and system-level functions",
      "Built works like a custom implementation of standard C library functions without external libraries",
      "Used Linux, including Vim, shell commands and Bash scripts for compiling, file manipulation, and process management",
      "Participated in code reviews and provided constructive feedback in a collaborative environment",
    ],
  },
  {
    title: "Core Curriculum - Full-Stack Development",
    company_name: "42 Málaga",
    icon: london,
    iconBg: "#FFFFFF",
    date: "09/2024 - 09/2025",
    points: [
      "Mastered advanced algorithms and data structures, including trees, graphs, and dynamic programming",
      "Built full-stack applications with C/C++, HTML, CSS, and JavaScript",
      "Gained experience with version control using Git and collaborative project workflows",
      "Developed expertise in software testing, debugging, and optimizing code for performance and scalability",
    ],
  },
];

const testimonials = [
  {
    testimonial:
        "- Built an app for NASA focused on visualizing exoplanet data using machine learning",
    designation: "Oct 2024",
    name: "SpaceApps Challenge",
    company: "NASA",
    cert : "Certificate",
    certificate: "https://drive.google.com/file/d/1qD-8UcJfF7ClVO8mUdz6scBrpz6EApt-/view",
    image: nasa,
  },
  {
    testimonial:
        "- Built a python prototype for a VR app\n - Developed a marketing website\n - Won 1st place",
    name: "Spatial Computing",
    designation: "Dec 2024",
    company: "HackReality",
    cert: "Certificate",
    certificate: "https://hackreality.tech/nft",
    image: spatialcomp,
  },
];

const projects = [
  {
    name: "fract-ol",
    description:
      "A 2D graphical project exploring the psychedelic universe of fractals (Julia, Mandelbrot & BurningShip)",
    tags: [
      {
        name: "mlx-42",
      },
      {
        name: "rendering",
      },
      {
        name: "c",
      },
    ],
    image: fractol,
    source_code_link: "https://github.com/char-projects/fract-ol",
  },
  {
    name: "minishell",
    description:
        "A minimalist shell project replicating basic Unix command line features like execution, pipes, and redirection",
    tags: [
      {
        name: "posix",
      },
      {
        name: "unix",
      },
      {
        name: "c",
      },
    ],
    image: minishell,
    source_code_link: "https://github.com/svetstoev/minishell",
  },
  {
    name: "push-swap",
    description:
      "A sorting algorithm using two stacks and the lowest number of operations with a limited set of instructions",
    tags: [
      {
        name: "dsa",
      },
      {
        name: "optimization",
      },
      {
        name: "c",
      },
    ],
    image: pushswap,
    source_code_link: "https://github.com/char-projects/push_swap",
  },
];

export { services, technologies, experiences, testimonials, projects };
