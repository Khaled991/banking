export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const isError = (error: unknown): error is Error =>
  error instanceof Error;
