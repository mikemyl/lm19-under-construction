import Link from "next/link";
import Image from "next/image";import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white relative">
            <Header />

            {/* Hero Image */}
            <section className="relative">
                <div className="relative h-[45vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                    <Image
                        src="/home/hero-image.webp"
                        alt="LM19 Interior Design Hero"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="pt-12 px-6 lg:px-8 text-center">
                <h2 className="text-lg  lg:text-3xl font-extrabold mb-4 tracking-wide">ABOUT</h2>
                <p className="lg:text-xl  tracking-wide font-medium max-w-sm mx-auto">
                    We reimagine, redefine, and elevate<br/>
                    the way you experience your space.
                </p>
            </section>

            {/* Vertical divider line */}
            <div className="flex justify-center p-8">
                <div className="w-px h-30 lg:h-60 bg-[#2B292A]"></div>
            </div>

            {/* Projects Section */}
            <section className="pb-4 lg:pb-8 px-6 lg:px-8 max-w-6xl mx-auto">
                <h2 className="lg:text-3xl font-extrabold mb-8 text-center tracking-wide">PROJECTS</h2>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    {/* Project 1 - Bedroom */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                        <Image
                            src="/home/project-image-1.webp"
                            alt="Bedroom Project"
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Project 2 - Bathroom */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                        <Image
                            src="/home/project-image-2.webp"
                            alt="Bathroom Project"
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {/* Project 3 - Text */}
                    <div className="relative aspect-square overflow-hidden">
                        <div className="flex flex-col justify-end items-start h-full gap-10">
                            <div>
                                <p className="lg:text-2xl leading-relaxed mb-4 mx-auto">
                                    Old spaces <strong>hold stories</strong>.<br/>
                                    We give them <strong>new chapters</strong>.<br/>
                                    Capturing the essence of<br/>
                                    renovation honoring the<br/>
                                    past while <strong>creating the<br/>
                                    future.</strong>
                                </p>
                            </div>
                            <div className="px-10">
                                <Link href="/projects" className="lg:text-xl font-bold hover:underline">
                                    SEE OUR PROJECTS&gt;
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 - Kitchen */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                        <Image
                            src="/home/project-image-3.webp"
                            alt="Kitchen Project"
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Vertical divider line */}
            <div className="flex justify-center p-6">
                <div className="opacity-30 w-px h-30 lg:h-60 bg-[#2B292A]"></div>
            </div>

            {/* Inspired by Art Section */}
            <section className="pt-8 px-6 lg:px-8 max-w-6xl mx-auto">
                <h2 className="lg:text-3xl font-extrabold mb-8 text-center tracking-wide">INSPIRED BY ART</h2>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                        <Image
                            src="/home/art1.webp"
                            alt="Art Inspiration 1"
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                        <Image
                            src="/home/art2.webp"
                            alt="Art Inspiration 2"
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12">
                    <div className="relative aspect-square bg-black overflow-hidden flex items-center justify-center">
                        <Image
                            src="/home/art3.webp"
                            alt="Art Inspiration 3"
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="lg:text-2xl text-end leading-relaxed">
                            We are inspired by art.<br/>
                            <strong>Our roots</strong> are deep into it<br/>
                            and always influences<br/>
                            our design process.
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-px h-30 lg:h-56 bg-[#2B292A]"></div>
                </div>
            </section>

            <Footer />

        </div>
    );
}