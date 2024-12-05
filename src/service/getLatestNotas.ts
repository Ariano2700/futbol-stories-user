import { newsEndpoints } from "src/endpointsRouter";
import type { DataI } from "src/interfaces/responses/LatestNotesDataI";

export const getLatestNotas = async () => {
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
      const { stories = [], news = [] }: DataI = await res.json();

      return { stories, news };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return fetchData();
};
