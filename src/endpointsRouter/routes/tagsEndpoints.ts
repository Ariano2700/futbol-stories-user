import { tagsEndpointI } from "../interfaces/tagsEndpointsInterface";

const tagsEndpoints: tagsEndpointI = {
  createTagEndpoint: () => "/api/news/tags/create",
  getAllTagsEndpoint: (id, limit) =>
    `/api/news/tags/get/all?lastId=${id}&limit=${limit}`,
  getIndividualTagEndpoint: (id) => `/api/news/tags/get/individual/${id}`,
  patchTagEndpoint: (id) => `/api/news/tags/patch/${id}`,
  deleteTgEndpoint: (id) => `/api/news/tags/delete/${id}`,
};
export default tagsEndpoints;
