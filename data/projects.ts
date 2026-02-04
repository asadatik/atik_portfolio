export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  type: "Full-stack" |  "mern-stack" | "e-commerce" |  "other"
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
  slug: "TripNest",
  title: "TripNest",
  tagline: "Role-based travel booking platform with secure payments and admin control",

  description:
    "A full-stack travel booking platform where users can explore travel packages, create bookings, and manage payments, while admins control packages, bookings, and payment workflows through a secure dashboard.",

  type: "Full-stack",
  featured: true,
  thumbnail: "/TripNest.png",

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
    demo: "https://trip-nest-front-end.vercel.app",
    github: "https://github.com/asadatik/TripNest-front-end"
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
  "thumbnail": "/EventSphere.png",

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
    "demo": "https://event-sphere-ashen.vercel.app",
    "github": "https://github.com/asadatik/EventSphere-Client"
  }
}

,
{
  slug: "parcelpro",
  title: "ParcelPro",
  tagline: "Role-based parcel delivery, tracking & payment platform",
  description:
    "ParcelPro is a full-stack parcel delivery management system that enables users to send parcels, track delivery status in real time, and complete payments securely while administrators manage operations through a role-based dashboard.",
  type: "mern-stack",
  featured: true,
  thumbnail: "/ParcelPro.png",

  problem:
    "Most local parcel delivery systems lack real-time tracking, structured admin control, and integrated digital payments, causing delays, poor transparency, and manual billing issues.",

  solution:
    "Built a scalable parcel delivery platform with role-based access control, real-time status tracking, and a secure Stripe-powered payment flow. The system ensures transparent delivery updates, admin-controlled workflows, and seamless online payments.",

  techStack: {
    frontend: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Hook Form",
      "Framer Motion"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "Role-Based Access Control",
      "Stripe API"
    ],
    database: ["MongoDB", "Mongoose"],
    other: [
      "REST API Architecture",
      "Secure Payment Workflow",
      "Stripe Checkout & Webhooks"
    ]
  },

  features: [
    "Role-based authentication for Admin, Sender, and Receiver",
    "Admin dashboard for parcel and user management",
    "Real-time parcel status tracking system",
    "Parcel request, approval, and delivery workflow",
    "Secure Stripe payment integration for parcel delivery",
    "Payment status tracking (paid, pending, failed)",
    "Admin-controlled parcel status updates",
    "JWT-protected private routes and APIs",
    "Scalable architecture for future service expansion"
  ],

  result:
    "Successfully delivered a production-ready parcel delivery platform demonstrating real-world logistics management, secure payments, and scalable full-stack system design.",

  metrics: [
    "3 user roles implemented",
    "Stripe-based payment workflow",
    "Real-time delivery tracking"
  ],

  links: {
    demo: "https://percel-frontend.vercel.app",
    github: "https://github.com/asadatik/parcel-booking-system-frontend"
  }
}



]
