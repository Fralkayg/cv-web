import type { Locale } from '../src/data/content'

export interface ResumeExtras {
  fileName: string
  sectionTitles: {
    contact: string
    languages: string
    certificates: string
    summary: string
    experience: string
    technicalSkills: string
    interpersonalSkills: string
    education: string
  }
  languages: { name: string; level: string }[]
  certificates: { name: string; period: string }[]
  technicalSkills: string[]
  interpersonalSkills: string[]
  education: { period: string; institution: string; degree: string }[]
}

const en: ResumeExtras = {
  fileName: 'CV_EN.pdf',
  sectionTitles: {
    contact: 'Contact',
    languages: 'Languages',
    certificates: 'Certificates',
    summary: 'Summary',
    experience: 'Experience',
    technicalSkills: 'Technical Skills',
    interpersonalSkills: 'Interpersonal Skills',
    education: 'Education',
  },
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Full professional' },
  ],
  certificates: [{ name: 'Test of English for International Communication (TOEIC) - C1', period: '2023' }],
  technicalSkills: [
    '.NET Core',
    '.NET Framework',
    'C#',
    'Xamarin Forms',
    'APIs',
    'Relational and non-relational databases',
    'Microsoft Azure',
    'Azure DevOps',
    'SCRUM Methodology',
    'Entity Framework',
    'Identity',
    'HTML',
    'CSS',
    'JavaScript',
    'CI/CD',
    'Python',
    'C/C++',
    'Docker',
  ],
  interpersonalSkills: [
    'Fast learner',
    'Problem-solving',
    'Teamwork',
    'Accountability',
    'Willingness to learn',
    'Adaptability',
    'Independence',
    'Motivation',
    'Time management',
  ],
  education: [
    {
      period: '2017 - 2022',
      institution: 'Universidad Técnica Federico Santa María',
      degree: 'Bachelor of Science in Computer Engineering',
    },
    {
      period: '2013 - 2016',
      institution: 'Universidad Técnica Federico Santa María',
      degree: 'Technician in Computer Science',
    },
  ],
}

const es: ResumeExtras = {
  fileName: 'CV_ES.pdf',
  sectionTitles: {
    contact: 'Contacto',
    languages: 'Idiomas',
    certificates: 'Certificados',
    summary: 'Resumen',
    experience: 'Experiencia',
    technicalSkills: 'Habilidades Técnicas',
    interpersonalSkills: 'Habilidades Interpersonales',
    education: 'Educación',
  },
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Dominio profesional completo' },
  ],
  certificates: [{ name: 'Test of English for International Communication (TOEIC) - C1', period: '2023' }],
  technicalSkills: [
    '.NET Core',
    '.NET Framework',
    'C#',
    'Xamarin Forms',
    'APIs',
    'Bases de datos relacionales y no relacionales',
    'Microsoft Azure',
    'Azure DevOps',
    'Metodología SCRUM',
    'Entity Framework',
    'Identity',
    'HTML',
    'CSS',
    'JavaScript',
    'CI/CD',
    'Python',
    'C/C++',
    'Docker',
  ],
  interpersonalSkills: [
    'Aprendizaje rápido',
    'Resolución de problemas',
    'Trabajo en equipo',
    'Responsabilidad',
    'Disposición a aprender',
    'Adaptabilidad',
    'Independencia',
    'Motivación',
    'Gestión del tiempo',
  ],
  education: [
    {
      period: '2017 - 2022',
      institution: 'Universidad Técnica Federico Santa María',
      degree: 'Licenciatura en Ciencias de la Ingeniería / Ingeniería Civil Informática',
    },
    {
      period: '2013 - 2016',
      institution: 'Universidad Técnica Federico Santa María',
      degree: 'Técnico en Informática',
    },
  ],
}

export const resumeExtras: Record<Locale, ResumeExtras> = { en, es }
