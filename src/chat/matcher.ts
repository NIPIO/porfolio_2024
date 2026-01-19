import type { Lang } from "@/i18n"

export function matchIntent(message: string, lang: Lang = "es"): string {
  const text = message.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  // Volver al inicio siempre tiene prioridad (multiidioma)
  if (
    text.includes("volver al inicio") || text.includes("volver") ||
    text.includes("back to start") || text.includes("back") ||
    text.includes("voltar ao inicio") || text.includes("voltar")
  ) return "greeting"

  // Intents de segundo nivel - más específicos primero (multiidioma)
  if (
    text.includes("proyecto") || text.includes("project") || text.includes("projeto") ||
    text.includes("portfolio") || text.includes("portafolio") || text.includes("portfólio") ||
    text.includes("casos") || text.includes("cases") || text.includes("casos") ||
    text.includes("clientes") || text.includes("clients") || text.includes("clientes") ||
    text.includes("sistemas") || text.includes("systems") || text.includes("sistemas") ||
    text.includes("apps") || text.includes("aplicaciones") || text.includes("aplicacoes") ||
    text.includes("e-commerce") || text.includes("ecommerce")
  ) {
    // Intents de tercer nivel - más específicos primero
    if (
      (text.includes("e-commerce") || text.includes("ecommerce") || text.includes("tienda") || text.includes("store") || text.includes("loja")) &&
      (text.includes("tecnolog") || text.includes("stack") || text.includes("tecnologias") || text.includes("technology") || text.includes("technologies") || text.includes("tecnologia") || text.includes("tecnologias"))
    ) {
      return "projects.ecommerce.tech"
    }
    if (
      text.includes("mostrar") || text.includes("show") || text.includes("mostrar") ||
      text.includes("ver") || text.includes("see") || text.includes("ver") ||
      text.includes("ver algunos") || text.includes("show me") || text.includes("me mostrar")
    ) return "projects.show"
    if (
      text.includes("e-commerce") || text.includes("ecommerce") ||
      text.includes("tienda") || text.includes("store") || text.includes("loja")
    ) return "projects.ecommerce"
    if (
      text.includes("sistema") || text.includes("system") || text.includes("sistema") ||
      text.includes("tipo de sistema") || text.includes("type of system") || text.includes("tipo de sistema")
    ) return "projects.systems"
    return "projects"
  }

  if (
    text.includes("experiencia") || text.includes("experience") || text.includes("experiencia") ||
    text.includes("trayectoria") || text.includes("trajectory") || text.includes("trajetoria") ||
    text.includes("carrera") || text.includes("career") || text.includes("carreira") ||
    text.includes("años") || text.includes("years") || text.includes("anos") ||
    text.includes("tiempo") || text.includes("time") || text.includes("tempo") ||
    text.includes("trabajos") || text.includes("jobs") || text.includes("trabalhos") ||
    text.includes("laburos") || text.includes("empleos") || text.includes("employment") || text.includes("emprego") ||
    text.includes("empresas") || text.includes("companies") || text.includes("empresas") ||
    text.includes("trabajado") || text.includes("worked") || text.includes("trabalhou") ||
    text.includes("historial") || text.includes("history") || text.includes("historico")
  ) {
    if (
      text.includes("tipo de proyecto") || text.includes("type of project") || text.includes("tipo de projeto") ||
      text.includes("proyecto") || text.includes("project") || text.includes("projeto")
    ) return "experience.projects"
    if (
      text.includes("remoto") || text.includes("remote") || text.includes("remoto")
    ) return "experience.remote"
    if (
      text.includes("cuantos años") || text.includes("how many years") || text.includes("quantos anos") ||
      text.includes("cuantos") || text.includes("how many") || text.includes("quantos") ||
      text.includes("años de experiencia") || text.includes("years of experience") || text.includes("anos de experiencia")
    ) return "experience.years"
    return "experience"
  }

  if (text.includes("tecnolog") || text.includes("stack") || text.includes("frontend") || text.includes("front") || text.includes("backend") || text.includes("back") || text.includes("vue") || text.includes("react") || text.includes("laravel") || text.includes("php") || text.includes("api") || text.includes("mysql") || text.includes("docker") || text.includes("tailwind") || text.includes("typescript")) {
    if (text.includes("vue") || text.includes("react") || text.includes("vue o react")) return "stack.vue_react"
    if (text.includes("fullstack") || text.includes("full stack") || text.includes("full-stack")) return "stack.fullstack"
    if (text.includes("backend") || text.includes("back end") || text.includes("back-end")) return "stack.backend"
    return "stack"
  }

  if (
    text.includes("trabajo") || text.includes("work") || text.includes("trabalho") ||
    text.includes("metodologia") || text.includes("methodology") || text.includes("metodologia") ||
    text.includes("proceso") || text.includes("process") || text.includes("processo") ||
    text.includes("equipo") || text.includes("team") || text.includes("equipe") ||
    text.includes("scrum") || text.includes("agil") || text.includes("agile") || text.includes("agil") ||
    text.includes("comunicacion") || text.includes("communication") || text.includes("comunicacao") ||
    text.includes("organizacion") || text.includes("organization") || text.includes("organizacao") ||
    text.includes("autonomia") || text.includes("autonomy") || text.includes("autonomia") ||
    text.includes("forma") || text.includes("way") || text.includes("forma")
  ) {
    if (
      text.includes("equipo") || text.includes("team") || text.includes("equipe") ||
      text.includes("trabajas en equipo") || text.includes("work in team") || text.includes("trabalha em equipe")
    ) return "way_of_working.team"
    if (
      text.includes("agil") || text.includes("agile") || text.includes("agil") ||
      text.includes("scrum") || text.includes("metodologia") || text.includes("methodology") || text.includes("metodologia")
    ) return "way_of_working.agile"
    if (
      text.includes("proceso") || text.includes("process") || text.includes("processo") ||
      text.includes("como es tu proceso") || text.includes("what's your process") || text.includes("como e seu processo")
    ) return "way_of_working.process"
    return "way_of_working"
  }

  if (
    text.includes("dispon") || text.includes("available") || text.includes("disponivel") ||
    text.includes("freelance") || text.includes("freelancer") ||
    text.includes("contractor") || text.includes("contrato") || text.includes("contrato") ||
    text.includes("full time") || text.includes("fulltime") || text.includes("tempo integral") ||
    text.includes("part time") || text.includes("parttime") || text.includes("meio periodo") ||
    text.includes("horario") || text.includes("hours") || text.includes("horario") ||
    text.includes("jornada") || text.includes("schedule") || text.includes("jornada") ||
    text.includes("colaborar") || text.includes("collaborate") || text.includes("colaborar")
  ) {
    if (
      text.includes("full time") || text.includes("fulltime") || text.includes("tempo integral") ||
      text.includes("part time") || text.includes("parttime") || text.includes("meio periodo")
    ) return "availability.fulltime"
    if (
      text.includes("horario") || text.includes("hours") || text.includes("horario") ||
      text.includes("horarios") || text.includes("schedules") || text.includes("horarios")
    ) return "availability.hours"
    if (
      text.includes("freelance") || text.includes("freelancer")
    ) return "availability.freelance"
    return "availability"
  }

  // Si no se encontró ningún match específico, intentar detectar por palabras clave comunes
  if (
    text.includes("experiencia") || text.includes("experience") || text.includes("experiencia") ||
    text.includes("años") || text.includes("years") || text.includes("anos")
  ) return "experience"
  
  if (
    text.includes("tecnolog") || text.includes("stack") || text.includes("vue") || text.includes("react") ||
    text.includes("frontend") || text.includes("backend")
  ) return "stack"
  
  if (
    text.includes("proyecto") || text.includes("project") || text.includes("projeto")
  ) return "projects"
  
  if (
    text.includes("trabajo") || text.includes("work") || text.includes("trabalho") ||
    text.includes("equipo") || text.includes("team") || text.includes("equipe")
  ) return "way_of_working"
  
  if (
    text.includes("dispon") || text.includes("available") || text.includes("disponivel") ||
    text.includes("freelance")
  ) return "availability"

  return "unknown"
}
