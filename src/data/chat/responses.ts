import type { Intent } from "./intents"

export const RESPONSES: Record<Intent, string[]> = {
  stack: [
    "Trabajo principalmente con Vue.js en frontend y Laravel en backend. También tengo experiencia con Docker, MySQL y distintos entornos productivos.",
    "Mi stack principal es Vue + Laravel. Me muevo cómodo tanto en frontend como backend, con foco en soluciones prácticas."
  ],

  experience: [
    "Tengo varios años de experiencia desarrollando software en proyectos reales, tanto en equipos como de forma independiente.",
    "Arranqué a programar en 2016 y desde entonces trabajé en distintos proyectos, siempre con foco en calidad y entrega."
  ],

  projects: [
    "He trabajado en proyectos web reales, desde sistemas internos hasta productos orientados a usuarios finales.",
    "Mi portfolio refleja proyectos donde participé activamente en frontend, backend y toma de decisiones técnicas."
  ],

  way_of_working: [
    "Me gusta trabajar de forma clara y organizada. Valoro la comunicación, los objetivos bien definidos y la entrega constante.",
    "Soy pragmático: busco soluciones simples, mantenibles y alineadas a lo que el proyecto necesita."
  ],

  availability: [
    "Actualmente estoy abierto a oportunidades freelance o remotas, dependiendo del proyecto y el equipo.",
    "Estoy disponible para proyectos freelance y colaboraciones remotas."
  ],

  unknown: [
    "Puedo responder preguntas sobre mi experiencia profesional, stack y forma de trabajo.",
    "Esa información no está dentro de mi perfil profesional, pero con gusto puedo ayudarte en otro tema relacionado."
  ]
}
