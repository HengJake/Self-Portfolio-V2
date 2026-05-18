import { Button } from "@/components/base/buttons/button";

export const Header = () => {
    return (
        <header className="relative self-center w-fit items-center justify-between border-secondary bg-tertiary px-4 py-2 mt-5 rounded-full">
            {/* Logo */}

            <nav className="flex gap-2">
                <Button className="rounded-3xl min-w-[115px]" href="/" color="tertiary" size="sm">
                    About
                </Button>
                <Button className="rounded-3xl min-w-[115px]" href="/project" color="tertiary" size="sm">
                    Projects
                </Button>
                <Button className="rounded-3xl min-w-[115px]" href="/certificate" color="tertiary" size="sm">
                    Certification
                </Button>
                <Button className="rounded-3xl min-w-[115px]" href="/experience" color="tertiary" size="sm">
                    Experience
                </Button>
            </nav>

        </header>
    );
};
