import { INTENT_KEYWORDS, type Intent } from "./intents"

export function matchIntent(message: string): string {
  const text = message.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  // Volver al inicio siempre tiene prioridad
  if (text.includes("volver al inicio") || text.includes("volver")) return "greeting"

  // Intents de segundo nivel - más específicos primero
  if (text.includes("proyecto") || text.includes("portfolio") || text.includes("portafolio") || text.includes("casos") || text.includes("clientes") || text.includes("sistemas") || text.includes("apps") || text.includes("aplicaciones") || text.includes("e-commerce") || text.includes("ecommerce")) {
    // Intents de tercer nivel - más específicos primero
    if ((text.includes("e-commerce") || text.includes("ecommerce") || text.includes("tienda")) && (text.includes("tecnolog") || text.includes("stack") || text.includes("tecnologias"))) {
      return "projects.ecommerce.tech"
    }
    if (text.includes("mostrar") || text.includes("ver") || text.includes("ver algunos")) return "projects.show"
    if (text.includes("e-commerce") || text.includes("ecommerce") || text.includes("tienda")) return "projects.ecommerce"
    if (text.includes("sistema") || text.includes("tipo de sistema")) return "projects.systems"
    return "projects"
  }

  if (text.includes("experiencia") || text.includes("trayectoria") || text.includes("carrera") || text.includes("años") || text.includes("tiempo") || text.includes("trabajos") || text.includes("laburos") || text.includes("empleos") || text.includes("empresas") || text.includes("trabajado") || text.includes("historial")) {
    if (text.includes("tipo de proyecto") || text.includes("proyecto")) return "experience.projects"
    if (text.includes("remoto") || text.includes("remote")) return "experience.remote"
    if (text.includes("cuantos años") || text.includes("cuantos") || text.includes("años de experiencia")) return "experience.years"
    return "experience"
  }

  if (text.includes("tecnolog") || text.includes("stack") || text.includes("frontend") || text.includes("front") || text.includes("backend") || text.includes("back") || text.includes("vue") || text.includes("react") || text.includes("laravel") || text.includes("php") || text.includes("api") || text.includes("mysql") || text.includes("docker") || text.includes("tailwind") || text.includes("typescript")) {
    if (text.includes("vue") || text.includes("react") || text.includes("vue o react")) return "stack.vue_react"
    if (text.includes("fullstack") || text.includes("full stack") || text.includes("full-stack")) return "stack.fullstack"
    if (text.includes("backend") || text.includes("back end") || text.includes("back-end")) return "stack.backend"
    return "stack"
  }

  if (text.includes("trabajo") || text.includes("metodologia") || text.includes("proceso") || text.includes("equipo") || text.includes("team") || text.includes("scrum") || text.includes("agil") || text.includes("comunicacion") || text.includes("organizacion") || text.includes("autonomia") || text.includes("forma")) {
    if (text.includes("equipo") || text.includes("team") || text.includes("trabajas en equipo")) return "way_of_working.team"
    if (text.includes("agil") || text.includes("scrum") || text.includes("metodologia")) return "way_of_working.agile"
    if (text.includes("proceso") || text.includes("como es tu proceso")) return "way_of_working.process"
    return "way_of_working"
  }

  if (text.includes("dispon") || text.includes("freelance") || text.includes("contractor") || text.includes("contrato") || text.includes("full time") || text.includes("part time") || text.includes("horario") || text.includes("jornada") || text.includes("colaborar")) {
    if (text.includes("full time") || text.includes("part time") || text.includes("fulltime") || text.includes("parttime")) return "availability.fulltime"
    if (text.includes("horario") || text.includes("horarios")) return "availability.hours"
    if (text.includes("freelance") || text.includes("freelancer")) return "availability.freelance"
    return "availability"
  }

  // Intent principal por keywords
  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return intent
    }
  }

  return "unknown"
}
