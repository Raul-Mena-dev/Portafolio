export const siteContent = {
  personal: {
    name: 'Raul Eduardo Mena Chavez',
    role: 'Full Stack Developer & Computer Engineer',
    summary:
      'I build practical digital products across frontend and backend, with attention to usability, maintainability, and real operational needs.',
    location: 'Guadalajara, MX',
    email: 'raulmenadev@gmail.com',
    availability: 'Open to remote and hybrid opportunities',
  },
  hero: {
    eyebrow: 'Portfolio 2026',
    title:
      'Building complete web solutions with solid frontend experiences and reliable backend logic.',
    description:
      'Full stack developer and computer engineer focused on creating web applications that connect clean interfaces, organized business logic, and maintainable systems for real users.',
    stats: [
      { value: 'Full Stack', label: 'Frontend and backend development' },
      { value: '3', label: 'Portfolio projects featured here' },
      { value: 'React + APIs', label: 'Current product-building focus' },
    ],
    primaryActions: [
      { label: 'View Projects', href: '#projects', variant: 'solid' },
      { label: 'CV ES', href: '/cv-es.pdf', variant: 'outline', download: true },
      { label: 'CV EN', href: '/cv-en.pdf', variant: 'outline', download: true },
      { label: 'Contact Me', href: '#contact', variant: 'ghost' },
    ],
  },
  about: {
    heading: 'A full stack developer who enjoys turning ideas into working systems.',
    paragraphs: [
      'I am a computer engineer and full stack developer from Guadalajara who enjoys building useful software from end to end. I like working on both the visual side of products and the backend logic that supports them.',
      'My experience is centered on web development with a practical mindset: interfaces that are clear to use, backend flows that solve real business needs, and codebases that remain understandable as projects grow.',
      'Outside of work, I am a cheerful, honest, and hardworking person who enjoys video games, especially factory-style games, 3D printing, board games, and technology in general.',
    ],
    highlights: [
      'Comfortable working across frontend interfaces and backend workflows',
      'Interested in practical systems such as inventory, POS, and process automation',
      'Strong curiosity for technology, problem solving, and product improvement',
    ],
  },
  technologies: [
    { name: 'React', category: 'Frontend', level: 94 },
    { name: 'JavaScript', category: 'Language', level: 92 },
    { name: 'HTML5', category: 'Markup', level: 96 },
    { name: 'CSS / SCSS', category: 'Styling', level: 93 },
    { name: 'Python', category: 'Backend', level: 88 },
    { name: 'Django', category: 'Framework', level: 86 },
    { name: 'PHP', category: 'Backend', level: 82 },
    { name: 'C#', category: 'Backend', level: 80 },
    { name: 'Git', category: 'Workflow', level: 90 },
    { name: 'REST APIs', category: 'Integration', level: 88 },
    { name: 'SQL', category: 'Database', level: 84 },
    { name: 'SOAP', category: 'Integration', level: 76 },
  ],
  projects: [
    {
      name: 'Caramelo POS',
      year: '2026',
      description:
        'Full point-of-sale and inventory management system built for real daily operations at Dulceria Caramelo, with catalog administration, sales flows, shift handling, and reporting modules.',
      stack: ['Python', 'Django', 'HTML', 'CSS', 'SQL'],
      links: {
        github: 'https://github.com/Raul-Mena-dev/Caramelo-POS',
      },
      metrics: ['Currently used in Dulceria Caramelo', 'POS and shift workflow', 'Sales and reporting modules'],
    },
    {
      name: 'Mi Inventario',
      year: '2025',
      description:
        'Inventory and ticket management application with local data handling, product registration, ticket history, and PDF export features for practical day-to-day control.',
      stack: ['Dart', 'Flutter', 'SQLite', 'PDF Export'],
      links: {
        github: 'https://github.com/Raul-Mena-dev/mi_inventario',
      },
      metrics: ['Product and stock records', 'Ticket history flow', 'PDF generation and export'],
    },
    {
      name: 'Impresion 3D Pagina',
      year: '2026',
      description:
        'Website project focused on presenting 3D printing services with a clear interface, product-oriented sections, and a frontend structure prepared for future content growth.',
      stack: ['TypeScript', 'Frontend', 'Responsive UI'],
      links: {
        github: 'https://github.com/Raul-Mena-dev/impresion3d-pagina',
      },
      metrics: ['3D printing service page', 'Product-focused presentation', 'Responsive frontend structure'],
    },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Pegasus Control',
      period: 'September 2022 - Present',
      description:
        'Started as a QA Tester and was promoted to Junior Developer in three months, later growing into a Mid-Level Product Engineer role while contributing across backend systems, integrations, and product improvements.',
      achievements: [
        'Develop and maintain production backend systems in Python, PHP, and C#',
        'Implemented volumetric control systems aligned with SAT regulations',
        'Processed large CSV and XML files for fiscal and accounting workflows',
        'Integrated internal and external systems through REST and SOAP APIs',
        'Improved user interfaces to create more efficient and modern experiences',
        'Reduced failures by 90% in one critical system and helped cut issues by 50% in other projects',
        'Built and maintained solutions for a leading Gas LP company with thousands of users nationally and internationally',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Personal Projects',
      period: 'Ongoing',
      description:
        'Built personal products that connect frontend usability with backend structure, focusing on management systems, inventory control, sales processes, and practical workflow automation.',
      achievements: [
        'Created complete applications from data handling to user interface',
        'Explored inventory, POS, and ticket-based workflows through real product ideas',
        'Strengthened independent delivery across architecture, coding, and iteration',
      ],
    },
  ],
  contact: {
    title: "Let's build something clear, fast, and memorable.",
    description:
      'If you are hiring for a full stack role or need someone who can contribute across frontend and backend, I would be glad to connect.',
    links: [
      { label: 'Email', value: 'raulmenadev@gmail.com', href: 'mailto:raulmenadev@gmail.com' },
      { label: 'GitHub', value: 'github.com/Raul-Mena-dev', href: 'https://github.com/Raul-Mena-dev/Raul-Mena-dev' },
      { label: 'LinkedIn', value: 'linkedin.com/in/raul-mena', href: 'https://www.linkedin.com/in/raul-mena/' },
    ],
  },
}

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
