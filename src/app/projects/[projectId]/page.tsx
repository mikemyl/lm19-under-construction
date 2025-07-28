import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {JSX} from "react";

interface ProjectDetailImage {
    id: string;
    url: string;
    alt: string;
    layout: 'full' | 'half' | 'third';
}

interface ProjectDetail {
    id: string;
    name: string;
    category: string;
    images: ProjectDetailImage[];
    descriptions: JSX.Element[];
}

// Helper function to generate image paths dynamically
const getProjectImages = (projectId: string) => {
    const imageConfigs = {
        "Apartment": {
            count: 3,
            layout: ["full", "full", "full"]
        },
        "Country_Villa": {
            count: 3,
            layout: ["full", "half", "half"]
        },
        "Apartment_2": {
            count: 2,
            layout: ["full", "full"]
        },
        "Apartment_3": {
            count: 2,
            layout: ["full", "full"]
        },
        "Apartment_4": {
            count: 2,
            layout: ["full", "full"]
        },
        "LOFT": {
            count: 4,
            layout: ["full", "third", "third", "third"]
        },
        "AirBnb": {
            count: 2,
            layout: ["full", "full"]
        }
    };

    const config = imageConfigs[projectId as keyof typeof imageConfigs];
    if (!config) return [];

    return Array.from({length: config.count}, (_, index) => ({
        id: String(index + 1),
        url: `/projects/${projectId}/current-${index + 1}.webp`,
        alt: `${projectId} image ${index + 1}`,
        layout: config.layout[index] as 'full' | 'half' | 'third'
    }));
};

