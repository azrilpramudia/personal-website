import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function staggerDelay(index: number, base = 0.1): number {
  return index * base;
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function calcDuration(startDate: string, endDate: string): string {
  const parseDate = (d: string): Date =>
    d === "Present" ? new Date() : new Date(`${d} 01`);

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (months < 1) months = 1;

  const years = Math.floor(months / 12);
  const rem = months % 12;

  if (years === 0) return `${rem} mo${rem > 1 ? "s" : ""}`;
  if (rem === 0) return `${years} yr${years > 1 ? "s" : ""}`;
  return `${years} yr${years > 1 ? "s" : ""} ${rem} mo${rem > 1 ? "s" : ""}`;
}
