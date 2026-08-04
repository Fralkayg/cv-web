import type { CVContent } from './types'

export const es: CVContent = {
  meta: {
    htmlLang: 'es',
    pageTitle: 'Christian Sepúlveda — Ingeniero de Software',
  },
  name: 'Christian Sepúlveda',
  title: 'Ingeniero de Software',
  initials: 'CS',
  contact: {
    emailLabel: 'Correo electrónico',
    email: 'csepulvedav@outlook.com',
    locationLabel: 'Ubicación',
    location: 'Santiago, Chile',
    linkedinLabel: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/in/christian-sepulveda/',
    githubLabel: 'GitHub',
    githubUrl: 'https://github.com/Fralkayg',
  },
  nav: {
    summary: 'Resumen',
    experience: 'Experiencia',
    contact: 'Contacto',
    viewExperience: 'Ver mi experiencia',
  },
  hero: {
    greeting: 'Hola, soy',
    tagline: 'Diseño y desarrollo software empresarial que resuelve problemas reales de negocio.',
    ctaDownload: 'Descargar CV',
    ctaContact: 'Contáctame',
  },
  sectionTitles: {
    summary: 'Resumen',
    experience: 'Experiencia',
    contact: 'Hablemos',
  },
  summary: [
    'Soy un Ingeniero de Software cercano y con experiencia desarrollando aplicaciones empresariales. Una de las cosas que más disfruto de mi trabajo es la posibilidad de entender los problemas de otras personas para luego diseñar y desarrollar una solución que les permita facilitar su trabajo o contribuir a la toma de decisiones importantes.',
    'Si bien el español es mi idioma nativo, tengo un dominio fluido del inglés. Me considero una persona que aprende rápido, con fuertes habilidades de resolución de problemas. Trabajo bien bajo presión y disfruto formar parte de equipos multidisciplinarios; además, actúo con orgullo, responsabilidad y compromiso en el trabajo que realizo.',
  ],
  experience: [
    {
      company: 'Comscore',
      role: 'Software Engineer II (Remoto)',
      period: 'Agosto 2023 - Presente (3 años)',
      bullets: [
        'Mantener y mejorar aplicaciones empresariales críticas para el negocio, asegurando estabilidad y confiabilidad a largo plazo.',
        'Desarrollar e integrar nuevas funcionalidades para responder a requisitos de negocio en evolución.',
        'Diagnosticar y resolver defectos, problemas de rendimiento e incidentes mediante análisis de causa raíz y su remediación.',
        'Migrar bases de código legadas en C++ a Scala, modernizando sistemas centrales mientras se preserva la lógica de negocio y su funcionalidad.',
        'Utilizar herramientas asistidas por IA (principalmente Claude) para acelerar la depuración de código legado, refactorizar módulos complejos, generar cobertura de pruebas unitarias y producir documentación técnica, mejorando la velocidad de desarrollo y la mantenibilidad del código.',
      ],
      technologies: 'C#, .NET Framework, Python, SQL, C++, Scala, herramientas de desarrollo asistidas por IA.',
    },
    {
      company: 'Antara Mining Solutions',
      role: 'Desarrollador de Software (Remoto)',
      period: 'Septiembre 2022 - Julio 2023 (11 meses)',
      bullets: [
        'Desarrollé y mantuve una plataforma de trazabilidad basada en .NET Core para componentes reparables.',
        'Integré datos de los ERP SAP y Ellipse para asegurar visibilidad de extremo a extremo.',
        'Construí APIs consumidas por aplicaciones móviles en Xamarin Forms y Azure Functions.',
        'Implementé nuevas funcionalidades y resolví incidencias para mejorar la funcionalidad de la plataforma.',
        'Utilicé recursos de Azure (Functions, Cosmos DB, SQL DB, App Services, WebJobs) para asegurar escalabilidad y confiabilidad.',
        'Colaboré con equipos multidisciplinarios para mantener la estabilidad y el rendimiento del sistema.',
      ],
      technologies: 'C#, .NET Core, SQL, Azure.',
    },
    {
      company: 'Nimok',
      role: 'Desarrollador Fullstack (Híbrido)',
      period: 'Enero 2020 - Septiembre 2022 (2 años 9 meses)',
      bullets: [
        'Mejoré e integré funcionalidades en una plataforma de servicios legales basada en .NET Core, permitiendo a los clientes hacer seguimiento de sus casos vía web y aplicaciones móviles en Xamarin Forms (iOS/Android).',
        'Utilicé recursos de Azure y AWS para ampliar las capacidades de la plataforma y mejorar su rendimiento.',
        'Diseñé y desarrollé una plataforma enfocada en cumplimiento normativo en .NET Core para proteger a las empresas frente a la corrupción, incluyendo exploración de blockchain para la integridad de documentos a largo plazo.',
        'Analicé y optimicé un programa de cumplimiento existente, identificando debilidades y proponiendo mejoras basadas en tecnología.',
        'Desarrollé una aplicación web en .NET Core para una mutual de seguridad, con el fin de agilizar el procesamiento de documentos repetitivos.',
        'Implementé web scraping y tareas programadas para automatizar flujos de trabajo, y apliqué componentes de vista para asegurar la reutilización de información y una experiencia de usuario consistente.',
      ],
      technologies: 'C#, .NET Core, .NET Framework, SQL, Azure, AWS.',
    },
  ],
  technologiesLabel: 'Principales tecnologías utilizadas:',
  contactMessage:
    '¿Tienes un proyecto en mente o solo andas curioseando? De cualquier forma, escríbeme — siempre estoy para una buena conversación.',
}
