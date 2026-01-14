export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")                 // separa acentos
    .replace(/[\u0300-\u036f]/g, "")  // elimina acentos
    .replace(/[^a-z0-9\s]/g, "")      // limpia símbolos
    .replace("front-end", "frontend")
    .replace("front end", "frontend")
    .replace("back-end", "backend")
    .replace("back end", "backend")
    .replace(/\s+/g, " ")
    .trim()
}
