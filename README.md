# Developer Portfolio

A premium, animated developer portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Premium dark theme with electric cyan accents
- ✨ Smooth animations and transitions with Framer Motion
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 SEO optimized with proper meta tags
- 🚀 Built with Next.js App Router for optimal performance
- 💼 Easy-to-customize content via TypeScript config files
- 🎭 3D-style hero section with interactive parallax effects
- 📊 Project case studies with detailed breakdowns
- 📧 Contact form with validation

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Getting Started

### Installation

1. Clone this repository or download the files
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

All content can be easily customized by editing the files in the `/data` folder:

### 1. Profile Information (`data/profile.ts`)

Update your personal information:
- Name, initials, role, location
- Bio paragraphs
- Email and social links
- Resume URL
- Years of experience
- Current project

### 2. Projects (`data/projects.ts`)

Add or edit projects:
- Update the `projects` array with your own projects
- Each project includes: title, description, tech stack, features, results, links
- Add project thumbnails to `/public` folder and update the `thumbnail` field
- Set `featured: true` for projects you want to highlight

### 3. Skills (`data/skills.ts`)

Customize your skills:
- Frontend technologies
- Backend technologies
- Databases and infrastructure
- Tools and other skills

### 4. Experience (`data/experience.ts`)

Update your work experience:
- Add or edit entries in the `experience` array
- Include role, company, date range, and responsibilities

### 5. Colors and Theme (`app/globals.css`)

Adjust the color palette by editing CSS variables:
- `--bg-app`: Main background color
- `--bg-surface`: Card/surface background
- `--text-primary`: Primary text color
- `--text-muted`: Muted/secondary text
- `--accent`: Main accent color (electric cyan)
- `--accent-soft`: Accent hover state
- `--border-subtle`: Border color

### 6. Images

Replace placeholder images in `/public` folder:
- Project thumbnails
- Any additional assets

### 7. Metadata (`app/layout.tsx`)

Update SEO metadata:
- Site title and description
- Open Graph tags
- Twitter card settings
- Favicon

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects listing and detail pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── hero-3d-visual.tsx # Animated hero visual
│   ├── bento-highlights.tsx # Bento grid cards
│   ├── featured-projects.tsx # Featured projects section
│   └── ui/               # UI components (shadcn)
├── data/                 # Content configuration files
│   ├── profile.ts        # Personal information
│   ├── projects.ts       # Project data
│   ├── skills.ts         # Skills and technologies
│   └── experience.ts     # Work experience
├── lib/                  # Utility functions
│   ├── utils.ts          # Helper functions
│   └── types.ts          # TypeScript types
└── public/               # Static assets
    └── *.png/jpg         # Project images
```

## Key Pages

- **Home (`/`):** Hero section, highlights, and featured projects
- **Projects (`/projects`):** Filterable project grid
- **Project Detail (`/projects/[slug]`):** Detailed case study for each project
- **About (`/about`):** Biography, skills, and experience timeline
- **Contact (`/contact`):** Contact form and social links

## Performance

This portfolio is optimized for performance:
- Server Components for fast initial load
- Client Components only where interactivity is needed
- Optimized images with Next.js Image component
- Efficient animations with `reduced-motion` support
- Clean, semantic HTML for accessibility

## Deployment

Deploy to Vercel (recommended):

```bash
vercel
```

Or any other hosting platform that supports Next.js.

## License

This portfolio template is open source and free to use for personal projects.

## Support

For issues or questions about customization, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
