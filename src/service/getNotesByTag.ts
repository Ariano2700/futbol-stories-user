import { newsEndpoints } from "src/endpointsRouter";
import type { NewsI } from "src/interfaces/news/newsInterface";

export const getNotesByTag = async (id: string) => {
  const apiUrl = `${
    import.meta.env.API_URL
  }${newsEndpoints.getNotesByTagEndpoint(id)}`;
  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      return data.notes || ([] as NewsI[]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return fetchData();
};
