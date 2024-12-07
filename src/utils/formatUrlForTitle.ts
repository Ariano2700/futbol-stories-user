export default function formatUrlForTitle(url: string): string {
  return url
    .replace(/-/g, " ") // Reemplaza los guiones por espacios
    .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitaliza la primera letra de cada palabra
}
