export type Intent =
  | "stack"
  | "experience"
  | "projects"
  | "way_of_working"
  | "availability"
  | "unknown"

export const INTENT_KEYWORDS: Record<Intent, string[]> = {
  stack: ["stack", "tecnologías", "tecnologia", "vue", "laravel", "frontend", "backend"],
  experience: ["experiencia", "años", "trayectoria", "trabajado"],
  projects: ["proyectos", "portfolio", "clientes"],
  way_of_working: ["trabajo", "metodología", "forma", "equipo", "remoto"],
  availability: ["disponibilidad", "freelance", "full time", "contrato"],
  unknown: []
}
