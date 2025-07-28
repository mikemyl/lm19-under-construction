"use client";

import Image from "next/image";
import Socials from "@/components/Socials";

export type FooterProps = {
    addLine?: boolean;
}

export default function Footer({addLine = true}: FooterProps) {
    return (
        <>
            <footer className="bg-[#CED4CB] relative" style={{fontFamily: 'N27, sans-serif'}}>
                {addLine && <div className="flex justify-center">
                    <div className="w-px h-16 lg:h-32 bg-[#2B292A]"></div>
                </div>}

                <div className="py-6 px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                            {/* Sketch - Mobile: Full width top row, Desktop: Center */}
                            <div className="col-span-2 lg:col-span-1 order-1 lg:order-2 text-center flex flex-col items-center mb-8 lg:mb-0">
                                <h3 className="text-2xl lg:text-3xl font-bold tracking-wide text-[#2B292A] mb-8">CONTACT US</h3>
                                <button 
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="block hover:opacity-70 transition-opacity"
                                >
                                    <div className="relative w-64 h-64 xl:w-[600px] xl:h-[600px] mx-auto mb-4">
                                        <Image
                                            src="/sketch-transparent.png"
                                            alt="Interior Designer Sketch - Scroll to top"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </button>
                            </div>

                            {/* Socials - Mobile: Bottom left, Desktop: Left */}
                            <div className="order-2 lg:order-1 lg:self-center">
                                <div className="flex items-center justify-center lg:justify-start space-x-3">
                                    <span className="text-lg text-[#2B292A]">Follow</span>
                                    <Socials />
                                </div>
                            </div>

                            {/* Contact Info - Mobile: Bottom right, Desktop: Right */}
                            <div className="order-3 text-center lg:text-right lg:self-center">
                                <a href="tel:+302152153504"
                                   className="block text-lg lg:text-xl font-medium text-[#2B292A] mb-2 hover:underline">
                                    +30 215 215 3504
                                </a>
                                <a href="mailto:INFO@LM19.GR"
                                   className="block text-lg lg:text-xl font-medium text-[#2B292A] hover:underline">
                                    INFO@LM19.GR
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}