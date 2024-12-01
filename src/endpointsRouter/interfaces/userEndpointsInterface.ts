import { DynamicEndpoint } from "./DynamicEndpointInterface";

export interface userEndpointI {
  getAllUsersEndpoint: () => string
  getUserEndpoint: DynamicEndpoint;
  patchUserEndpoint: DynamicEndpoint;
}
