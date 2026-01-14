// src/i18n/es.ts
export default {
    header: [  
        { title: "Experiencia", section: "experiencia", url: "#experiencia" },
        { title: "Proyectos", section: "proyectos", url: "#proyectos" },
        { title: "Sobre mí", section: "sobre-mi", url: "#sobre-mi" },
        { title: "Curriculum", url: "/CV_NICO_PIOVANO_2024.pdf", download: true }
      ],
    personal: {
      title: "Desarrollador Fullstack",
      subtitle: "+7 años de experiencia.",
      badge: "Disponible para trabajar",
    },
    projects: {
      title: "Proyectos",
      code: "Code",
      preview: "Preview",
      items: [
        {
          title: "ChatQuasar - Chat en vivo!",
          description: "Un chat desarrollado con lo último de Vue (Quasar). Multiples usuarios pueden conversar en el mismo chat. Logueo y autenticación con Gmail y Firebase. Creado desde cero con Quasar."
        },
        {
          title: "App de Clima",
          description: "Aplicación conectada a dos Apis (una de ciudades, otra de clima) para consultar el clima actual, diario y semanal. Desarrollada con historial de búsqueda. Creada desde cero con Vue y Tailwind CSS."
        }
      ]
    },
    experience: {
      title: "Experiencia laboral",
      learning: "Aprendizajes:",
      items: [
        {
          date: "Ago. 2024 - Actualmente..",
          title: "Desarrollador Web Fullstack",
          company: "Servicios Computables S.A.",
          usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
          description: "Desarrollo de sistemas informáticos para las distintas Municipalidades de la República Argentina.",
          aprendizajes: "Perfeccionamiento de tecnologías frontend. Reutilización de componentes y estados de Vue. Mejora en el uso de Docker."
        },
        {
          date: "Jun. 2021 - Abr. 2023",
          title: "Desarrollador Web Fullstack",
          company: "Servicios Computables S.A.",
          usos: ['React', 'Laravel', 'Docker', 'MySQL'],
          description: "Desarrollo de sistemas informáticos para las distintas Municipalidades de la República Argentina.",
          aprendizajes: "Desarrollo personal y laboral en frontend. Manejo de estados y hooks de React. Desarrollo de test unitarios."
        },
        {
          date: "Nov. 2020 - May. 2021",
          title: "Desarrollador Web Backend",
          company: "Creative Coefficient",
          usos: ['Prestashop', 'React', 'Docker'],
          description: "Desarrollo en conjunto de panel administrativo de un sistema de millas reconocido internacionalmente (Smiles).",
          aprendizajes: "Manejo de CMS, comunicación directa con clientes de Estados Unidos mediante dailies en inglés."
        },
        {
          date: "Dic. 2018 - Ene. 2021",
          title: "Desarrollador Web Fullstack",
          company: "CNRT (Ministerio de Transporte)",
          usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
          description: "Mantenimiento y desarrollo de sistemas internos y externos para transportes públicos de corta y larga distancia.",
          aprendizajes: "Inicio como Trainee. Lenguaje puro a Frameworks. Sólida base en seguridad, arquitectura de datos y optimización de consultas SQL."
        }
      ]
    },
    aboutMe: {
      title: "Sobre mí 😉",
      paragraphs: [
        {
          before: "Inicié mi carrera en programación en 2016 ",
          strong: "desarrollando con paciencia, confianza y de manera resolutiva",
          after: " los distintos desafíos propuestos."
        },
        {
          before: "Me adapto rápidamente a nuevas tecnologías y proyectos, y siempre busco ",
          strong: "soluciones pragmáticas",
          after: " que permitan avanzar de manera efectiva, incluso en entornos desafiantes."
        },
        {
          before: "Además, he viajado y vivido por varios países de Latinoamérica mientras trabajaba en hostels, lo que fortaleció mis ",
          strong: "habilidades sociales, la adaptabilidad y la capacidad de colaborar",
          after: " con equipos diversos."
        },
        {
          before: "Mis metas actuales incluyen expandirme en el ámbito freelance y aplicar mi ",
          strong: "enfoque resolutivo y adaptable",
          after: " para generar resultados concretos en cada proyecto."
        }
      ]
    },
    footer: {
      developed: "Desarrollado con",
      downloadCV: "Descarga CV 2026"
    },
    browserModal: {
      title: "Recomendación de Navegador",
      message: "Esta página contiene efectos visuales 3D que funcionan mejor en Mozilla Firefox.",
      recommendation: "Para una experiencia óptima, te recomiendo usar Firefox.",
      downloadFirefox: "Descargar Firefox",
      continue: "Continuar"
    },
    seo: {
      title: "Porfolio de Nico Piovano - Desarrollador Web con +7 años de experiencia",
      description: "Contrata a Nico para crear tu aplicación web o móvil. Desarrollador Web."
    }
  }