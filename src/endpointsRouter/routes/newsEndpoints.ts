import type { NewsEndpointI } from "../interfaces/newsEndpointsInterface";

const newsEndpoints: NewsEndpointI = {
  getCollectionsEndpoint: () => "/api/news/note/collections/get",
  createNotesEndpoint: () => "/api/news/note/create",
  deleteNotesEndpoint: (id) => `/api/news/note/delete/${id}`,
  patchNotesEndpoint: (id, month, year) =>
    `/api/news/note/patch/${id}?month=${month}&year=${year}`,
  getNoteEndpoint: (id, month, year) =>
    `/api/news/note/get/${id}?month=${month}&year=${year}`,
  getRecommendationsNotesEndpoint: (id, month, year) =>
    `/api/news/note/get/recommendations/${id}?month=${month}&year=${year}`,
  getAllTNotesEndpoint: (month, year, lastId, limit) =>
    `/api/news/note/get/all?month=${month}&year=${year}&lastId=${lastId}&limit=${limit}`,
  getInternationalNoteEndpoint: (month, year, lastId, limit) =>
    `/api/news/note/get/international?month=${month}&year=${year}&lastId=${lastId}&limit=${limit}`,
  getPeruvianNoteEndpoint: (month, year, lastId, limit) =>
    `/api/news/note/get/peru?month=${month}&year=${year}&lastId=${lastId}&limit=${limit}`,
  getNotesByTagEndpoint: (id) => `/api/news/note/get/byTag/${id}`,  
  getLatestNotesEndpoint: () => `/api/news/note/get/latest`,
};

export default newsEndpoints;
