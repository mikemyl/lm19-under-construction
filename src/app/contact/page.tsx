import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Socials from "@/components/Socials";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Contact Content */}
            <section className="pt-16 px-6 lg:px-8 max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-7xl text-[#2B292A] mb-12 text-center" style={{fontFamily: 'N27, sans-serif', fontWeight: 900}}>
                    contact
                </h1>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-12 justify-center">
                    {/* Left side: Contact Image */}
                    <div className="lg:w-1/2">
                        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                            <Image
                                src="/contact/contact-hello.webp"
                                alt="Interior Design Workspace"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side: Contact Info */}
                    <div className="lg:w-1/2 flex flex-col h-full self-center lg:items-end text-right lg:text-left">
                        <div className="flex flex-col items-end">
                            <a href="tel:+302152153504" className="block text-2xl lg:text-3xl  text-[#2B292A] mb-2 hover:underline" style={{fontFamily: 'N27, sans-serif'}}>
                                +30 215 215 3504
                            </a>
                            <a href="mailto:INFO@LM19.GR" className="block text-2xl lg:text-3xl  text-[#2B292A] mb-8 hover:underline" style={{fontFamily: 'N27, sans-serif'}}>
                                INFO@LM19.GR
                            </a>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                                <span className="text-lg lg:text-xl text-[#2B292A]" style={{fontFamily: 'N27, sans-serif'}}>Follow</span>
                                <Socials />
                            </div>
                        </div>

                        <div className="text-center lg:text-right">
                            <p className="text-lg lg:text-xl font-bold text-[#2B292A] mb-2" style={{fontFamily: 'N27, sans-serif'}}>
                                FEEL FREE
                            </p>
                            <p className="text-lg lg:text-xl font-bold text-[#2B292A] mb-2" style={{fontFamily: 'N27, sans-serif'}}>
                                TO ASK
                            </p>
                            <p className="text-lg lg:text-xl font-bold text-[#2B292A] mb-8" style={{fontFamily: 'N27, sans-serif'}}>
                                ANY QUESTION
                            </p>
                            
                            <button className="bg-[#2B292A] text-white px-8 py-3 text-sm lg:text-lg font-bold hover:opacity-90 transition-opacity" style={{fontFamily: 'N27, sans-serif'}}>
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vertical divider line */}
            <div className="flex justify-center p-6 pb-0">
                <div className="w-px h-16 lg:h-32 bg-[#2B292A]"></div>
            </div>

            <Footer />
        </div>
    );
}