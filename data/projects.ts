export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  type: "Full-stack" | "Frontend" | "Backend" | "Other"
  featured: boolean
  thumbnail: string
  problem: string
  solution: string
  techStack: {
    frontend: string[]
    backend: string[]
    database: string[]
    other: string[]
  }
  features: string[]
  result: string
  metrics?: string[]
  links: {
    demo?: string
    github?: string
    docs?: string
  }
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    tagline: "Full-stack marketplace with real-time inventory",
    description:
      "A modern e-commerce platform with Stripe integration, real-time inventory tracking, and an admin dashboard.",
    type: "Full-stack",
    featured: true,
    thumbnail: "/modern-ecommerce-dashboard.png",
    problem:
      "Small businesses needed an affordable, easy-to-manage online store solution with robust payment processing and inventory management.",
    solution:
      "Built a full-stack Next.js application with Stripe for payments, PostgreSQL for data persistence, and a real-time admin dashboard for managing products and orders.",
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
      backend: ["Next.js API Routes", "Node.js", "Stripe API", "Webhooks"],
      database: ["PostgreSQL", "Prisma"],
      other: ["Vercel", "Docker", "Redis"],
    },
    features: [
      "Secure Stripe checkout with subscription support",
      "Real-time inventory tracking and low-stock alerts",
      "Admin dashboard with analytics and reporting",
      "Customer order history and tracking",
      "Responsive design optimized for mobile shopping",
      "Email notifications for orders and shipments",
    ],
    result:
      "Successfully launched with 500+ products and processing $20K+ in monthly transactions. Admin team reports 60% reduction in time spent on inventory management.",
    metrics: ["500+ products", "$20K+ monthly transactions", "60% time savings"],
    links: {
      demo: "https://ecommerce-demo.example.com",
      github: "https://github.com/alexjohnson/ecommerce-platform",
    },
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    tagline: "Collaborative task tracker with real-time updates",
    description:
      "A team collaboration tool for managing tasks, projects, and deadlines with real-time synchronization.",
    type: "Full-stack",
    featured: true,
    thumbnail: "/task-management-kanban.png",
    problem:
      "Remote teams struggled with disconnected task management tools that lacked real-time collaboration features.",
    solution:
      "Created a real-time task management application using Next.js, WebSockets for live updates, and a drag-and-drop interface for intuitive task organization.",
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React DnD"],
      backend: ["Node.js", "Express", "Socket.io", "JWT Auth"],
      database: ["MongoDB", "Redis"],
      other: ["Vercel", "GitHub Actions"],
    },
    features: [
      "Real-time task updates across all team members",
      "Drag-and-drop Kanban board interface",
      "Project timelines and deadline tracking",
      "Team member assignment and notifications",
      "Activity feed and comment threads",
      "Dark mode and customizable themes",
    ],
    result:
      "Adopted by 3 teams (20+ users) with 95% daily active usage rate. Users report 30% improvement in project delivery times.",
    metrics: ["20+ active users", "95% daily engagement", "30% faster delivery"],
    links: {
      demo: "https://taskapp-demo.example.com",
      github: "https://github.com/alexjohnson/task-app",
    },
  },
  {
    slug: "api-analytics-dashboard",
    title: "API Analytics Dashboard",
    tagline: "Monitor API performance with beautiful visualizations",
    description: "Real-time analytics dashboard for tracking API requests, performance metrics, and error rates.",
    type: "Frontend",
    featured: true,
    thumbnail: "/analytics-dashboard-charts-graphs.jpg",
    problem:
      "Developers needed an intuitive way to monitor their API performance, track error rates, and identify bottlenecks.",
    solution:
      "Designed and built a comprehensive analytics dashboard with real-time charts, customizable metrics, and alerting capabilities.",
    techStack: {
      frontend: ["React", "TypeScript", "Recharts", "Tailwind CSS", "React Query"],
      backend: ["Existing REST API"],
      database: [],
      other: ["Vercel", "Websockets"],
    },
    features: [
      "Real-time request monitoring and latency tracking",
      "Interactive charts for traffic patterns and trends",
      "Error rate monitoring with stack trace integration",
      "Custom alerts for performance thresholds",
      "Historical data comparison and export",
      "Multi-API support with team workspaces",
    ],
    result:
      "Reduced average time to identify performance issues from hours to minutes. Dashboard processes 1M+ API requests daily.",
    metrics: ["1M+ daily requests tracked", "80% faster issue detection"],
    links: {
      demo: "https://api-analytics-demo.example.com",
    },
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    tagline: "Generate marketing copy with AI assistance",
    description: "AI-powered tool for generating marketing content, blog posts, and social media copy.",
    type: "Full-stack",
    featured: false,
    thumbnail: "/ai-content-writing-interface.png",
    problem:
      "Content creators needed a faster way to generate high-quality marketing copy and overcome writer's block.",
    solution:
      "Built an AI-assisted content generation tool integrating OpenAI's API with customizable templates and tone settings.",
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "OpenAI API"],
      database: ["PostgreSQL", "Prisma"],
      other: ["Vercel", "Stripe"],
    },
    features: [
      "Multiple content types (blogs, ads, social posts)",
      "Tone and style customization",
      "Content history and favorites",
      "Export to multiple formats",
      "Usage tracking and billing",
      "Template marketplace",
    ],
    result:
      "300+ users generating 5K+ pieces of content monthly. Average user reports 50% reduction in content creation time.",
    metrics: ["300+ users", "5K+ monthly generations", "50% time saved"],
    links: {
      demo: "https://ai-content-demo.example.com",
      github: "https://github.com/alexjohnson/ai-content",
    },
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    tagline: "Create stunning developer portfolios in minutes",
    description: "A no-code tool for developers to create and customize their portfolio websites.",
    type: "Full-stack",
    featured: false,
    thumbnail: "/portfolio-builder-interface.png",
    problem:
      "Developers wanted professional portfolio websites but lacked design skills or time to build from scratch.",
    solution:
      "Created a drag-and-drop portfolio builder with professional templates, custom domain support, and one-click deployment.",
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "React DnD"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      other: ["AWS S3", "Cloudflare"],
    },
    features: [
      "Drag-and-drop interface with live preview",
      "10+ professional templates",
      "Custom domain support",
      "One-click deployment",
      "SEO optimization built-in",
      "Analytics integration",
    ],
    result: "200+ portfolios created in first 3 months. 90% of users deploy within 30 minutes of starting.",
    metrics: ["200+ portfolios", "90% completion rate", "30min average build time"],
    links: {
      demo: "https://portfolio-builder-demo.example.com",
    },
  },
  {
    slug: "weather-app",
    title: "Weather Forecast App",
    tagline: "Beautiful weather forecasts with location search",
    description: "Clean and minimal weather application with 7-day forecasts and location-based recommendations.",
    type: "Frontend",
    featured: false,
    thumbnail: "/weather-app-forecast-interface.jpg",
    problem:
      "Existing weather apps were cluttered with ads and unnecessary features, making it hard to quickly check the forecast.",
    solution:
      "Built a minimal, fast-loading weather app focused on essential information with a beautiful, distraction-free interface.",
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Weather API"],
      database: [],
      other: ["Geolocation API"],
    },
    features: [
      "Current conditions and 7-day forecast",
      "Location search and auto-detection",
      "Hourly temperature charts",
      "Severe weather alerts",
      "Favorite locations",
      "Smooth animations and transitions",
    ],
    result: "Featured on Product Hunt with 500+ upvotes. 10K+ monthly active users and 4.8/5 rating.",
    metrics: ["10K+ monthly users", "4.8/5 rating", "500+ Product Hunt votes"],
    links: {
      demo: "https://weather-demo.example.com",
      github: "https://github.com/alexjohnson/weather-app",
    },
  },
]
