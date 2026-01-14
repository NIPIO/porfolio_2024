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
   "frontend", "front",
"backend", "back",
"vue", "react",
"laravel", "php",
"api", "mysql", "docker",
"tailwind", "typescript"
  ],

  experience: [
   "experiencia", "trayectoria", "carrera",
"años", "tiempo",
"trabajos", "laburos", "laburo",
"empleos", "empresas",
"trabajado", "trabajaste", "historial"

  ],

  projects: [
    "proyectos",
    "proyecto",
    "trabajaste",
    "trabajado",
    "tipo de proyectos",
    "portfolio",
    "portafolio",
    "casos",
    "clientes",
    "sistemas",
    "apps",
    "aplicaciones"
  ],
  
  way_of_working: [
 "trabajo",
"metodologia",
"proceso",
"equipo",
"team",
"scrum",
"agil",
"remoto",
"comunicacion",
"organizacion",
"autonomia"

  ],

  availability: [
  "disponibilidad",
"freelance",
"contractor",
"contrato",
"full time",
"part time",
"horario",
"jornada",
"colaborar"

  ],

  unknown: []
}