// Extended project data with detailed images and descriptions
const projectDetails: ProjectDetail[] = [
    {
        id: "Apartment",
        name: "Apartment",
        category: "Apartment",
        images: getProjectImages("Apartment"),
        descriptions:
            [
                <>This <strong>renovated apartment</strong> combines warm minimalism with bold material choices to
                    create a
                    refined yet
                    inviting atmosphere.</>,
                <>The <strong>bedroom</strong> emphasizes tranquility with soft neutrals, custom millwork, and curved
                    forms.</>,
                <>The <strong>open-plan kitchen</strong> and <strong>living area</strong> blends natural wood finishes
                    with
                    striking tile geometry and
                    contemporary lighting, maximizing both functionality and style.</>,
                <>The <strong>bathroom</strong> exudes spa-like luxury, featuring a sculptural stone bathtub, textured
                    slate
                    wall, and matte
                    black fixtures for a dramatic contrast. Altogether, the design reflects a sophisticated composition
                    ideal for an elevated experience.</>
            ]
    },
    {
        id: "Country_Villa",
        name: "Country Villa",
        category: "Country Villas",
        images: getProjectImages("Country_Villa"),
        descriptions: [
            <>This country villa renovation creates a bright and airy living space with a touch of rustic charm. The
                design features clean white cabinetry and walls, contrasted by warm wood accents like the bamboo wall
                detail and flooring. A woven pendant light and organically shaped mirror add to the natural and relaxed
                feel</>,
            <>The renovation of this bedroom emphasizes a bohemian and natural aesthetic. The design includes a rattan
                headboard and pendant light, complemented by neutral bedding and woven wall decor. The use of warm wood
                furniture and hanging plants contributes to a relaxed and inviting atmosphere</>
        ]
    },
    {
        id: "Apartment_2",
        name: "Apartment",
        category: "Apartments",
        images: getProjectImages("Apartment_2"),
        descriptions: [
            <>The <strong>design</strong> features a large central island with seating, sleek handleless cabinetry
                in contrasting light and wood tones, and contemporary pendant lighting. The use of
                natural light and minimalist decor contributes to a clean and airy aesthetic.</>,
            <>The <strong>bedroom</strong> renovation showcases a thoughtful blend of natural textures and
                functional design. The slatted wood wall and headboard create warmth and
                visual interest, complemented by soft neutral bedding. A built-in desk area
                maximizes space for work or study, while the overall ambiance feels calm
                and contemporary.</>
        ]


    },
    {
        id: "Apartment_3",
        name: "Apartment",
        category: "Apartments",
        images: getProjectImages("Apartment_3"),
        descriptions:
            [
                <>This <strong>apartment renovation</strong> features a compact yet stylish kitchen. The design
                    incorporates
                    a mix of
                    textures, including wood paneling, marble countertops, and a striking geometric-patterned wall. The
                    space is well-lit with modern track lighting and a pendant lamp, creating a cozy and contemporary
                    feel.</>,
                <>The <strong>bathroom</strong> renovation has a refreshing and natural feel. The use of rich green
                    subway
                    tiles creates a
                    vibrant backdrop, accented by gold-framed mirrors and warm wood details. The inclusion of plants
                    adds a
                    touch of organic life, resulting in a stylish and tranquil space.</>
            ]
    },
    {
        id: "Apartment_4",
        name: "Apartment",
        category: "Apartments",
        images: getProjectImages("Apartment_4"),
        descriptions:
            [
                <>The <strong>kitchen</strong> design features a large central island with seating, sleek handleless
                    cabinetry in contrasting light
                    and wood tones, and contemporary pendant lighting. The use of marble and wood creates a balance
                    between
                    luxury and warmth, providing both functionality and visual interest, complemented by soft neutral
                    bedding.</>,
                <>The <strong>bedroom</strong> renovation showcases a thoughtful blend of natural textures and warm
                    tones.
                    The design creates
                    a wooden slat headboard and pendant light, complemented by neutral bedding and woven wall decor. A
                    built-in desk area maximizes space for work or study, while the overall ambience feels calm and
                    contemporary.</>
            ]
    },
    {
        id: "LOFT",
        name: "Loft",
        category: "Loft",
        images: getProjectImages("LOFT"),
        descriptions: [
            <>The <strong>renovation of this attic</strong> was focused on smart solutions to create more space to meet
                all needs, with an open plan solution. The approach we used was a modern, minimalist aesthetic with a
                focus on clean lines and natural materials.</>
        ]
    },
    {
        id: "AirBnb",
        name: "Airbnb",
        category: "Airbnb",
        images: getProjectImages("AirBnb"),
        descriptions: [
            <>The <strong>renovation of this Airbnb apartment</strong> showcases a modern, minimalist aesthetic with a
                focus on clean lines and natural materials.</>,
            <>The <strong>bedroom</strong> features a light wood accent wall joined with soft, neutral tones, creating a
                calm, inviting space. The unique curved design on the headboard adds a contemporary touch.</>,
            <>The <strong>kitchen</strong> area follows a similar theme with wood finishes, sleek cabinetry, and
                geometric tiles on the
                wall, providing a functional yet stylish environment.</>,
            <>The integration of soft lighting and soft textures adds warmth and comfort, making it an ideal space for
                guests seeking relaxation and elegance.</>,
        ]
    }
];

// Other projects for the bottom section (excluding current project)
const getOtherProjects = (currentProjectId: string) => {
    return projectDetails
        .filter(project => project.id !== currentProjectId)
        .slice(0, 3)
        .map((project, index) => ({
            id: project.id,
            name: project.name,
            category: project.category,
            image: `/projects/${currentProjectId}/other-${index + 1}.webp`
        }));
};

export async function generateStaticParams() {
    return projectDetails.map((project) => ({
        projectId: project.id,
    }));
}

