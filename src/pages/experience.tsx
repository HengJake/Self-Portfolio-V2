import { experiences } from "@/data/experience";
import { ImageCarousel } from "@/components/custom/imageCarousel";

export const ExperienceScreen = () => {
    return (
        <div className="flex min-h-[calc(100vh-64px)] w-full justify-center bg-primary px-8 py-16">
            <div className="w-full max-w-2xl">
                {/* Header */}
                <p className="mb-2 text-sm font-medium tracking-widest text-tertiary uppercase">Practical</p>
                <p className="mb-12 text-3xl font-bold text-primary">Experience</p>

                {/* Timeline */}
                <div className="relative flex flex-col gap-0">
                    {/* Vertical line */}
                    <div className="absolute top-2 left-[7px] h-full w-px bg-secondary" />

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative flex gap-6 pb-10">
                            {/* Dot */}
                            <div className="relative z-10 mt-1.5 shrink-0">
                                <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-secondary bg-secondary"></span>
                            </div>

                            {/* Content */}
                            <div className="flex w-full flex-col gap-1 rounded-xl border border-secondary bg-primary_alt p-5">
                                <div className="flex items-start justify-between">
                                    <p className="font-semibold text-primary">{exp.company}</p>
                                    <span className="text-sm text-tertiary">{exp.period}</span>
                                </div>
                                <p className="text-sm font-medium text-secondary">{exp.role}</p>
                                <p className="mt-1 text-sm text-tertiary">{exp.description}</p>

                                {exp.highlights && (
                                    <ul className="mt-3 flex flex-col gap-1.5">
                                        {exp.highlights.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-tertiary">
                                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-tertiary" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}

{exp.images && exp.images.length > 0 && (
                                <div className="mt-4 overflow-hidden rounded-lg">
                                    <ImageCarousel images={exp.images} alt={exp.company} fit="contain" />
                                </div>
                            )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
