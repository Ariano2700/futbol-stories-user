import type { userEndpointI } from "../interfaces/userEndpointsInterface";

const userEndpoints: userEndpointI = {
  getAllUsersEndpoint: () => "/api/user/get/all",
  getUserEndpoint: (uid) => `/api/user/get/${uid}`,
  patchUserEndpoint: (uid) => `/api/user/patch/${uid}`,
};
export default userEndpoints;
