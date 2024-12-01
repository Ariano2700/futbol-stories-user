import type { DynamicEndpoint } from "./DynamicEndpointInterface";

export interface NewsEndpointI {
  getCollectionsEndpoint: () => string;
  createNotesEndpoint: () => string;
  deleteNotesEndpoint: DynamicEndpoint;
  patchNotesEndpoint: DynamicEndpoint;
  getNoteEndpoint: DynamicEndpoint;
  getAllTNotesEndpoint: DynamicEndpoint; 
  getInternationalNoteEndpoint: DynamicEndpoint; 
  getPeruvianNoteEndpoint: DynamicEndpoint;
  getRecommendationsNotesEndpoint: DynamicEndpoint;
  getLatestNotesEndpoint:DynamicEndpoint;
}
