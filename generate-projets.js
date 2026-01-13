import fs from "fs";
import path from "path";

// 1. Data Project Kamu
const projects = [
  {
    title: "Backoffice Lentara Biller",
    img: "/images/projects/lentera-biller.png",
    description: "Web Application for manage data payment in Lentara Biller",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Backoffice Lentara Payment Gateway",
    img: "/images/projects/lentera-pg.png",
    description:
      "Web Application for manage data payment in Lentara Payment Gateway",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "PLN For Business",
    img: "/images/projects/pln-for.png",
    description: "Web Application for pay electricity in PLN for business",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "X Dashboard Datagateway",
    img: "/images/projects/x-dashboard.png",
    description: "Web Application for monitoring transaction in Datagateway",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Backoffice Datagateway",
    img: "/images/projects/dg-bot.png",
    description: "Web Application for manage data in Datagateway",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Developer Portal Datagateway",
    img: "/images/projects/dg-portal.png",
    description: "Web Application for register developer in Datagateway",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Backoffice Koperasi Merah Putih",
    img: "/images/projects/kdmp.png",
    description:
      "Web application for monitoring and manage data transaction in Koperasi Desa Merah Putih",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Survey Koperasi Merah Putih",
    img: "/images/projects/survey-kdmp.png",
    description: "Web view for input result survey Koperasi Desa Merah Putih",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Web View Survey",
    img: "/images/projects/survey.png",
    description: "Web view for about electric vehicle lifestyle.",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Web View IIMS",
    img: "/images/projects/iims.png",
    description:
      "Web view for claim voucher in Indonesia International Motor Show (IIMS)",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Web View Gelegar 2023",
    img: "/images/projects/gelegar.png",
    description: "Web view for livestream Gelegar 2023 Event",
    stacks: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Backoffice Pengaduan",
    img: "/images/projects/bot-pengaduan.png",
    description: "Web application for handle Complaint in PLN Mobile",
    stacks: ["Vue", "Bootraps"],
  },
  {
    title: "Damang AI",
    img: "/images/projects/damang.png",
    description:
      "Web chat Artificial Intelligence for providing answers related to health consultation.",
    stacks: ["Laravel", "Tailwind CSS"],
    link: "https://github.com/prasagungg/damang.ai",
  },
  {
    title: "Honeytrap",
    img: "/images/projects/honeytrap.png",
    description: "Honeytrap Landing Page",
    stacks: ["ReactJs", "Tailwind CSS"],
  },
  {
    title: "Protoslabs",
    img: "/images/projects/protos-labs.png",
    description:
      "Web Application for Risk management considers threats, vulnerabilities, controls, assets, and financial loss data.",
    stacks: ["React", "Material UI", "React Query"],
  },
  {
    title: "Axme IO",
    img: "/images/projects/axme.png",
    description: "Web Application for chatbot for whatsapp",
    stacks: ["NextJs", "NestJs", "Material UI", "PgSQL"],
  },
  {
    title: "Xcidic Internal Website",
    img: "/images/projects/xcidicwebsite.png",
    description:
      "Web Application for company profile with CMS for managing content and job apply",
    stacks: ["NextJs", "NestJs", "Material UI", "PgSQL"],
    link: "https://xcidic.com",
  },
  {
    img: "/images/projects/coming-soon.png",
    title: "KPR WEB",
    description: "Web application for manage kpr payment",
    stacks: ["Laravel"],
  },
  {
    img: "/images/projects/coming-soon.png",
    title: "Pantau Online",
    description: "Web application to record jurnal & attendance student",
    stacks: ["Laravel"],
  },
  {
    img: "/images/projects/coming-soon.png",
    title: "Kejar Bahasa",
    description: "LMS (Learning Management System) with purchase course",
    stacks: ["Laravel"],
  },
  {
    img: "/images/projects/coming-soon.png",
    title: "Perpus Kita",
    description:
      "Web Application for manage data book, loan book & return book",
    stacks: ["Laravel"],
  },
  {
    img: "/images/projects/math-calculator.png",
    title: "Math Calculator",
    description: "Calculator For 10th grade math class lessons",
    stacks: ["Vanilla JS", "CSS Native"],
    link: "https://github.com/prasagungg/menghitung-peluang",
  },
  {
    img: "/images/projects/citragardenbintaro.png",
    title: "Neraya Serpong Company Profile",
    description: "Company profile website created with WordPress and elementor",
    stacks: ["Wordpress", "Elementor"],
    link: "https://rumahcitragardenbintaro.com",
  },
  {
    img: "/images/projects/narayaserpong.png",
    title: "Narayaserpong Company Profile", // Typo fix from data
    description: "Company profile website created with WordPress and elementor",
    stacks: ["Wordpress", "Elementor"],
    link: "https://narayaserpong.co.id",
  },
  {
    img: "/images/projects/millennium-city.png",
    title: "Millennium City Company Profile",
    description: "Company profile website created with WordPress and elementor",
    stacks: ["Wordpress", "Elementor"],
    link: "https://millennium-city.net",
  },
  {
    img: "/images/projects/stand-the-man.png",
    title: "Stand The Man Company Profile",
    description: "Company profile website created with WordPress and elementor",
    stacks: ["Wordpress", "Elementor"],
    link: "http://stanley.gawangdev.my.id",
  },
];

// 2. Tentukan Output Folder
const outputDir = path.join(process.cwd(), "src", "content", "projects");

// Buat folder jika belum ada
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 3. Fungsi membuat Slug (filename)
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Ganti spasi dengan -
    .replace(/[^\w\-]+/g, "") // Hapus karakter aneh
    .replace(/\-\-+/g, "-"); // Hapus - ganda
};

// 4. Generate Files
projects.forEach((project) => {
  const filename = `${slugify(project.title)}.md`;
  const filePath = path.join(outputDir, filename);

  // Format Stacks agar valid di YAML list
  const stacksYaml = project.stacks.map((s) => `  - "${s}"`).join("\n");

  // Link optional handling
  const linkField = project.link ? `link: "${project.link}"` : "";

  const fileContent = `---
title: "${project.title}"
description: "${project.description}"
heroImage: "${project.img}"
stacks:
${stacksYaml}
${linkField}
year: "2024" 
---

${project.description}
`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`✅ Created: ${filename}`);
});

console.log(
  `\n🎉 Selesai! ${projects.length} file markdown telah dibuat di ${outputDir}`
);
