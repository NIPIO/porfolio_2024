export const profile = {
  nombre: "Nico Piovano",
  rol: "Desarrollador de Software",
  experienciaAnios: 5,

  enfoque: {
    principal: "Frontend",
    secundario: "Backend",
    direccion: "Perfil fullstack con interés creciente en IA"
  },

  stackPrincipal: {
    frontend: ["Vue.js", "Quasar", "Tailwind CSS"],
    backend: ["Laravel"],
    otros: [
      "APIs REST",
      "Autenticación y autorización",
      "Sistemas con roles y permisos",
      "Dashboards administrativos",
      "Herramientas internas"
    ]
  },

  backendDetalle: {
    laravel: [
      "Controladores",
      "Servicios",
      "Repositorios",
      "Entidades",
      "Validaciones con FormRequest",
      "Arquitectura modular"
    ]
  },

  tipoDeProyectos: [
    "Sistemas de gestión interna",
    "Paneles administrativos",
    "Boilerplates reutilizables",
    "Aplicaciones web orientadas a negocio"
  ],

  formaDeTrabajar: [
    "Enfoque práctico y orientado a resultados",
    "Prioriza mantenibilidad por sobre soluciones rebuscadas",
    "Arquitectura clara y decisiones explícitas",
    "Cómodo trabajando de forma autónoma y remota"
  ],

  objetivosProfesionales: [
    "Trabajar 100% remoto",
    "Consolidarme como fullstack",
    "Integrar inteligencia artificial en productos reales"
  ],

  idiomas: ["Español", "Inglés", "Portugués"],

  disponibilidad: {
    soloRemoto: true,
    relocalizacion: true
  }
} as const
