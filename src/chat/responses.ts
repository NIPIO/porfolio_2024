import type { Intent } from "./intents"

export const RESPONSES: Record<Intent, string[]> = {
  stack: [
    "Trabajo principalmente con Vue.js en frontend y Laravel en backend. También uso Docker, MySQL y APIs REST en proyectos reales. ¿Buscás a alguien más enfocado en frontend, backend o fullstack?",
    "Mi stack base es Vue + Laravel, con experiencia en frontend moderno y lógica de backend. Me adapto rápido a nuevos entornos. ¿Qué tecnologías usan hoy en el proyecto?",
    "Tengo fuerte foco en frontend con Vue, pero también desarrollo backend en Laravel sin problema. Me gusta entender el sistema completo. ¿El rol es más técnico o mixto?",
    "Trabajo con tecnologías probadas, priorizando mantenibilidad y performance antes que modas. ¿El proyecto ya tiene stack definido o está abierto a propuestas?"
  ],

  experience: [
    "Tengo varios años de experiencia trabajando en proyectos reales, tanto en equipos como de forma independiente. ¿Buscan a alguien senior o un perfil más intermedio?",
    "Arranqué a programar en 2016 y desde entonces participé en distintos tipos de proyectos, desde sistemas internos hasta productos web. ¿El proyecto es greenfield o mantenimiento?",
    "Trabajé con clientes y equipos diversos, lo que me dio buena capacidad de adaptación. ¿El equipo ya está armado o se está formando?",
    "Mi experiencia está muy ligada a resolver problemas reales y entregar valor, no solo escribir código. ¿Qué es lo más crítico hoy para el proyecto?"
  ],

  projects: [
    "He trabajado en proyectos web reales, tanto productos internos como aplicaciones orientadas a usuarios finales. ¿Te interesa ver algún tipo de proyecto en particular?",
    "En mi portfolio hay proyectos donde participé en frontend, backend y decisiones técnicas. ¿El proyecto que tienen es similar a alguno de esos casos?",
    "Me involucré en proyectos desde la idea inicial hasta la puesta en producción. ¿Buscan a alguien que tome ownership técnico?",
    "Tengo experiencia desarrollando features completas de punta a punta. ¿El rol requiere autonomía técnica?"
  ],

  way_of_working: [
    "Trabajo con un enfoque pragmático: busco soluciones simples, mantenibles y alineadas a lo que el proyecto necesita. ¿El proyecto es más exploratorio o ya está definido?",
    "Valoro mucho la comunicación clara, los objetivos bien definidos y las entregas constantes. ¿Cómo suelen organizar el trabajo?",
    "Me adapto bien a metodologías ágiles y equipos remotos. ¿Trabajan con Scrum, Kanban u otra dinámica?",
    "Soy bastante autónomo, pero siempre alineado al equipo y al negocio. ¿Qué nivel de independencia esperan del rol?"
  ],

  availability: [
    "Sí, estoy disponible para proyectos freelance y colaboraciones remotas. ¿Buscan dedicación full time o por horas?",
    "Actualmente estoy abierto a oportunidades freelance o remotas, dependiendo del proyecto. ¿Cuál sería la duración estimada?",
    "Puedo adaptarme a distintos esquemas de contratación. ¿Es una posición a largo plazo o un proyecto puntual?",
    "Estoy disponible para sumarme a equipos remotos. ¿En qué zona horaria trabajan normalmente?"
  ],

  unknown: [
    "No estoy seguro de haber entendido del todo, pero puedo responder preguntas sobre mi experiencia, stack o forma de trabajo. ¿Por dónde te gustaría seguir?",
    "Esa pregunta no está directamente relacionada con mi perfil profesional, pero con gusto puedo ayudarte en algo más específico. ¿Qué te gustaría saber?",
    "Si querés, puedo contarte sobre mi experiencia, proyectos o disponibilidad. ¿Qué te interesa conocer ahora?",
    "Puedo ampliar sobre cualquier aspecto técnico o profesional. ¿Qué parte del perfil te gustaría profundizar?"
  ]
}
