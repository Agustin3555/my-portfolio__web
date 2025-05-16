export const varList = (list: Record<string, number | string>) =>
  Object.entries(list)
    .map(([key, value]) => `--${key}: ${value}`)
    .join("; ");
