  export type Intent =
  | "stack"
  | "experience"
  | "projects"
  | "way_of_working"
  | "availability"
  | "greeting"
  | "unknown"

export const INTENT_KEYWORDS: Record<Intent, string[]> = {
  greeting: ["hola", "buenas", "buen día", "buen dia", "hey", "que tal"],
  stack: [
    // general
    "stack", "tecnologias", "tecnologia", "herramientas", "skills", "conocimientos", 
    // frontend
    "frontend", "front", "ui", "ux", "javascript", "typescript", "vue", "react", "css", "html", "tailwind", 
    // backend
    "backend", "back", "api", "servidor", "laravel", "php", "node", "base de datos", "mysql", "postgres",

    // infra / otros
    "docker", "containers", "git", "github", "devops"
  ],

  experience: [
    // general
    "experiencia", "trayectoria", "carrera", "perfil", 
    // tiempo
    "años", "tiempo", "seniority", 
    // trabajos
    "trabajos", "laburos", "laburo", "empleos", "empresas", "trabajado", "trabajaste", "historial", "background"
  ],

  projects: [
    "proyectos", "portfolio", "portafolio", "casos", "casos de exito", "clientes", "apps", "productos", "sistemas", "desarrollos"
  ],
  way_of_working: [
    "trabajo",
    "trabajar",
    "metodologia",
    "forma",
    "manera",
    "proceso",
    "equipo",
    "team",
    "scrum",
    "agil",
    "remoto",
    "comunicacion",
    "organizacion",
    "autonomia",
    "definido",
    "definida",
    "exploratorio",
    "exploratoria"
  ],

  availability: [
    "disponibilidad", "freelance", "contractor", "contrato", "full time", "part time", "horario", "jornada", "proyecto", "colaborar", "trabajar conmigo"
  ],

  unknown: []
}
