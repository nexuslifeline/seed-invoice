import apiClient from '@api/apiClient';

export const postOrganization = (userUuid, data, config) => {
  return apiClient.post(`users/${userUuid}/organizations`, data, config);
};

export const putOrganization = (userUuid, uuid, data, config) => {
  return apiClient.put(`users/${userUuid}/organizations/${uuid}`, data, config);
};

export const patchOrganization = (userUuid, uuid, data, config) => {
  return apiClient.patch(
    `users/${userUuid}/organizations/${uuid}`,
    data,
    config
  );
};

export const deleteOrganization = (userUuid, uuid, config) => {
  return apiClient.delete(`users/${userUuid}/organizations/${uuid}`, config);
};

export const getOrganization = (userUuid, uuid, config) => {
  return apiClient.get(`users/${userUuid}/organizations/${uuid}`, config);
};

export const getOrganizations = (userUuid, config) => {
  return apiClient.get(`users/${userUuid}/organizations`, config);
};
