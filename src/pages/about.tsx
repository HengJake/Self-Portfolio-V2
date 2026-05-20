"use client";
import { Button } from "@/components/base/buttons/button";
import {experiences} from "@/data/experience";
export const AboutScreen = () => {
    return (
        <div className="relative flex h-full w-full flex-1 items-center justify-center bg-primary p-4">
            {/* Top Left - Name */}
            <div className="absolute top-4 left-16">
                <p className="text-lg font-semibold text-white">Heng Jun Kai</p>
                <p className="text-sm text-secondary_on-brand">Full Stack Developer / AI Engineer</p>
            </div>

            {/* Top Right - Education status */}
            <div className="absolute top-4 right-16">
                <p className="font-semibold text-white">Currently at Wollongong</p>
            </div>

            {/* Center - Tagline */}
            <div className="flex h-full items-center justify-center">
                <p className="max-w-sm text-4xl leading-tight font-bold text-white">
                    Something here
                    <br />
                    Something here
                    <br />
                </p>
            </div>

            {/* Bottom Left - Contact details */}
            <div className="absolute bottom-8 left-16 flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <span className="w-4 text-xs font-bold text-white">M</span>
                    <Button href="mailto:hengjunkai@gmail.com" color="link-gray" size="sm">
                        hengjunkai@gmail.com
                    </Button>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-4 text-xs font-bold text-white">L</span>
                    <Button href="https://linkedin.com/in/heng-jun-kai/" target="_blank" color="link-gray" size="sm">
                        linkedin/heng-jun-kai
                    </Button>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-4 text-xs font-bold text-white">G</span>
                    <Button href="https://github.com/HengJake" target="_blank" color="link-gray" size="sm">
                        github/HengJake
                    </Button>
                </div>
            </div>

            <div className="absolute right-16 bottom-8 flex flex-col gap-2">
                <p className="text-xs font-bold text-white">Experience</p>
                {experiences.slice(0, 2).map((exp) => (
                    <div key={exp.id} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                        <div>
                            <p className="text-xs font-medium text-white">{exp.company}</p>
                            <p className="text-xs text-white/50">
                                {exp.role} · {exp.period}
                            </p>
                        </div>
                    </div>
                ))}
                <Button href="/experience" color="link-gray" size="sm" className="mt-1 pl-0">
                    View all →
                </Button>
            </div>
        </div>
    );
};
