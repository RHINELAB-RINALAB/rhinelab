export function formatDate(date: Date, opts?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    ...opts,
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function isUpcoming(date: Date): boolean {
  // Compare against start of today (UTC) so an event today still counts.
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return date.getTime() >= today.getTime();
}

export function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}
