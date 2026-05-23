import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "@/components/custom/header";
import { AboutScreen } from "@/pages/about";
import { ProjectScreen } from "@/pages/project";
import { CertificationScreen } from "@/pages/certification";
import { ExperienceScreen } from "@/pages/experience";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <RouteProvider>
                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <Routes>
                            <Route path="/" element={<AboutScreen />} />
                            <Route path="/project" element={<ProjectScreen />} />
                            <Route path="/experience" element={<ExperienceScreen />} />
                            <Route path="/certificate" element={<CertificationScreen />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
