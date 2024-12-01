import { DynamicEndpoint } from "./DynamicEndpointInterface";

export interface tagsEndpointI {
  createTagEndpoint: () => string;
  getAllTagsEndpoint: DynamicEndpoint;
  getIndividualTagEndpoint: DynamicEndpoint;
  patchTagEndpoint: DynamicEndpoint;
  deleteTgEndpoint: DynamicEndpoint;
}
