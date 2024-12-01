import type { ContentBlock } from "src/interfaces/news/contentInterfaces";

// Función para formatear texto con ** ** a HTML <strong>
export default function formatContent(content: ContentBlock[]): ContentBlock[] {
    return content.map((block) => {
      if (block.type === "paragraph" || block.type === "citation") {
        return {
          ...block,
          text: block.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        };
      }
      if (block.type === "list"){
        return {
          ...block,
          elements: block.elements.map((element) =>
        element.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      ),
        }
      }
      return block;
    });
  }