export const isErrorQuery = (query: unknown): query is Error => {
  const q = query as any;
  const evaluatedQuery = !q.error;
  return evaluatedQuery as boolean;
};
