import type { CVContent } from './types'

export const en: CVContent = {
  meta: {
    htmlLang: 'en',
    pageTitle: 'Christian Sepúlveda — Software Engineer',
  },
  name: 'Christian Sepúlveda',
  title: 'Software Engineer',
  initials: 'CS',
  contact: {
    emailLabel: 'Email',
    email: 'hello@csepulveda.cl',
    locationLabel: 'Location',
    location: 'Santiago, Chile',
    linkedinLabel: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/in/christian-sepulveda/',
    githubLabel: 'GitHub',
    githubUrl: 'https://github.com/Fralkayg',
  },
  nav: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    viewExperience: 'See my experience',
  },
  hero: {
    greeting: "Hi, I'm",
    tagline: 'I design and build enterprise software that solves real business problems.',
    ctaDownload: 'Download CV',
    ctaContact: 'Get in touch',
  },
  sectionTitles: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Featured Projects',
    testimonials: 'Testimonials',
    now: "What I'm Up To",
    hobbies: 'Hobbies & Interests',
    contact: "Let's get in touch",
  },
  duration: {
    present: 'Present',
    yearSingular: 'year',
    yearPlural: 'years',
    monthSingular: 'month',
    monthPlural: 'months',
  },
  summary: [
    'I am a friendly Software Engineer with experience developing enterprise applications. One of the things I enjoy the most about my work is the possibility to understand other people’s problems to then design and develop a solution which allows them to either make their work easier or contributes towards taking important decisions.',
    'While Spanish is my native language I am fluent in English. I consider myself a fast learner with strong troubleshooting and problem solving skills. I work well under pressure and enjoy being part of multidisciplinary teams, also, I take pride, responsibility and commitment to the work I do.',
  ],
  experience: [
    {
      company: 'Comscore',
      role: 'Software Engineer II (Remote)',
      startDate: '2023-08',
      endDate: null,
      bullets: [
        'Maintain and enhance business-critical enterprise applications, ensuring stability and long-term reliability.',
        'Develop and integrate new features to support evolving business requirements.',
        'Troubleshoot and resolve defects, performance issues, and incidents through root-cause analysis and remediation.',
        'Migrate legacy C++ codebases to Scala, modernizing core systems while preserving business logic and functionality.',
        'Leverage AI-assisted tools (mainly Claude) to accelerate legacy code debugging, refactor complex modules, generate unit test coverage, and produce technical documentation improving development velocity and code maintainability.',
      ],
      technologies: 'C#, .NET Framework, Python, SQL, C++, Scala, AI-assisted development tools.',
    },
    {
      company: 'Antara Mining Solutions',
      role: 'Software Developer (Remote)',
      startDate: '2022-09',
      endDate: '2023-07',
      bullets: [
        'Developed and maintained a .NET Core–based traceability platform for repairable components.',
        'Integrated SAP and Ellipse ERP data to ensure end-to-end visibility.',
        'Built APIs consumed by Xamarin Forms mobile apps and Azure Functions.',
        'Implemented new features and resolved issues to enhance platform functionality.',
        'Leveraged Azure resources (Functions, Cosmos DB, SQL DB, App Services, WebJobs) to ensure scalability and reliability.',
        'Collaborated with cross-functional teams to maintain system stability and performance.',
      ],
      technologies: 'C#, .NET Core, SQL, Azure.',
    },
    {
      company: 'Nimok',
      role: 'Fullstack Developer (Hybrid)',
      startDate: '2020-01',
      endDate: '2022-09',
      bullets: [
        'Enhanced and integrated features into a .NET Core–based legal services platform, enabling clients to track ongoing cases via web and Xamarin Forms mobile apps (iOS/Android).',
        'Utilized Azure and AWS resources to expand platform capabilities and improve performance.',
        'Designed and developed a compliance-focused platform in .NET Core to protect companies from corruption, including blockchain exploration for long-term document integrity.',
        'Analyzed and optimized an existing compliance program by identifying weaknesses and proposing tech-driven improvements.',
        'Developed a .NET Core web app for a security mutual company to streamline repetitive document processing.',
        'Implemented web scraping and scheduled jobs to automate workflows and applied view components to ensure information reuse and consistent UX.',
      ],
      technologies: 'C#, .NET Core, .NET Framework, SQL, Azure, AWS.',
    },
  ],
  technologiesLabel: 'Main technologies used:',
  viewProjectLabel: 'View project',
  // TODO(user): replace with real projects.
  projects: [
    {
      title: 'Project Name',
      description:
        'Short description of the problem this solves and your role in building it — replace me.',
      tech: ['Tech 1', 'Tech 2'],
      link: '#',
    },
    {
      title: 'Project Name',
      description:
        'Short description of the problem this solves and your role in building it — replace me.',
      tech: ['Tech 1', 'Tech 2'],
      link: '#',
    },
  ],
  // TODO(user): replace with real testimonials (only use quotes you have permission to publish).
  testimonials: [
    {
      quote: 'Placeholder quote — replace with a real testimonial.',
      name: 'Full Name',
      role: 'Role, Company',
    },
    {
      quote: 'Placeholder quote — replace with a real testimonial.',
      name: 'Full Name',
      role: 'Role, Company',
    },
  ],
  nowItems: ['Learning piano', 'Improving my frontend skills'],
  hobbies: ['Formula 1', 'UFC', 'Tennis', 'Traveling', 'Reading'],
  contactMessage:
    "Got a project in mind, or just poking around? Either way, drop me a line I'm always up for a good conversation.",
  qrCaption: 'Scan to visit this page',
}
