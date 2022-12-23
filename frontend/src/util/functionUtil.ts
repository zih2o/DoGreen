export const checkName = (name: string) => {
  const charCode = name.charCodeAt(name.length - 1);
  const consonantCode = (charCode - 44032) % 28;

  if (consonantCode === 0) {
    return `${name}가`;
  }
  return `${name}이`;
};
