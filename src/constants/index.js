import {
  frontend,
  systems,
  ai,
  craft,
  capgemini,
  alexu,
  scriptflow,
  jarvis,
  agentIstanbul,
  nokhbat,
  chess,
  handTracking,
  c,
  python,
  fastapi,
  sdl,
  css,
  docker,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "Engineering Discipline",
    icon: systems,
  },
  {
    title: "Frontend Craftsmanship",
    icon: frontend,
  },
  {
    title: "AI & Systems Builder",
    icon: ai,
  },
  {
    title: "Shipped, Not Theoretical",
    icon: craft,
  },
];

const technologies = [
  { name: "C", icon: c },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "Node JS", icon: nodejs },
  { name: "FastAPI", icon: fastapi },
  { name: "SDL 2", icon: sdl },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Frontend Engineering Trainee",
    company_name: "Capgemini (Mentored by Eng. Amr Matar)",
    icon: capgemini,
    iconBg: "#0070AD",
    date: "April 2026 — Present",
    points: [
      "Working through a structured, mentor-led curriculum to adopt a senior-level approach to modern frontend engineering.",
      "Practising production-grade patterns in JavaScript, component architecture, performance, and UI engineering.",
      "Delivering project iterations each cycle and receiving direct technical review on code quality, structure, and design decisions.",
      "Adopting senior-level habits in code clarity, accessibility, and design-system thinking.",
    ],
  },
  {
    title: "B.Sc. Computer & Systems Engineering",
    company_name: "Faculty of Engineering, Alexandria University",
    icon: alexu,
    iconBg: "#1B3A6B",
    date: "2023 — 2028 (Expected)",
    points: [
      "Cumulative GPA: 3.97 / 4.0 — top of cohort.",
      "Core coursework: Programming I & II, Data Structures, Algorithms, Computer Architecture, Digital Logic Design, Information Theory, Signals & Systems.",
      "Selected academic projects: Professional Chess Engine (C / SDL2), LZ77 Compressor, 8-bit ALU.",
      "Active competitive programmer on LeetCode (incl. Hard-tier) and HackerRank.",
    ],
  },
];

const projects = [
  {
    name: "ScriptFlow",
    description:
      "Premium SaaS landing platform — four interlinked pages with zero external dependencies, HTML5 particle hero, custom cursor, and a luxurious dark-navy + gold visual system.",
    tags: [
      { name: "html5", color: "blue-text-gradient" },
      { name: "css3", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: scriptflow,
    source_code_link: "https://github.com/mhmdsabeer2029/ScriptFlow",
    live_link: "https://mhmdsabeer2029.github.io/ScriptFlow/",
  },
  {
    name: "JARVIS — AI Assistant",
    description:
      "Full-stack conversational AI with native KaTeX math rendering, Computer Modern typography, multi-conversation workspace, sidebar pinning, and a ~500ms first-token streaming pipeline.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "groq", color: "pink-text-gradient" },
    ],
    image: jarvis,
    source_code_link: "https://github.com/mhmdsabeer2029",
    live_link: "https://dist-lykkvdkb.devinapps.com",
  },
  {
    name: "Agent Istanbul",
    description:
      "Live production marketing platform for a Turkish multi-service agency operating across healthcare registration, real-estate, agriculture, textiles, marble sourcing, and digital services.",
    tags: [
      { name: "html5", color: "blue-text-gradient" },
      { name: "css3", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: agentIstanbul,
    source_code_link: "https://github.com/mhmdsabeer2029",
    live_link: "https://agent-istanbul.com",
  },
  {
    name: "Nokhbat — UpSkill Academy",
    description:
      "Educational e-learning storefront covering eight knowledge tracks with course listings, ratings, lifetime-access bundles, instructor highlights, and a polished conversion flow.",
    tags: [
      { name: "web", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: nokhbat,
    source_code_link: "https://github.com/mhmdsabeer2029",
    live_link: "https://nokhbat.ayaxd.com",
  },
  {
    name: "Professional Chess Engine",
    description:
      "100% FIDE-compliant chess engine and GUI engineered from the ground up in C — castling, en passant, promotion, threefold repetition, checkmate/stalemate, and FEN serialisation. Three-layer modular architecture with O(1) check detection.",
    tags: [
      { name: "c", color: "blue-text-gradient" },
      { name: "sdl2", color: "green-text-gradient" },
      { name: "gnumake", color: "pink-text-gradient" },
    ],
    image: chess,
    source_code_link: "https://github.com/mhmdsabeer2029/Chess_by_C",
  },
  {
    name: "Neural Hand Tracking",
    description:
      "Real-time MediaPipe hand-skeleton tracking with a cyberpunk HUD — 21-point landmark detection over live video, finger-state classification, gesture recognition, confidence telemetry, and an AI analysis pane.",
    tags: [
      { name: "mediapipe", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "webrtc", color: "pink-text-gradient" },
    ],
    image: handTracking,
    source_code_link: "https://github.com/mhmdsabeer2029",
  },
];

export { services, technologies, experiences, projects };
