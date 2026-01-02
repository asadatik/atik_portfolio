export interface Experience {
  role: string
  company: string
  type: "Full-time" | "Freelance" | "Contract" | "Personal"
  dateRange: string
  responsibilities: string[]
}

export const experience: Experience[] = [
  {
    role: "Full-stack Developer",
    company: "TechCorp Solutions",
    type: "Full-time",
    dateRange: "Jan 2023 - Present",
    responsibilities: [
      "Built and maintained multiple Next.js applications serving 50K+ users",
      "Architected scalable REST APIs using Node.js and PostgreSQL",
      "Integrated Stripe payment processing and subscription management",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Optimized application performance, reducing load times by 40%",
    ],
  },
  {
    role: "Frontend Developer",
    company: "StartupXYZ",
    type: "Full-time",
    dateRange: "Jun 2022 - Dec 2022",
    responsibilities: [
      "Developed responsive React applications with TypeScript",
      "Implemented complex state management using Zustand and React Query",
      "Created reusable component libraries with Tailwind CSS",
      "Worked closely with backend team to design efficient API contracts",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Various Clients",
    type: "Freelance",
    dateRange: "Jan 2022 - May 2022",
    responsibilities: [
      "Delivered 5+ websites for small businesses and startups",
      "Provided end-to-end development from design to deployment",
      "Managed client relationships and project timelines",
    ],
  },
]
