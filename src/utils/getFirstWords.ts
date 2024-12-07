export default function getFirstWords(text: string, wordLimit: number) {
  const words = text.split(" ");
  if (words.length <= wordLimit) {
    return text; // Si no excede el límite, retorna el texto completo
  }
  const truncatedText = words.slice(0, wordLimit).join(" ");
  return `${truncatedText} <span class="text-primary-25 cursor-pointer montserrat-semibold">...Ver más</span>`;
}
