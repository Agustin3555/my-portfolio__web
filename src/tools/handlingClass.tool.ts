export type HandlingClass = (string | number)[];

export const asClassName = (...values: HandlingClass) => {
  if (!values) return;

  const className = values.map((item) =>
    typeof item === "string" ? item : String(item),
  );

  return className.join(" ");
};
