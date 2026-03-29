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
    images: ["/photos/presense.JPG", "/photos/presense2.JPG", "/photos/presense3.JPG"],
    description:
      "PRESENSE is a safety companion designed for moments of uncertainty. When a user senses that something may be wrong, the app provides quick, accessible tools that help them respond immediately. We focused on designing an interface that prioritizes clarity, speed, and emotional awareness. The goal was to create a system that feels calm and supportive while still allowing users to act instantly when needed. Using Figma's digital design and prototyping tools, we built an experience centered around quick accessibility and minimal friction. Every element was intentionally simplified so users can navigate the app without hesitation, especially during stressful situations.",
    outcome: "Weekend Hackathon hosted by Figma. Prompt: Design a tool that tracks, measures, visualizes or quantifies an aspect of human sensory experience. Within the tool, provide the ability to detect, enhance, or manipulate those same sensory inputs.",
    links: [
      { label: "Figma Prototype", url: "https://www.figma.com/proto/7tK37MnBUToTgnHMiDYrvp/PreSense?node-id=162-285&t=m0QoN2YpW1sHHIP3-1" },
      { label: "Pitch", url: "https://www.figma.com/deck/rkmb8o0lnMBy3HOVAzZDiI/Team-Gwendon-tdie?node-id=23-8&t=aGWpJmboONPPQnYo-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
      { label: "Figma Frames / Design", url: "https://www.figma.com/design/7tK37MnBUToTgnHMiDYrvp/PreSense?node-id=162-281&t=2LaEkIvKjip4Nww9-0" },
    ],
  },
  {
    slug: "tile",
    title: "TILE",
    tagline: "Gamified chore productivity for housemates",
    tags: ["Product Design", "Mobile", "Figma"],
    year: "2024",
    color: "#E8E2F5",
    description:
      "TILE turns household chores into a collaborative game with streaks, points, and friendly competition. Designed to reduce household conflict and make adulting feel less like adulting.",
    outcome: "Makathon project; iterated through multiple logo and brand directions.",
  },
  {
    slug: "gut",
    title: "GUT",
    tagline: "A brain tracker for the chronically indecisive",
    tags: ["Speculative Design", "Wearables", "UX"],
    year: "2024",
    color: "#FDECD7",
    description:
      "GUT surfaces logical vs. emotional signals side-by-side so users 18–26 can finally make decisions they don't regret. Built around the premise that indecision is a design problem.",
  },
  {
    slug: "fuelling-the-future",
    title: "Fuelling the Future",
    tagline: "Sustainable energy futures for Fort McMurray",
    tags: ["Research", "Systems Design", "Sustainability"],
    year: "2023",
    color: "#D6EAD6",
    description:
      "A systems-level exploration of how oil sands communities can transition toward renewable energy while preserving economic stability and community identity.",
  },
  {
    slug: "agro-salt",
    title: "Agro S.A.L.T.",
    tagline: "Soil analysis for smarter farming",
    tags: ["Science Fair", "Research", "Environmental"],
    year: "2023",
    color: "#D6EAD6",
    description:
      "A low-cost soil analysis solution for small-scale farmers, combining sensor hardware with data visualization to improve crop yield decisions.",
  },
  {
    slug: "byson-tidal",
    title: "Byson Tidal Solutions",
    tagline: "Harnessing tidal energy for remote communities",
    tags: ["Engineering", "Sustainability", "Science Fair"],
    year: "2022",
    color: "#CCDFF5",
    description:
      "Designed a small-scale tidal turbine concept for remote coastal communities with no grid access, balancing ecological impact with energy output.",
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
