import { queryClient } from '@/lib/queryClient';
import { fetchSomethingQuery } from '@/api/query';

export const exampleLoader = async () => {
  await queryClient.ensureQueryData(fetchSomethingQuery());
  return null;
};
