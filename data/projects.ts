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
  slug: "travel-booking-platform",
  title: "Travel Booking & Payment Management System",
  tagline: "Role-based travel booking platform with secure payments and admin control",

  description:
    "A full-stack travel booking platform where users can explore travel packages, create bookings, and manage payments, while admins control packages, bookings, and payment workflows through a secure dashboard.",

  type: "Full-stack",
  featured: true,
  thumbnail: "/travel-dashboard.png",

  problem:
    "Many travel booking systems fail to properly separate user and admin responsibilities, leading to security risks, poor access control, and unreliable payment and booking management.",

  solution:
    "Developed a role-based full-stack travel booking system using Next.js and TypeScript. The platform includes secure JWT cookie-based authentication, protected routes, admin dashboards, booking management, and a scalable payment-ready architecture.",

  techStack: {
    frontend: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Axios"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "JWT Authentication (HttpOnly Cookies)",
      "Zod Validation"
    ],
    database: [
      "MongoDB",
      "Mongoose"
    ],
    other: [
      "Role-based Access Control (RBAC)",
      "Protected Routes",
      "Dashboard Analytics"
    ]
  },

  features: [
    "Role-based authentication for Admin and User",
    "Secure JWT authentication using HttpOnly cookies",
    "Public package listing with filtering and details view",
    "User booking creation and booking history",
    "Admin dashboard for managing packages, bookings, and payments",
    "Protected frontend routes with auth guards",
    "Backend route-level authorization middleware",
    "Centralized error handling and API validation",
    "Payment-ready architecture with future gateway support",
    "Responsive UI with modern dashboard layout"
  ],

  result:
    "Delivered a secure and scalable travel booking platform demonstrating real-world authentication, authorization, and full-stack system design patterns.",

  metrics: [
    "2 user roles implemented",
    "25+ backend APIs",
    "End-to-end booking & payment flow"
  ],

  links: {
    demo: "https://travel-booking-demo.example.com",
    github: "https://github.com/yourusername/travel-booking-platform"
  }
}
,



{
  slug: "farmabazar",
  title: "FarmaBazar",
  tagline: "Role-based online medicine marketplace with secure payments",
  description:
    "FarmaBazar is a full-stack web application that enables users to purchase medicines online while allowing sellers to manage products and admins to control the platform through role-based dashboards.",
  type: "Full-stack",
  featured: true,
  thumbnail: "/farmabazar-dashboard.png",

  problem:
    "Local medicine sellers and pharmacies often lack a centralized digital platform to sell medicines online, manage inventory, and track payments securely with proper role-based access control.",

  solution:
    "Built a full-stack role-based medicine marketplace using Next.js and TypeScript. The system supports admin, seller, and user dashboards, secure JWT-based authentication, Stripe payment integration, invoice generation, and advanced reporting features.",

  techStack: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Redux Toolkit"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "Stripe API"
    ],
    database: ["MongoDB", "Mongoose"],
    other: [
      "Firebase Authentication",
      "React Helmet",
      "PDF & Excel Export"
    ]
  },

  features: [
    "Role-based authentication for Admin, Seller, and User",
    "Medicine management with category-wise filtering",
    "Advanced tables with pagination, sorting, and search",
    "Stripe payment integration with paid and pending status",
    "Invoice generation with download and print support",
    "Admin dashboard with sales revenue overview",
    "Seller dashboard with medicine and payment management",
    "Sales report with date range filter and export options",
    "Banner advertisement management by admin",
    "JWT-secured private routes and protected APIs"
  ],

  result:
    "Successfully implemented a complete end-to-end healthcare e-commerce platform demonstrating secure authentication, payment processing, and scalable role-based system design.",

  metrics: [
    "3 user roles implemented",
    "30+ functional features",
    "Secure payment & reporting workflows"
  ],

  links: {
    demo: "https://farmabazar-demo.example.com",
    github: "https://github.com/yourusername/farmabazar"
  }
} 
,
{
  "slug": "eventsphere",
  "title": "EventSphere",
  "tagline": "Smart Event Management and Booking Platform with Community & Membership",
  "description": "EventSphere is a full-stack web application designed for efficient event discovery, booking, and management. It supports role-based dashboards for admins, event organizers, and users, offering real-time seat selection, QR ticketing, interactive venue tours, membership tiers, and community engagement features.",
  "type": "Full-stack",
  "featured": true,
  "thumbnail": "/eventsphere-dashboard.png",

  "problem": "Event discovery and booking platforms often lack centralized role-based management, community engagement, membership benefits, and real-time features, making it difficult for organizers to manage events and for users to have a seamless, interactive experience.",

  "solution": "Built a full-stack, role-based event management platform using Next.js and React for the frontend, Node.js and Express for the backend, and MongoDB for the database. Implemented secure authentication with NextAuth and JWT, Stripe payments, real-time chat/video support, community posts, membership tiers, and analytics dashboards.",

  "techStack": {
    "frontend": [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "React Query",
      "React Hook Form",
      "Zustand"
    ],
    "backend": [
      "Node.js",
      "Express.js",
      "NextAuth",
      "JWT Authentication",
      "Stripe API",
      "Socket.io",
      "Simple-Peer"
    ],
    "database": ["MongoDB", "Mongoose"],
    "other": [
      "EmailJS / Nodemailer / Mailgun",
      "QR Code Generation",
      "Chart.js / Recharts",
      "Three.js & AR/3D venue visualization"
    ]
  },

  "features": [
    "Role-based dashboards for Admin, Organizer, and User",
    "Multi-category event management and booking",
    "Real-time seat selection and QR code ticketing",
    "Interactive venue tours with AR and 3D maps",
    "Community posts and reviews for user engagement",
    "Membership tiers: Gold, Diamond, Premium with exclusive benefits",
    "Live messaging and video-call support for premium members",
    "Stripe payment integration with secure checkout",
    "Admin analytics dashboards and performance tracking",
    "Event notifications, reminders, and social sharing"
  ],

  "result": "Successfully delivered a fully functional, production-level event management platform demonstrating advanced role-based access, real-time interactions, community engagement, and subscription-based membership workflows.",

  "metrics": [
    "3 distinct user roles implemented",
    "50+ functional features across dashboards and user interactions",
    "Integrated real-time communication and secure payments",
    "Enhanced user retention via community and membership features"
  ],

  "links": {
    "demo": "https://eventsphere-demo.example.com",
    "github": "https://github.com/yourusername/eventsphere"
  }
}


]
