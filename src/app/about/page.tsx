import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

            {/* About Content */}
            <section className="pt-16 px-6 lg:px-8 max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-7xl text-[#2B292A] mb-12 text-center"
                    style={{fontFamily: 'N27, sans-serif', fontWeight: 900}}>
                    about
                </h1>

                <div className="mb-8 text-center max-w-3xl mx-auto">
                    <p className="text-lg lg:text-xl  text-[#2B292A] mb-8" style={{fontFamily: 'N27, sans-serif'}}>
                        At LM19 interior std., we believe that every space has a story to tell. Based in the
                        heart suburbs of Athens, Greece, our interior design studio specializes in
                        reimagining, redefining, and elevating residential and commercial spaces. We transform
                        outdated spaces into inspiring environments that reflect the personality,
                        needs and aspirations of our clients.
                    </p>

                    <p className="text-lg lg:text-xl  text-[#2B292A] mb-8" style={{fontFamily: 'N27, sans-serif'}}>
                        Our mission is to breathe new life into every corner we touch. Taking while crafting
                        innovative, sustainable, and aesthetically refined designs. Through a seamless blend
                        of creativity, craftsmanship, and attention to detail, we create spaces that feel both
                        deeply personal and beautifully designed.
                    </p>

                    <p className="text-lg lg:text-xl  text-[#2B292A]" style={{fontFamily: 'N27, sans-serif'}}>
                        At LM19, we reimagine, redefine, and elevate the way you experience your space.
                    </p>
                </div>

                {/* Designer photo with text */}
                <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 lg:gap-4 mb-4 items-center">
                    <div className="text-center lg:hidden lg:text-left leading-4 lg:leading-1">
                        <p className="lg:text-lg font-bold text-[#2B292A] mb-2 lg:mb-0"
                           style={{fontFamily: 'N27, sans-serif'}}>
                            PETROS TZANIS
                        </p>
                    </div>
                    <div className="relative col-start-2 aspect-square bg-gray-100 overflow-hidden">
                        <Image
                            src="/about/about-interior-designer.png"
                            alt="Bedroom Project"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center hidden lg:block lg:text-left leading-4 lg:leading-1">
                        <p className="lg:text-lg font-bold text-[#2B292A] mb-2 lg:mb-0"
                           style={{fontFamily: 'N27, sans-serif'}}>
                            PETROS TZANIS
                        </p>
                        <p className="lg:text-lg pl-6 text-[#2B292A] opacity-70"
                           style={{fontFamily: 'N27, sans-serif'}}>
                            INTERIOR DESIGNER
                        </p>
                    </div>
                    <div className="text-center lg:hidden lg:text-left leading-4 lg:leading-1">
                        <p className="lg:text-lg  text-[#2B292A] opacity-70"
                           style={{fontFamily: 'N27, sans-serif'}}>
                            INTERIOR DESIGNER
                        </p>
                    </div>
                </div>

                {/* Projects section below */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#2B292A] mb-4"
                        style={{fontFamily: 'N27, sans-serif'}}>
                        PROJECTS
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mx-auto">
                        <div
                            className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                            <Image
                                src="/about/about-project-image-1.png"
                                alt="Bedroom Project"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div
                            className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                            <Image
                                src="/about/about-project-image-2.png"
                                alt="Bedroom Project"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* See more link */}
                <div className="text-center ">
                    <Link
                        href="/projects"
                        className="inline-block text-sm lg:text-lg font-bold text-[#2B292A]  hover:underline"
                        style={{fontFamily: 'N27, sans-serif'}}
                    >
                        SEE MORE &gt;
                    </Link>
                </div>
            </section>

            {/* Vertical divider line */}
            <div className="flex pt-5 justify-center ">
                <div className="w-px h-16 lg:h-32 bg-[#2B292A]"></div>
            </div>

            <Footer/>
        </div>
    );
}