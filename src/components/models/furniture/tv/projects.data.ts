import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'ChatApp',
    image: 'https://www.comm100.com/wp-content/uploads/images/blog-banner-ai-powered-chatbot-1.png',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
    tags: ['JavaScript', 'Node.js', 'Express'],
    github: 'https://github.com/nithya-reddych/chatapp',
    demo: 'https://chatapp-eta-five.vercel.app/'
  },
  {
    id: 2,
    title: 'Shilpa Architects',
    image: 'https://cdn.prod.website-files.com/665deca12b351fdb8e748bf9/6662dd13f923dbac094d6f3d_base-architecture.webp',
    description: 'The website Shilpa Architects showcases a portfolio of architectural projects, featuring high-quality images, project descriptions, and a sleek user interface. It includes smooth navigation with buttons to explore previous and next projects, enhancing the browsing experience for users interested in modern architectural designs..',
    tags: ['React', 'Next.js'],
    github: 'https://github.com/nithya-reddych/shilpa-architects',
    demo: 'https://shilpa-architects.vercel.app/'
  },
  {
    id: 3,
    title: 'Gerp',
    image: 'https://www.chrisrmiller.com/content/images/2020/11/grep.png',
    description: 'Gerp as in Grep: Gerp is text-search program which navigate and search through directories, similar to the Unix command "grep". This allows users to perform case-sensitive and case-insensitive searches for words within files. The program uses a FSTree structure to manage directories and files.',
    tags: ['C++', 'Makefile'],
    github: 'https://github.com/nithya-reddych/gerp',
    demo: 'https://github.com/nithya-reddych/gerp/blob/main/README'
  },
  {
    id: 4,
    title: 'PlayTime',
    image: 'https://wallpapersok.com/images/hd/dualsense-ps5-controller-xe355n1kjz9bv0sj.jpg',
    description: 'Playtime is an engaging web platform showcasing a collection of fun and interactive games, including Sudoku, Wordle, Memory, Snake, Tetris, and Pac-Man.',
    tags: ['React', 'Node.js', 'TS', 'Tailwind'],
    github: 'https://github.com/nithya-reddych/PlayTime',
    demo: 'https://play-time-pearl.vercel.app/'
  },

  {
    id: 5,
    title: 'Emerald Necklace Conservancy',
    image: 'https://www.emeraldnecklace.org/wp-content/uploads/2020/01/enc_logo_process_uncoated-2-USE-THIS-Square.png',
    description: 'Developed a custom iPad web app for the Emerald Necklace Conservancy, a Boston based non-profit focused on preserving historic green spaces. Built with TypeScript, Bun, and Next.js, MongoDB, the project emphasizes accessibility, responsive design for smooth user experience, administrators and visitors',
    tags: ['Next.js', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/JumboCode/emerald-necklace-conservancy',
  },
  {
    id: 6,
    title: 'FoodSavers',
    image: 'https://www.slashgear.com/img/gallery/these-high-tech-refrigerators-are-expensive-but-worth-the-price/l-intro-1699020882.jpg',
    description: 'Leverges an API to calculate calorie content and display food items based on user-entered ingredients. Integrated a search feature that fetches recipes based on ingredients from a database of 13,000+ entries using PHP and MySQL. Focused on providing dynamic data retrieval and efficient backend management.',
    tags: ['JavaScript', 'HTML', 'PHP'],
    github: 'https://github.com/nithya-reddych/recipe-app',
    demo: 'https://nithyareddyc.sgedu.site/cs120/foodSaver/recipe-app/home.php'
  }
];