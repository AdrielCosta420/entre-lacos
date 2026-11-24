// Content dates have no time ("2026-11-20"), so they parse as midnight UTC.
// Formatting in UTC keeps the same calendar day on every machine; in the local
// timezone of Fortaleza (UTC-3) that date would render as November 19.
const longDate = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(date: Date): string {
  return longDate.format(date);
}

/** Machine-readable value for <time datetime="...">. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