export default async function ProjectDetail({params}: { params: Promise<{ projectId: string }> }) {
    const {projectId} = await params;
    const project = projectDetails.find(p => p.id === projectId);

    if (!project) {
        notFound();
    }

    const otherProjects = getOtherProjects(projectId);

    return (
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="pt-16 px-6 lg:px-64  mx-auto">
                <h1 className="text-4xl lg:text-7xl text-[#2B292A] mb-4 text-center"
                    style={{fontFamily: 'N27, sans-serif', fontWeight: 900}}>
                    projects
                </h1>

                <h2 className="text-lg lg:text-xl text-[#2B292A] mb-8 text-center font-medium"
                    style={{fontFamily: 'N27, sans-serif'}}>
                    {project.category}
                </h2>

                {/* Project Images */}
                <div className="mb-12 space-y-2">
                    {/* Main image - always the same (70% width) */}
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 mb-2 lg:mb-4">
                        <div className="lg:col-span-8 relative aspect-[3/2]">
                            <Image
                                src={project.images[0].url}
                                alt={project.images[0].alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 80vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Additional images - conditional layout based on count */}
                    {(() => {
                        const remainingImages = project.images.slice(1);
                        const totalImages = project.images.length;

                        if (totalImages === 1) {
                            // No additional images
                            return null;
                        } else if (totalImages === 2) {
                            // Single remaining image (60% width, right aligned)
                            return (
                                <div className="flex justify-end">
                                    <div className="w-[70%]">
                                        <Image
                                            src={remainingImages[0].url}
                                            alt={remainingImages[0].alt}
                                            width={0}
                                            height={0}
                                            sizes="(max-width: 1024px) 60vw, 50vw"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            );
                        } else if (totalImages === 3) {
                            // Two remaining images side by side
                            return (
                                <div className="flex gap-4 justify-center items-start">
                                    <div className="flex-1 max-w-[48%]">
                                        <Image
                                            src={remainingImages[0].url}
                                            alt={remainingImages[0].alt}
                                            width={0}
                                            height={0}
                                            sizes="(max-width: 1024px) 50vw, 40vw"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="flex-1 max-w-[48%]">
                                        <Image
                                            src={remainingImages[1].url}
                                            alt={remainingImages[1].alt}
                                            width={0}
                                            height={0}
                                            sizes="(max-width: 1024px) 50vw, 40vw"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            );
                        } else {
                            // Multiple images in full row below maintaining natural aspect ratios
                            return (
                                <div className={`grid grid-cols-1 lg:grid-cols-${remainingImages.length} gap-4`}>
                                    {remainingImages.map((image) => (
                                        <div key={image.id}>
                                            <Image
                                                src={image.url}
                                                alt={image.alt}
                                                width={0}
                                                height={0}
                                                sizes={`(max-width: 1024px) 100vw, ${Math.floor(100 / remainingImages.length)}vw`}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    ))}
                                </div>
                            );
                        }
                    })()}
                </div>

                {/* Project Descriptions */}
                <div className="space-y-6 mb-16 max-w-2xl mx-auto">
                    {project.descriptions.map((description, index) => (
                        <p key={index} className="text-base lg:text-lg text-[#2B292A] leading-relaxed text-center"
                           style={{fontFamily: 'N27, sans-serif'}}>
                            {description}
                        </p>
                    ))}
                </div>

                {/* Other Projects Section */}
                <div className="">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#2B292A] mb-8 text-center"
                        style={{fontFamily: 'N27, sans-serif'}}>
                        OTHER PROJECTS
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {otherProjects.map((otherProject, index) => {
                            // Middle image (index 1) is shorter
                            const containerHeight = index === 1 ? "h-48" : "h-64";

                            return (
                                <Link key={otherProject.id} href={`/projects/${encodeURIComponent(otherProject.id)}`}>
                                    <div
                                        className={`relative w-full ${containerHeight} bg-gray-100 overflow-hidden group cursor-pointer`}>
                                        <Image
                                            src={`/projects/${projectId}/other-${index + 1}.webp`}
                                            alt={otherProject.name}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            className="object-cover transition-all duration-300"
                                        />
                                        {/* Hover overlay */}
                                        <div
                                            className="absolute inset-0 bg-gray-500 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80">
                                            <div className="text-white text-center">
                                                <div className="text-lg lg:text-xl font-bold mb-2"
                                                     style={{fontFamily: 'N27, sans-serif'}}>
                                                    EXPLORE
                                                </div>
                                                <div className="text-lg lg:text-xl font-bold mb-3"
                                                     style={{fontFamily: 'N27, sans-serif'}}>
                                                    THE PROJECT
                                                </div>
                                                <div className="w-12 h-1 bg-white mx-auto"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Vertical divider line */}
            <div className="flex justify-center">
                <div className="w-px h-16 lg:h-32 bg-[#2B292A]"></div>
            </div>

            <Footer/>
        </div>
    );
}