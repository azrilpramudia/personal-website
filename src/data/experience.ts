import type { Experience } from "@/src/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "Nama Perusahaan",
    companyUrl: "https://perusahaan.com",
    location: "Indonesia",
    type: "Full-Time",
    startDate: "Jan 2024",
    endDate: "Present",
    description: [
      "Mengembangkan fitur baru menggunakan React dan TypeScript.",
      "Berkolaborasi dengan tim desain untuk implementasi UI/UX.",
      "Meningkatkan performa aplikasi hingga 30% dengan optimasi bundle.",
      "Membangun komponen reusable yang digunakan lintas tim.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    id: "exp-2",
    role: "Freelance Web Developer",
    company: "Freelance",
    location: "Remote",
    type: "Freelance",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    description: [
      "Membuat website untuk klien UMKM lokal.",
      "Mengelola proyek dari requirement gathering hingga deployment.",
      "Mengimplementasikan desain responsif dengan Tailwind CSS.",
    ],
    techStack: ["Next.js", "Tailwind CSS", "WordPress"],
  },
];
