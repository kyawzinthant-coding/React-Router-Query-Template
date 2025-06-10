import api from '.';

export const getSomething = async () => (await api.get('category')).data;

export const fetchSomethingQuery = () => ({
  queryKey: ['something'],
  queryFn: getSomething,
});
