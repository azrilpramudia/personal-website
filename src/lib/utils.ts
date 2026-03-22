import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan class Tailwind dengan aman, menghindari konflik class.
 * Contoh: cn("px-4 py-2", isActive && "bg-blue-500", "hover:bg-blue-600")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Menambahkan delay (digunakan untuk animasi stagger Framer Motion)
 */
export function staggerDelay(index: number, base = 0.1): number {
  return index * base;
}

/**
 * Memotong teks panjang dengan ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

/**
 * Scroll halus ke section berdasarkan ID
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ── Hitung durasi antara dua tanggal ─────────────────────────
// startDate / endDate format: "Jan 2024" atau "Present"
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
