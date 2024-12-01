import { newsEndpoints } from "src/endpointsRouter";
import type { NewsWithAuthorI } from "src/interfaces/news/newsInterface";

//id: string, createdAt: Date
const getNoteById = async (
  month: string,
  year: string,
  id: string
): Promise<NewsWithAuthorI> => {
  try {
    const apiUrl = `${import.meta.env.API_URL}${newsEndpoints.getNoteEndpoint(
      id,
      month,
      year
    )}`;

    const res = await fetch(apiUrl);
    const data = await res.json();
    // Verificar si la propiedad 'note' está presente en la respuesta
    if (!data || !data.note) {
      throw new Error("Content not found for this note desde el getNoteById");
    }
    return data.note;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default getNoteById;
