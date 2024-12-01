import { newsEndpoints } from "src/endpointsRouter";
import type { NewsI } from "src/interfaces/news/newsInterface";

export const fetchLatestNotas = async () => {
  const apiUrl = `${
    import.meta.env.API_URL
  }${newsEndpoints.getLatestNotesEndpoint()}`;
  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`Error en la API: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      if (!data?.notes) {
        throw new Error("Estructura inesperada en la respuesta de la API.");
      }
      return data.notes as NewsI[];
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return fetchData();
};
