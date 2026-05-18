import { useEffect, useRef, useState } from "react";

type ImageFit = "cover" | "contain";

interface ImageCarouselProps {
    images: string[];
    alt: string;
    fit?: ImageFit;
}

export const ImageCarousel = ({ images, alt, fit = "cover" }: ImageCarouselProps) => {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const fitClass = fit === "contain" ? "object-contain" : "object-cover";

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const prev = () => {
        setCurrent((c) => (c - 1 + images.length) % images.length);
        resetTimer();
    };

    const next = () => {
        setCurrent((c) => (c + 1) % images.length);
        resetTimer();
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative h-48 w-full bg-tertiary">
            <img src={images[current]} alt={`${alt} ${current + 1}`} className={`h-full w-full ${fitClass} transition duration-300 ease-linear`} />

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white transition duration-100 ease-linear hover:bg-black/60"
                    >
                        <svg width={12} height={19} viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white transition duration-100 ease-linear hover:bg-black/60"
                    >
                        <svg width={12} height={19} viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setCurrent(i);
                                    resetTimer();
                                }}
                                className={`h-1.5 w-1.5 rounded-full transition duration-100 ease-linear ${i === current ? "bg-white" : "bg-white/40"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
