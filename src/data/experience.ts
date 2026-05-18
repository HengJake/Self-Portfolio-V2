import birthdayImg from "../asset/img/intern-thmy/birthday.jpeg";
import dinnerImg from "../asset/img/intern-thmy/dinner.jpeg";
import intern1Img from "../asset/img/intern-thmy/interjnr1.jpeg";
import internGroupImg from "../asset/img/intern-thmy/interngroup.jpeg";
import seniorImg from "../asset/img/intern-thmy/senior.jpeg";
import swe1Img from "../asset/img/intern-thmy/swe1.jpeg";
import vision1Img from "../asset/img/intern-thmy/vision1.jpeg";
import vision2Img from "../asset/img/intern-thmy/vision2.jpeg";
import youngImg from "../asset/img/intern-thmy/young.jpeg";

export const experiences = [
    {
        id: 1,
        company: "THMY Technologies Sdn Bhd",
        role: "Full Stack Developer Intern",
        period: "09.2025 — 02.2026",
        location: "Penang, Malaysia",
        description: "Full stack internship covering frontend design, backend C# MVC development, hardware integration, and automation.",
        highlights: [
            "Conducted interviews with senior team members to gather requirements and understand company challenges.",
            "Designed user flows and frontend prototypes using AI tools like Lovable.",
            "Implemented C# authentication systems, MVC architecture, and database migration processes.",
            "Managed and migrated SQLite databases with proper model class updates.",
            "Assisted in integrating Raspberry Pi 4 and Raspberry Pi HQ Camera for hardware tasks.",
            "Supported development of OpenCV software for pin detection on fixture boards.",
            "Built a Python automation tool for the Functional Circuit Test team to validate PCB pin check outputs.",
            "Developed and integrated RESTful APIs for CRUD operations with the external Kingdee database.",
        ],
        images: [youngImg, birthdayImg, dinnerImg, intern1Img, internGroupImg, seniorImg, swe1Img, vision1Img, vision2Img],
    },
];
