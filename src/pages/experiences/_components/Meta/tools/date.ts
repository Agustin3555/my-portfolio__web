export const parseDate = (d: string) => {
  const date = new Date(d);
  date.setDate(date.getDate() + 1);
  return date;
};

export const getDuration = (startedAt: Date, endedAt: Date) => {
  let years = endedAt.getFullYear() - startedAt.getFullYear();
  let months = endedAt.getMonth() - startedAt.getMonth();
  let days = endedAt.getDate() - startedAt.getDate();

  // Ajustar si los días son negativos
  if (days < 0) {
    months -= 1;

    const lastDayPrevMonth = new Date(
      endedAt.getFullYear(),
      endedAt.getMonth(),
      0,
    ).getDate();

    days += lastDayPrevMonth;
  }

  // Ajustar si los meses son negativos
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} año${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mes${months > 1 ? "es" : ""}`);
  if (days > 0) parts.push(`${days} día${days > 1 ? "s" : ""}`);

  return parts.length > 0 ? parts.join(", ") : "0 días";
};
