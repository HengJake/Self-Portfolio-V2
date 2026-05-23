"use client";
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/base/buttons/button";
import { experiences } from "@/data/experience";

export const AboutScreen = () => {
    const [input, setInput] = useState("");
    const { messages, sendMessage, status } = useChat();

    const isLoading = status === "submitted" || status === "streaming";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        sendMessage({ text: input });
        setInput("");
    };

    const suggestions = ["What's your tech stack?", "Tell me about a recent project", "Why Wollongong?"];

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

            {/* Center - AI chatbot */}
            <div className="flex h-full items-center justify-center">
                <div className="flex w-full max-w-md flex-col gap-2 rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
                    {/* Conversation area */}
                    <div className="flex max-h-[280px] min-h-[200px] flex-col gap-2 overflow-y-auto px-2 py-3">
                        {messages.length === 0 && (
                            <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-sm text-white">
                                Hi! I'm an AI version of Jun Kai. Ask me anything about my work, projects, or interests.
                            </div>
                        )}

                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={
                                    message.role === "user"
                                        ? "max-w-[80%] self-end rounded-2xl rounded-br-sm bg-white px-3 py-2 text-sm text-black"
                                        : "max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-sm text-white"
                                }
                            >
                                {message.parts.map((part, i) => (part.type === "text" ? <span key={i}>{part.text}</span> : null))}
                            </div>
                        ))}

                        {isLoading && messages[messages.length - 1]?.role === "user" && (
                            <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-sm text-white/60">
                                <span className="inline-flex gap-1">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.3s]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.15s]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" />
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Suggestion chips - only show before first message */}
                    {messages.length === 0 && (
                        <div className="flex flex-wrap gap-1.5 px-2">
                            {suggestions.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => sendMessage({ text: s })}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input bar */}
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me something…"
                            disabled={isLoading}
                            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition disabled:opacity-40"
                            aria-label="Send"
                        >
                            ↑
                        </button>
                    </form>
                </div>
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
