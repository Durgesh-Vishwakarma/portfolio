/**
 * Single source of truth for site content.
 * Also used as the offline/fallback payload when the /api/portfolio endpoint
 * is unreachable (cold-started Render instance, local dev without a DB, etc).
 * Keep this in sync with server/seed.js.
 */

export const SITE_URL = 'https://durgesh-portfolio.vercel.app'

export const content = {
  hero: {
    name: 'Durgesh Vishwakarma',
    title: 'Full Stack Developer',
    tagline: 'MERN · React Native · Node.js · AI integration',
    intro:
      'I build production web and mobile applications end to end — React and Next.js on the front, Node, Express and MongoDB behind them. Two years shipping e-commerce, booking and AI-assisted products at Servora and Deloitte USI.',
    location: 'Mumbai, India',
    availability: 'Open to full-stack roles & freelance work',
    stats: [
      { value: '2+', label: 'Years shipping production code' },
      { value: '4', label: 'Live products in this portfolio' },
      { value: '150+', label: 'DSA problems solved' },
    ],
  },

  about: {
    image: '/profile.jpg',
    resumeUrl: '/resume.pdf?v=2026-07',
    headline: 'Full-stack engineer who owns features from schema to screen',
    paragraphs: [
      "I'm a Full Stack Developer based in Mumbai with two years of experience building web and mobile applications on React, React Native, Node.js, Express, MongoDB and PostgreSQL. Most of my work sits in the unglamorous middle of the stack — designing REST APIs, getting authentication and authorization right, and making sure the data model holds up once real users touch it.",
      'At Servora I build client-facing applications with React and Next.js and the Node/Express APIs behind them: admin workflows, content management, and booking modules. Before that, at Deloitte USI, I developed MERN e-commerce features end to end — product listing, search and filtering, cart and orders, user profiles and admin flows — secured with JWT authentication, role-based access control and request validation.',
      'I write unit and integration tests alongside features rather than after them, because catching a regression in CI is cheaper than catching it in production. I am comfortable debugging across the whole stack: frontend state, API responses, backend logic and deployment. Currently open to full-stack roles where I can own features end to end.',
    ],
    principles: [
      {
        title: 'Tested by default',
        desc: 'Unit and integration tests written alongside features, not bolted on before release.',
      },
      {
        title: 'Secure by design',
        desc: 'JWT auth, RBAC, request validation, password hashing and rate limiting on every protected route.',
      },
      {
        title: 'Readable over clever',
        desc: 'Reusable service/controller patterns and documented setup so the next developer moves fast.',
      },
    ],
    skillGroups: [
      {
        label: 'Frontend',
        items: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript (ES2022)', 'Tailwind CSS'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'Request Validation'],
      },
      {
        label: 'Data',
        items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Supabase'],
      },
      {
        label: 'Testing & DevOps',
        items: ['Unit Testing', 'Integration Testing', 'Git & GitHub', 'Docker', 'Postman', 'Vercel', 'Render'],
      },
      {
        label: 'AI',
        items: ['Hugging Face API', 'AI API Integration', 'Prompt-assisted tooling'],
      },
    ],
  },

  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Servora',
      location: 'Mumbai, Maharashtra',
      period: 'Nov 2025 — Present',
      current: true,
      points: [
        'Build and maintain client-facing web applications in React and Next.js — reusable components, responsive layouts and API-driven interfaces.',
        'Design Node.js/Express REST APIs for authentication, admin workflows, content management and booking business modules.',
        'Write unit and integration tests alongside feature work to catch regressions early and raise release confidence.',
        'Model, query and debug data across MongoDB and PostgreSQL, handling payload validation and backend business logic.',
        'Integrate third-party and AI-assisted APIs with proper loading, error handling and response validation.',
      ],
      stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
    },
    {
      role: 'Trainee Analyst Engineer',
      company: 'Deloitte USI',
      location: 'Mumbai',
      period: 'Jul 2024 — Oct 2025',
      current: false,
      points: [
        'Developed MERN e-commerce features end to end using React, Node.js, Express and MongoDB in a client-server architecture.',
        'Built secure REST APIs with JWT authentication, RBAC, request validation and centralized error handling on a reusable service/controller pattern.',
        'Implemented product listing, search and filtering, cart and order, user profile and admin flows with performance-optimized React components.',
        'Wrote unit and integration tests validating API behaviour and core application logic, reducing regressions across releases.',
        'Collaborated in Agile sprints — Git/GitHub workflows, peer code review, bug fixing and documentation.',
      ],
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Jest', 'Agile'],
    },
  ],

  education: {
    degree: 'B.E. Computer Engineering',
    school: 'Mumbai University',
    period: 'Jan 2020 — May 2024',
    detail: 'CGPA 8.50',
  },

  projects: [
    {
      slug: 'shopsphere',
      title: 'ShopSphere',
      subtitle: 'Full-stack e-commerce platform',
      year: '2025',
      summary:
        'A complete MERN e-commerce application covering the entire shopping journey — product catalogue with search and filtering, cart, wishlist, checkout, order history, user profiles and an admin dashboard.',
      highlights: [
        'JWT authentication with hashed passwords, protected REST routes, request validation and rate limiting',
        'Product search, category filtering and paginated listing built on indexed MongoDB queries',
        'Admin module for product, inventory and order management with role-based access control',
      ],
      image: '/shopsphere.png',
      alt: 'ShopSphere e-commerce platform product listing and cart interface',
      liveUrl: 'https://shop-sphere-steel.vercel.app/',
      sourceUrl: 'https://github.com/Durgesh-Vishwakarma/ShopSphere',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Docker', 'Tailwind CSS'],
      featured: true,
      order: 1,
    },
    {
      slug: 'ai-notes',
      title: 'AI Notes',
      subtitle: 'Write notes, get instant summaries',
      year: '2025',
      summary:
        'A note-taking app that turns long-form writing into short summaries on demand. Notes are tagged, searchable and structured, with AI summarization served through a dedicated backend endpoint rather than the browser.',
      highlights: [
        'Hugging Face summarization proxied through Express, keeping API keys server-side',
        'Explicit loading, failure and retry states so a slow model never leaves the UI hanging',
        'Tag and full-text search across searchable note metadata for fast retrieval',
      ],
      image: '/notes.png',
      alt: 'AI Notes application showing a note with an AI-generated summary',
      liveUrl: 'https://ai-notes-app-pi.vercel.app/',
      sourceUrl: 'https://github.com/Durgesh-Vishwakarma/AI_Notes_App',
      tags: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Hugging Face API', 'Context API'],
      featured: true,
      order: 2,
    },
    {
      slug: 'glowup-salon',
      title: 'GlowUp Salon & Spa',
      subtitle: 'Local business site with online booking',
      year: '2026',
      summary:
        'A conversion-focused website for a salon and spa in Bandra West, Mumbai. Service menu with transparent pricing, stylist profiles, a photo gallery and an appointment booking flow — built mobile-first, since almost every local search happens on a phone.',
      highlights: [
        'Mobile-first booking flow: pick service, stylist and time slot in three taps',
        'Local SEO groundwork — location-specific headings, structured service data and fast LCP',
        'Accessible, keyboard-navigable components with a warm, brand-led visual system',
      ],
      image: '/covers/glowup.svg',
      alt: 'GlowUp Salon and Spa website homepage with service cards and booking panel',
      liveUrl: 'https://glow-up-salon-flax.vercel.app/',
      sourceUrl: '',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Local SEO'],
      featured: false,
      order: 3,
    },
    {
      slug: 'moviehub',
      title: 'MovieHub',
      subtitle: 'Find your next film in seconds',
      year: '2026',
      summary:
        'A film and series discovery app built on a public movie API. Debounced search across hundreds of thousands of titles, filtering by type and decade, and a poster grid that stays readable from phone to widescreen.',
      highlights: [
        'Debounced, cancellable search requests to avoid hammering the API on every keystroke',
        'Graceful empty, loading and error states for a third-party API you do not control',
        'Responsive poster grid with lazy-loaded images and rating badges',
      ],
      image: '/covers/moviehub.svg',
      alt: 'MovieHub film discovery app showing a search bar and a grid of movie posters with ratings',
      liveUrl: 'https://imdb-mocha-six.vercel.app/',
      sourceUrl: '',
      tags: ['React', 'REST API', 'Debounced Search', 'Tailwind CSS'],
      featured: false,
      order: 4,
    },
  ],

  contact: {
    heading: "Let's build something",
    text: "I'm open to full-stack engineering roles and selective freelance work. If you have a project, a role, or just a question about something in this portfolio, my inbox is open.",
    email: 'vishwakarmadurgesh21@gmail.com',
    altEmail: 'durgesh103v@gmail.com',
    phone: '+91 7972109103',
    location: 'Mumbai, Maharashtra, India',
    responseTime: 'Usually replies within a day',
  },

  social: {
    github: 'https://github.com/Durgesh-Vishwakarma',
    linkedin: 'https://www.linkedin.com/in/durgesh-vishwakarma-94ab91228/',
    email: 'mailto:vishwakarmadurgesh21@gmail.com',
  },
}

export default content
