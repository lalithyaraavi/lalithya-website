export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  year: string;
  color: string;
  featured?: boolean;
  description: string;
  outcome?: string;
  outcomeLabel?: string;
  image?: string;
  images?: string[];
  links?: ProjectLink[];
};

export type Award = {
  title: string;
  issuer: string;
  year: string;
  emoji: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  readTime: string;
};

export const projects: Project[] = [
  {
    slug: "presense",
    title: "PreSense",
    tagline: "An intuition-powered personal safety app",
    tags: ["UX Design", "Speculative Design", "iOS"],
    year: "2026",
    color: "#F2DEED",
    images: ["/photos/presense.JPG", "/photos/presense2.png"],
    description:
      "PRESENSE is a safety companion designed for moments of uncertainty. When a user senses that something may be wrong, the app provides quick, accessible tools that help them respond immediately. We focused on designing an interface that prioritizes clarity, speed, and emotional awareness. The goal was to create a system that feels calm and supportive while still allowing users to act instantly when needed. Using Figma's digital design and prototyping tools, we built an experience centered around quick accessibility and minimal friction. Every element was intentionally simplified so users can navigate the app without hesitation, especially during stressful situations.",
    outcome: "Design a tool that tracks, measures, visualizes or quantifies an aspect of human sensory experience. Within the tool, provide the ability to detect, enhance, or manipulate those same sensory inputs.",
    outcomeLabel: "DESIGN PROBLEM",
    links: [
      { label: "Figma Prototype", url: "https://www.figma.com/proto/7tK37MnBUToTgnHMiDYrvp/PreSense?node-id=162-285&t=m0QoN2YpW1sHHIP3-1" },
      { label: "Pitch", url: "https://www.figma.com/deck/rkmb8o0lnMBy3HOVAzZDiI/Team-Gwendon-tdie?node-id=23-8&t=aGWpJmboONPPQnYo-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
      { label: "Figma Frames / Design", url: "https://www.figma.com/design/7tK37MnBUToTgnHMiDYrvp/PreSense?node-id=162-281&t=2LaEkIvKjip4Nww9-0" },
    ],
  },
  {
    slug: "tile",
    title: "TILE (Task Inspired Live Engagement)",
    tagline: "Gamified chore productivity for housemates",
    tags: ["Product Design", "Mobile", "Figma"],
    year: "2026",
    color: "#E8E2F5",
    images: ["/photos/tile.png", "/photos/tile2.png", "/photos/tile3.png"],
    description:
      "TILE is a socially driven productivity experience designed around competition and visual storytelling. Users join public or private rooms to complete specific tasks and earn custom tiles that represent each win. These tiles are designed to assemble into a growing mosaic of ordinary life, turning everyday achievements into a collaborative digital artwork that visualizes collective progress and connection.",
    outcome: "University students struggle to stay motivated with repetitive chores like laundry and dishes. How might we make these moments more engaging while building social connection?",
    outcomeLabel: "DESIGN PROBLEM",
    links: [
      { label: "Prototype", url: "https://lair-ardent-50142270.figma.site/" },
    ],
  },
  {
    slug: "ascorbic-acid",
    title: "Exploring Cooking Methods on Ascorbic Acid Retention",
    tagline: "How cooking affects Vitamin C levels in food",
    tags: ["Science Fair", "Research", "Nutrition"],
    year: "2023",
    color: "#FDECD7",
    images: ["/photos/acid.png", "/photos/acid2.jpeg", "/photos/acid3.jpeg"],
    description:
      "Everyday, we prepare appetizing meals using different cooking methods, which can be harmful to getting a nutritional diet. We tested how different cooking methods such as boiling, microwaving and baking in the oven affects Vitamin C levels in food, since it is an essential nutrient needed by our body. Look into the Project Board for full data and results.",
    outcome: "Canada Wide Science Fair: National Bronze Medal\nRegional Discovery Special Award",
    outcomeLabel: "AWARDS",
    links: [
      { label: "Project Board", url: "https://partner.projectboard.world/ysc/project/from-raw-to-cooked-exploring-cooking-methods-on-ascorbic-acid-retention-in-tomatoes" },
      { label: "In the News", url: "https://www.fmpsdschools.ca/news/post/fmpsd-students-win-big-at-canada-wide-science-fair" },
    ],
  },
  {
    slug: "fuelling-the-future",
    title: "Fuelling the Future: Investigating Cost Efficient Methods of Hydrogen Production",
    tagline: "Making hydrogen production more accessible and cost-friendly",
    tags: ["Research", "Chemistry", "Sustainability", "Science Fair"],
    year: "2024",
    color: "#D6EAD6",
    images: ["/photos/fuel.png", "/photos/fuel2.jpeg", "/photos/fuel3.jpeg", "/photos/fuel4.png"],
    description:
      "Alternate energy sources have been researched for many years, with hydrogen as a possible option. Sustainably, hydrogen can be produced through water electrolysis, using expensive materials like platinum, sodium hydroxide, and distilled water. In our experimentation, we researched different combinations of readily available electrodes and electrolytes to make hydrogen production more cost friendly. Look into the Project Board for full data and results.",
    outcome: "Canada Wide Science Fair: National Bronze Medal\nWood Buffalo Regional Silver Medalist\nRegional Pathways Alliance Net-Zero Special Award",
    outcomeLabel: "AWARDS",
    links: [
      { label: "Project Board", url: "https://partner.projectboard.world/ysc/project/fueling-the-future" },
      { label: "In the News", url: "https://www.fmpsdschools.ca/news/post/fmpsd-students-shine-at-canada-wide-science-fair" },
    ],
  },
  {
    slug: "agro-salt",
    title: "Agro S.A.L.T: Sustainable And Low Toxicity De-icers",
    tagline: "Eco-friendly alternatives to traditional road salt",
    tags: ["Science Fair", "Research", "Environmental", "Chemistry"],
    year: "2025",
    color: "#D6EAD6",
    images: ["/photos/salt.png", "/photos/salt2.jpeg", "/photos/salt3.png"],
    description:
      "AgroSalt explores environmentally friendly alternatives to traditional road salt used to prevent icy roads and sidewalks in Alberta. While sodium chloride improves winter safety, it also damages ecosystems, infrastructure, and vehicles. Through testing agricultural-based de-icing compounds, this project investigates natural materials that can lower water's freezing point while reducing environmental harm. The goal is to identify the most effective agro-based de-icer and design a solution that is practical and scalable for real-world winter road safety.",
    outcome: "Wood Buffalo Regional Silver Medal\nExcellence in Chemistry Special Award",
    outcomeLabel: "AWARDS",
    links: [
      { label: "Project Board", url: "https://partner.projectboard.world/ysc/project/agro-s-a-l-t-sustainable-and-low-toxicity-de-icers?rc=jzlmwanj" },
    ],
  },
  {
    slug: "byson-tidal",
    title: "Byson Tidal Solutions",
    tagline: "Harnessing tidal energy for remote communities",
    tags: ["Engineering", "Sustainability", "Clean Energy"],
    year: "2024",
    color: "#CCDFF5",
    images: ["/photos/water.png", "/photos/water2.png", "/photos/water3.png"],
    description:
      "Byson Tidal Solutions proposes the Water Wrap, a tidal energy system designed to generate renewable electricity for remote northern communities. The design captures ocean currents while protecting marine life through a screened, blade-safe structure. This project explores how sustainable engineering solutions can expand access to clean energy while reducing reliance on fossil fuels.",
    outcome: "Best Business Model",
    outcomeLabel: "AWARDS",
    links: [
      { label: "Project Pitch", url: "https://drive.google.com/file/d/1dO8bQjkUA7rZ46UDmK0Uk_QPMjGgiPAh/view" },
      { label: "In the News", url: "https://www.shad.ca/shads-unveil-their-innovative-design-challenge-projects-to-help-youth-in-canada-adopt-green-energy-solutions/" },
    ],
  },
];

export const awards: Award[] = [
  {
    title: "Loran Semi-Finalist",
    issuer: "Loran Scholars Foundation",
    year: "2023",
    emoji: "🏅",
  },
  {
    title: "Canada Wide Science Fair — Gold & Silver",
    issuer: "Youth Science Canada",
    year: "2023",
    emoji: "🥇",
  },
  {
    title: "TC Energy STEM Scholarship",
    issuer: "TC Energy",
    year: "2023",
    emoji: "✨",
  },
  {
    title: "Finning Canada STEM Award",
    issuer: "Finning Canada",
    year: "2023",
    emoji: "🏆",
  },
  {
    title: "UWaterloo President's Scholarship",
    issuer: "University of Waterloo",
    year: "2023",
    emoji: "🎓",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "trusting-your-gut",
    title: "On trusting your gut (and why I'm designing a tool to help with that)",
    date: "March 2025",
    excerpt:
      "Indecision isn't a personality flaw. It's a design problem. Here's why I built GUT and what I learned about intuition along the way.",
    tag: "Design Thinking",
    readTime: "5 min",
  },
  {
    slug: "syde-first-year",
    title: "What nobody tells you about SYDE at Waterloo",
    date: "January 2025",
    excerpt:
      "Systems Design is one of the most misunderstood programs on campus. Here's what the first year actually feels like.",
    tag: "Student Life",
    readTime: "7 min",
  },
  {
    slug: "fort-mcmurray-design",
    title: "Growing up in Fort Mac and finding design",
    date: "November 2024",
    excerpt:
      "There aren't many designers from Fort McMurray. Here's how a science fair obsession and a lot of baking led me here.",
    tag: "Personal",
    readTime: "4 min",
  },
];
