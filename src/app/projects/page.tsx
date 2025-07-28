"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "../../contexts/NavigationContext";

interface Project {
  id: string;
  name: string;
  category: string;
}

interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  projectId: string;
}

// Sample data - will be replaced with Contentful data later
const projects: Project[] = [
  { id: "LOFT", name: "Modern Loft", category: "Loft" },
  { id: "AirBnb", name: "Airbnb", category: "Airbnb" },
  { id: "Apartment", name: "Apartment", category: "Apartments" },
  { id: "Apartment_2", name: "Apartment 2", category: "Apartments" },
  { id: "Apartment_3", name: "Apartment 3", category: "Apartments" },
  { id: "Apartment_4", name: "Apartment 4", category: "Apartments" },
  { id: "Country_Villa", name: "Country Villa", category: "Country Villas" }
];

const projectImages: ProjectImage[] = [
  { id: "1", url: "/projects/main/project_image_1_loft.webp", alt: "Modern loft living room", projectId: "LOFT" },
  { id: "2", url: "/projects/main/project_image_2_airbnb.webp", alt: "Airbnb", projectId: "AirBnb" },
  { id: "3", url: "/projects/main/project_image_3_apartment.webp", alt: "Apartment", projectId: "Apartment" },
  { id: "4", url: "/projects/main/project_image_4_apartment.webp", alt: "Apartment", projectId: "Apartment_2" },
  { id: "5", url: "/projects/main/project_image_5_apartment.webp", alt: "Apartment", projectId: "Apartment_3" },
  { id: "6", url: "/projects/main/project_image_6_villa.webp", alt: "Villa", projectId: "Country_Villa" },
  { id: "7", url: "/projects/main/project_image_7_apartment.webp", alt: "Apartment", projectId: "Apartment_4" }
];

const categories = ["All Projects", "Loft", "Apartments", "Airbnb", "Country Villas"];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");
    const imagesRef = useRef<HTMLDivElement>(null);
    const { isMenuOpen } = useNavigation();

    // Scroll to first image when category changes
    useEffect(() => {
        if (imagesRef.current) {
            // Small delay to ensure DOM has updated with new filtered images
            setTimeout(() => {
                const firstImage = imagesRef.current?.querySelector('div[class*="relative bg-gray-100"]');
                if (firstImage) {
                    // Calculate position to account for sticky header and filter
                    const headerHeight = 160; // Approximate header + filter height
                    const elementTop = firstImage.getBoundingClientRect().top + window.scrollY;
                    const targetPosition = elementTop - headerHeight;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                } else {
                    // Fallback: scroll to images container
                    imagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [selectedCategory]);

    const filteredImages = selectedCategory === "All Projects" 
        ? projectImages 
        : projectImages.filter(img => {
            const project = projects.find(p => p.id === img.projectId);
            return project?.category === selectedCategory;
        });

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Projects Content */}
            <section className="pt-16 px-6 lg:px-8  mx-auto">
                <h1 className="text-4xl lg:text-7xl text-[#2B292A] mb-12 text-center" style={{fontFamily: 'N27, sans-serif', fontWeight: 900}}>
                    projects
                </h1>

                {/* Quote text */}
                <div className="mb-8">
                    <p className="text-base lg:text-lg text-[#2B292A] leading-relaxed max-w-md" style={{fontFamily: 'N27, sans-serif'}}>
                        Old spaces <strong>hold stories</strong>.<br/>
                        We give them <strong>new chapters</strong>.<br/>
                        Capturing the essence of<br/>
                        renovation—honoring the past<br/>
                        while <strong>creating the future</strong>.
                    </p>
                </div>
                {/* Category filter - moved to top */}
                <div className={`sticky top-18 lg:top-40 z-51 bg-white pb-6 mb-8 -mx-6 px-6 lg:-mx-8 lg:px-8 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <nav className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-center">
                        {categories.map((category, index) => (
                            <span key={category} className="flex items-center">
                                <button
                                    onClick={() => {
                                        setSelectedCategory(category);
                                    }}
                                    className={`text-sm lg:text-base transition-all whitespace-nowrap ${
                                        selectedCategory === category 
                                            ? "font-bold text-[#2B292A]" 
                                            : "text-[#2B292A] opacity-70 hover:opacity-100"
                                    }`}
                                    style={{fontFamily: 'N27, sans-serif'}}
                                >
                                    {category}
                                </button>
                                {index < categories.length - 1 && (
                                    <span className="text-[#2B292A] opacity-50 mx-2 hidden sm:inline">|</span>
                                )}
                            </span>
                        ))}
                    </nav>
                </div>

                {/* Projects grid */}
                <div ref={imagesRef} className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                    {filteredImages.map((image, index) => (
                        <Link key={image.id} href={`/projects/${image.projectId}`}>
                            <div className="relative bg-gray-100 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer aspect-[3/2]">
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                    className="object-cover"
                                />
                                {/* Add LM19 corners to some images */}
                                {index === 1 && (
                                    <>
                                        <div className="absolute top-4 left-4  font-bold text-xl lg:text-2xl z-10">L</div>
                                        <div className="absolute top-4 right-4  font-bold text-xl lg:text-2xl z-10">M</div>
                                        <div className="absolute bottom-4 left-4  font-bold text-xl lg:text-2xl z-10">1</div>
                                        <div className="absolute bottom-4 right-4  font-bold text-xl lg:text-2xl z-10">9</div>
                                    </>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Vertical divider line */}
            <div className="flex justify-center p-6 pb-0 pt-12">
                <div className="w-px h-16 lg:h-32 bg-[#2B292A]"></div>
            </div>

            <Footer />
        </div>
    );
}