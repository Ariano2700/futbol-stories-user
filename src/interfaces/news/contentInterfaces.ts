export type ContentBlock = Paragraph | Citation | List;

export interface Paragraph {
  type: "paragraph";
  title?: string;
  text: string; // Texto del párrafo
}

export interface Citation {
  type: "citation";
  text: string; // Texto de la cita
  author?: string; // Opcional: Autor de la cita
}

export interface List {
  type: "list";
  title: string;
  elements: string[]; // Lista de elementos
  sorted: boolean; // Indica si es una lista ordenada o no
}
