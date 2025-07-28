"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useState } from "react";

const WHAT_WE_DO_DATA = new Map([
    ["design", {
        title: "Design & Concept Development",
        description: "This is the foundation of any interior design project. It involves understanding the client's needs, lifestyle, and aesthetic preferences to develop a design concept that aligns with their vision.",
        keyElements: [
            {
                title: "Client Consultation",
                description: "Discussing expectations, style preferences, functional needs, and budget."
            },
            {
                title: "Space Planning & Layout Design",
                description: "Optimizing the use of space to ensure efficiency, flow, and comfort."
            },
            {
                title: "Mood Boards & Color Schemes",
                description: "Creating visual presentations with materials, color palettes, and textures."
            },
            {
                title: "3D Renderings & Drawings",
                description: "Developing photorealistic visuals and technical drawings to help clients visualize the final result."
            },
            {
                title: "Material & Finishes Selection",
                description: "Choosing high-quality materials that enhance aesthetics and durability."
            }
        ],
        lm19Note: "At LM19, this phase is essential in setting a strong creative direction while ensuring practicality in design choices."
    }],
    ["renovation", {
        title: "Renovation & Construction Management",
        description: "Since LM19 specializes in renovations, this is a core aspect of the studio. It involves executing the approved design while managing the transformation of the space.",
        keyElements: [
            {
                title: "Structural Changes & Demolition",
                description: "Removing outdated or unnecessary elements while maintaining the integrity of the building."
            },
            {
                title: "Electrical & Plumbing Work",
                description: "Updating systems to meet modern standards while ensuring functionality."
            },
            {
                title: "Flooring, Walls & Ceiling Treatments",
                description: "Installing new flooring, applying decorative wall finishes, and designing ceiling details for a cohesive look."
            },
            {
                title: "Custom Carpentry & Built-ins",
                description: "Crafting bespoke furniture, storage solutions, and architectural elements to maximize space."
            },
            {
                title: "Quality Control & Site Supervision",
                description: "Ensuring construction is executed to perfection and resolving any onsite issues efficiently."
            }
        ],
        lm19Note: "LM19's role here is to coordinate all professionals involved, from contractors to craftsmen, ensuring a seamless and high-quality renovation process."
    }],
    ["coordination", {
        title: "Project Coordination & Budgeting",
        description: "A well-managed renovation project requires strategic planning, organization, and financial oversight.",
        keyElements: [
            {
                title: "Timeline & Milestone Planning",
                description: "Setting realistic deadlines for each phase of the renovation to keep the project on track."
            },
            {
                title: "Cost Estimation & Budget Management",
                description: "Providing clients with a detailed budget breakdown and ensuring that expenses stay within limits."
            },
            {
                title: "Supplier & Vendor Coordination",
                description: "Managing orders, deliveries, and installations to prevent delays."
            },
            {
                title: "Problem Solving & Risk Management",
                description: "Addressing unexpected challenges (e.g., structural issues, material shortages) with quick and effective solutions."
            },
            {
                title: "Client Communication & Progress Updates",
                description: "Keeping clients informed throughout the process with regular reports and onsite visits."
            }
        ],
        lm19Note: "This aspect ensures that LM19's projects run smoothly, efficiently, and with minimal stress for the client."
    }],
    ["furniture", {
        title: "Furniture, Styling & Finishing Touches",
        description: "The final layer of a renovation project is what truly brings a space to life. It involves the careful selection of furniture, décor, and accessories that complement the design concept.",
        keyElements: [
            {
                title: "Furniture Selection & Custom Design",
                description: "Choosing or designing pieces that align with the aesthetics and functionality of the space."
            },
            {
                title: "Lighting Design",
                description: "Enhancing ambiance through a mix of general, task, and accent lighting."
            },
            {
                title: "Textiles & Soft Furnishings",
                description: "Incorporating rugs, curtains, cushions, and upholstery for warmth and texture."
            },
            {
                title: "Decorative Accessories & Artwork",
                description: "Adding personality through curated pieces that reflect the client's taste."
            },
            {
                title: "Final Styling & Staging",
                description: "Arranging all elements harmoniously to create a polished, cohesive look."
            }
        ],
        lm19Note: "At LM19, this phase is about perfecting the details, ensuring that each space feels both stylish and personal."
    }]
]);

export default function WhatWeDo() {
    const [selectedCategory, setSelectedCategory] = useState("design");
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* What We Do Content */}
            <section className="pt-16 px-6 lg:px-8 max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-7xl text-[#2B292A] mb-12 text-center" style={{fontFamily: 'N27, sans-serif', fontWeight: 900}}>
                    what we do
                </h1>

                {/* Hero Image with LM19 corners */}
                <div className="relative w-full mb-8">
                    <Image
                        src="/what-we-do/what-we-do-design.png"
                        alt="Interior Design Project"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                    />
                </div>

                {/* Services List */}
                <div className="text-center mb-8">
                    <div className="mb-8 max-w-6xl mx-auto">
                        <p className="text-base lg:text-lg text-[#2B292A] leading-relaxed" style={{fontFamily: 'N27, sans-serif'}}>
                            {Array.from(WHAT_WE_DO_DATA.entries()).map(([key, category], index) => (
                                <span key={key}>
                                    <button 
                                        onClick={() => setSelectedCategory(key)}
                                        className={`${selectedCategory === key ? "font-bold opacity-100" : "opacity-70"} hover:opacity-100 transition-opacity`}
                                    >
                                        {category.title}
                                    </button>
                                    {index < WHAT_WE_DO_DATA.size - 1 && (
                                        <>
                                            <span className="opacity-70"> | </span>
                                            {index === 1 && <br />}
                                        </>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>

                    {/* Vertical divider line */}
                    <div className="flex justify-center mb-8">
                        <div className="w-px h-16 lg:h-24 bg-[#2B292A]"></div>
                    </div>

                    {/* Service Details */}
                    <div className="max-w-2xl mx-auto space-y-8">
                        {/* Category Description */}
                        <div className="mb-8">
                            <p className="text-base lg:text-lg text-[#2B292A] leading-relaxed" style={{fontFamily: 'N27, sans-serif'}}>
                                {WHAT_WE_DO_DATA.get(selectedCategory)?.description}
                            </p>
                        </div>

                        {/* Key Elements */}
                        {WHAT_WE_DO_DATA.get(selectedCategory)?.keyElements.map((element, index) => (
                            <div key={index}>
                                <h3 className="text-lg lg:text-xl font-bold text-[#2B292A] mb-2" style={{fontFamily: 'N27, sans-serif'}}>
                                    {element.title}
                                </h3>
                                <p className="text-base lg:text-lg text-[#2B292A]" style={{fontFamily: 'N27, sans-serif'}}>
                                    {element.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* At LM19 Section */}
                    <div className="mt-12 mb-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#2B292A] mb-4" style={{fontFamily: 'N27, sans-serif'}}>
                            At LM19
                        </h2>
                        <p className="text-base lg:text-lg text-[#2B292A] max-w-xl mx-auto" style={{fontFamily: 'N27, sans-serif'}}>
                            {WHAT_WE_DO_DATA.get(selectedCategory)?.lm19Note}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}

            <Footer addLine={false} />
        </div>
    );
}