export const snakeToCamel = (str) => {
  return str
    .toLowerCase()
    .replace(/[-_][a-z]/g, (group) => group.slice(-1).toUpperCase());
};
