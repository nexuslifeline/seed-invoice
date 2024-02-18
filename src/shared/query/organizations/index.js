import { useMutation, useQuery } from '@tanstack/react-query';
import { postOrganization, getOrganizations } from '@shared/api/organizations';

export const usePostOrganizationMutation = (userUuid, options = {}) => {
  const { mutate, ...rest } = useMutation({
    mutationFn: (data) => postOrganization(userUuid, data),
    ...options
  });

  return { authenticate: mutate, ...rest };
};

export const useOrganizationsQuery = (userUuid, params) => {
  const { data: { data: { data = [], meta = {} } = {} } = {}, ...rest } =
    useQuery({
      queryKey: ['organizations', params],
      queryFn: () => getOrganizations(userUuid, params),
      keepPreviousData: true
    });

  return { organizations: data, meta, ...rest };
};
