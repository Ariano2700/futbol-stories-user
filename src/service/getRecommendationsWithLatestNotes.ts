import type { NewsI, NewsWithAuthorI } from "src/interfaces/news/newsInterface";
import { getRecommendations } from "./getRecommendations";
import { newsEndpoints } from "src/endpointsRouter";
import type {
  DataI,
  DataWithAuthorI,
} from "src/interfaces/responses/LatestNotesDataI";

interface GetRecommendationsWithLatestNotesI {
  principalNote: NewsWithAuthorI;
}

const formatFirebaseTimestamp = (
  timestamp: { _seconds: number; _nanoseconds: number } | Date | string
) => {
  let date: Date;

  if (timestamp instanceof Date) {
    date = timestamp; // Si es un objeto Date, úsalo directamente
  } else if (typeof timestamp === "string") {
    date = new Date(timestamp); // Convertir cadena ISO a Date
  } else {
    date = new Date(timestamp._seconds * 1000); // Convertir segundos a milisegundos
  }

  if (isNaN(date.getTime())) {
    throw new Error("Invalid timestamp provided");
  }

  const month = date.toLocaleString("es-ES", { month: "long" }); // Mes en texto
  const year = date.getFullYear().toString(); // Año

  return { month, year };
};

const getRecommendationsWithLatestNotes = ({
  principalNote,
}: GetRecommendationsWithLatestNotesI) => {
  const { month, year } = formatFirebaseTimestamp(principalNote.createdAt);

  if (!month || !year) {
    throw new Error("Month or year conversion failed");
  }
  const parsedYear = year.toString();

  const fetchRecommendationsAndNotes = async () => {
    try {
      // Obtener recomendaciones
      const notes = await getRecommendations(
        principalNote.id,
        month,
        parsedYear
      );

      // Fetch de notas principales
      const apiUrl = `http://${
        import.meta.env.PUBLIC_API_URL
      }${newsEndpoints.getLatestNotesEndpoint()}`;
      const res = await fetch(apiUrl);

      if (!res.ok) {
        throw new Error(`Error al obtener las notas: ${res.statusText}`);
      }

      const { stories = [], news = [] }: DataWithAuthorI = await res.json();

      const limitedStories = stories.slice(0, 6);
      const limitedNews = news.slice(0, 6);

      let filteredPreviousStories = limitedStories.filter(
        (note) => note.id !== principalNote.id
      );
      let filteredPreviousNews = limitedNews.filter(
        (note) => note.id !== principalNote.id
      );

      // Crear un Set de IDs en notes para evitar duplicados
      const recommendationIds = new Set(notes.map((note:NewsWithAuthorI) => note.id));

      // Filtrar duplicados en filteredPreviousStories y filteredPreviousNews
      filteredPreviousStories = filteredPreviousStories.filter(
        (note) => !recommendationIds.has(note.id)
      );
      filteredPreviousNews = filteredPreviousNews.filter(
        (note) => !recommendationIds.has(note.id)
      );
      
      return {
        notes: notes || [],
        filteredPreviousStories: filteredPreviousStories || [],
        filteredPreviousNews: filteredPreviousNews || [],
      };
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      return {
        notes: [],
        filteredPreviousStories: [],
        filteredPreviousNews: [],
      };
    }
  };
  return fetchRecommendationsAndNotes();
};
export default getRecommendationsWithLatestNotes;
