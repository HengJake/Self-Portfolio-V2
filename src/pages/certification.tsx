import { useState } from "react";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import awsCert from "../asset/img/certification/AWS_Participation.jpg";
import ciscoCert from "../asset/img/certification/CISCO_Cert.jpg";
import csharpCert from "../asset/img/certification/CSHARP_cert.png";
import web3Cert from "../asset/img/certification/WEB3_Participation.jpg";
import dataBrickCert from "../asset/img/certification/databrick_cert.png";
import placeholder from "../asset/img/certification/placeholder.png";

const certificates = [
    {
        id: 1,
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        year: "Sep 2025",
        category: "Networking",
        image: ciscoCert,
        credentialUrl: "https://www.linkedin.com/in/heng-jun-kai/overlay/Certifications/749079038/treasury/?profileId=ACoAAEi9jRsB0OiS9a9Oj-uPewAe72SZzYxXVfo",
    },
    {
        id: 2,
        title: "WEB3 Participation",
        issuer: "APUBCC",
        year: "Sep 2025",
        category: "Blockchain",
        image: web3Cert,
        credentialUrl: "https://www.linkedin.com/in/heng-jun-kai/overlay/Certifications/362702563/treasury/?profileId=ACoAAEi9jRsB0OiS9a9Oj-uPewAe72SZzYxXVfo",
    },
    {
        id: 3,
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp & Microsoft",
        year: "Oct 2025",
        category: "Language",
        image: csharpCert,
        credentialUrl: "https://www.freecodecamp.org/certification/hengjake/foundational-c-sharp-with-microsoft",
    },
    {
        id: 4,
        title: "Databricks Accredited Generative AI Fundamentals",
        issuer: "Databricks",
        year: "Nov 2025",
        category: "AI",
        image: dataBrickCert,
        credentialUrl: "https://credentials.databricks.com/57cb03e0-f62c-4424-a124-26f8ab05a8c8#acc.7mwla5DH",
    },
    {
        id: 5,
        title: "AWS Great AI Hackathon Participation",
        issuer: "Amazon Web Services",
        year: "Oct 2025",
        category: "Cloud",
        image: awsCert,
        credentialUrl:
            "https://www.linkedin.com/posts/heng-jun-kai_just-wrapped-up-the-largest-hackathon-on-site-ugcPost-7376231600361156608-Cli4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi9jRsB0OiS9a9Oj-uPewAe72SZzYxXVfo",
    },
    {
        id: 6,
        title: "AWS Knowledge: Serverless - Training Badge",
        issuer: "AWS Training and Certification",
        year: "Dec 2025",
        category: "Cloud",
        image: placeholder,
        credentialUrl: "https://www.credly.com/badges/ba189b1e-db3d-4f17-b611-6d4b9dd3fb6d/linked_in_profile",
    },
    {
        id: 7,
        title: "AWS Educate Introduction to Generative AI - Training Badge",
        issuer: "AWS Training and Certification",
        year: "Nov 2025",
        category: "Cloud",
        image: placeholder,
        credentialUrl: "https://www.credly.com/badges/385ee080-44f3-4220-9d73-20f2f0971079/linked_in_profile",
    },
];

type Certificate = (typeof certificates)[0];

export const CertificationScreen = () => {
    const [cart, setCart] = useState<Certificate[]>([]);

    const addToCart = (cert: Certificate) => {
        if (!cart.find((c) => c.id === cert.id)) {
            setCart([...cart, cert]);
        }
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter((c) => c.id !== id));
    };

    const isInCart = (id: number) => cart.some((c) => c.id === id);

    return (
        <div className="flex max-h-[590px] w-full overflow-hidden bg-primary pt-5">
            {/* Left - Certificate Grid */}
            <div className="no-scrollbar ml-10 flex-1 overflow-y-auto p-8 pt-0">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="flex flex-col overflow-hidden rounded-xl border border-secondary bg-primary_alt">
                            {/* Image */}
                            <div className="h-48 w-full bg-tertiary">
                                <img
                                    onClick={() => window.open(cert.credentialUrl, "_blank")}
                                    src={cert.image}
                                    alt={cert.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex flex-1 flex-col gap-2 p-4">
                                <div className="flex items-center justify-between">
                                    <Badge color="brand" size="sm">
                                        {cert.category}
                                    </Badge>
                                    <span className="text-sm text-tertiary">{cert.year}</span>
                                </div>
                                <p className="font-semibold text-primary">{cert.title}</p>
                                <p className="text-sm text-tertiary">{cert.issuer}</p>
                                <p className="text-xs text-brand-secondary">Completed in {cert.year}</p>
                                <Button
                                    color={isInCart(cert.id) ? "tertiary" : "secondary"}
                                    size="sm"
                                    className="mt-auto"
                                    onClick={() => (isInCart(cert.id) ? removeFromCart(cert.id) : addToCart(cert))}
                                >
                                    {isInCart(cert.id) ? "Remove" : "Add to resume"}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right - Cart / Checkout */}
            <div className="my-0 mr-18 flex w-80 flex-col border-l border-secondary bg-primary_alt">
                {/* Cart header */}
                <div className="border-b border-secondary p-6">
                    <p className="font-semibold text-primary">My Resume Cart</p>
                    <p className="text-sm text-tertiary">
                        {cart.length} certification{cart.length !== 1 ? "s" : ""} selected
                    </p>
                </div>

                {/* Cart items */}
                <div className="no-scrollbar flex-1 overflow-y-auto p-4">
                    {cart.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <p className="text-sm text-tertiary">No certifications added yet.</p>
                            <p className="text-xs text-quaternary">Add certs from the left to build your resume.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {cart.map((cert) => (
                                <div key={cert.id} className="flex items-start gap-3 rounded-lg border border-secondary bg-primary p-3">
                                    <img src={cert.image} alt={cert.title} className="h-12 w-12 rounded-md object-cover" />
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-primary">{cert.title}</p>
                                        <p className="text-xs text-tertiary">{cert.issuer}</p>
                                        <p className="text-xs text-brand-secondary">{cert.year}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(cert.id)}
                                        className="text-xs text-tertiary transition duration-100 ease-linear hover:text-error-primary"
                                    >
                                        <svg width={15} height={15} viewBox="0 0 24 24" fill="none">
                                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Checkout */}
                <div className="flex flex-col gap-3 border-t border-secondary p-6">
                    <div className="flex justify-between text-sm">
                        <span className="text-secondary">Total certs</span>
                        <span className="font-medium text-primary">{cart.length}</span>
                    </div>
                    <Button color="primary" size="md" isDisabled={cart.length === 0}>
                        Download Resume
                    </Button>
                </div>
            </div>
        </div>
    );
};
