import { newsEndpoints } from "src/endpointsRouter";
import type { NewsWithAuthorI } from "src/interfaces/news/newsInterface";

export const getRecommendations = async (
  id: string,
  month: string,
  year: string
) => {
  const apiUrl = `http://${
    import.meta.env.PUBLIC_API_URL
  }${newsEndpoints.getRecommendationsNotesEndpoint(id, month, year)}`;
  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      return data.recommendations || ([] as NewsWithAuthorI[]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return fetchData();
};
