import focusflowHomepage from "@/asset/img/project/focusflow-homepage.png";
import focusflowTasklist from "@/asset/img/project/focusflow-tasklist.png";
import ppeClient from "@/asset/img/project/ppe-client.png";
import ppeHospital from "@/asset/img/project/ppe-hospital.png";
import ppeInventory from "@/asset/img/project/ppe-inventory.png";
import web3Debug from "@/asset/img/project/web3-debug.png";
import web3Menu from "@/asset/img/project/web3-menu.png";
import { Button } from "@/components/base/buttons/button";
import { ImageCarousel } from "@/components/custom/imageCarousel";

const projects = [
    {
        id: 1,
        title: "Stickman Odyssey",
        tag: "Blockchain",
        year: "2025",
        description: "A hack and slash RPG with NFT-based player ownership of in-game rewards, built on decentralized technology.",
        skills: ["PHP", "web3.js"],
        images: [web3Menu, web3Debug],
        href: "https://github.com/HengJake/Comp-BegineerLuck_WebDev",
    },
    {
        id: 2,
        title: "Inventory Management System",
        tag: "Java",
        year: "2025",
        description: "Hospital and supplier PPE logistics system built purely in Java, applying all 4 OOP pillars.",
        skills: ["Java", "Team Management"],
        images: [ppeInventory, ppeClient, ppeHospital],
        href: "https://github.com/HengJake/Diploma-InventorySystem",
    },
    {
        id: 3,
        title: "FocusFlow: Productivity Platform",
        tag: "Web",
        year: "2025",
        description: "A productivity web app with task management, real-time communication and role-based access for teams.",
        skills: ["HTML", "CSS", "JavaScript", "PHP"],
        images: [focusflowHomepage, focusflowTasklist],
        href: "https://github.com/Alsecerc/FocusFlow",
    },
];

export const ProjectScreen = () => {
    return (
        <div className="no-scrollbar relative flex max-h-[590px] w-full flex-1 items-start justify-center overflow-y-auto bg-primary p-5">
            <div className="grid w-full max-w-6xl grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

// Replace just the image div inside your map:
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {

    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-secondary bg-primary_alt">
            <ImageCarousel images={project.images} alt={project.title} />

            {/* Details */}
            <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-secondary">{project.tag}</span>
                    <span className="text-sm text-tertiary">{project.year}</span>
                </div>
                <p className="font-semibold text-primary">{project.title}</p>
                <p className="text-sm text-tertiary">{project.description}</p>
                <div className="mt-1 mt-auto flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                        <span key={skill} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary">
                            {skill}
                        </span>
                    ))}
                </div>
                {project.href && (
                    <Button href={project.href} color="secondary" size="sm" target="_blank">
                        View Repo
                    </Button>
                )}
            </div>
        </div>
    );
};
