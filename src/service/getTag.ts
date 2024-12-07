import { tagsEndpoints } from "src/endpointsRouter";
import type { TagsI } from "src/interfaces/news/tagsInterface";

export const getTagById = (id: string) => {
  const apiUrl = `${
    import.meta.env.API_URL
  }${tagsEndpoints.getIndividualTagEndpoint(id)}`;
  const fetchTagData = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      return data.tag as TagsI;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return fetchTagData();
};
