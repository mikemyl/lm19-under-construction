"use client";

import { useEffect } from "react";
import Link from "next/link";
import NavigationOverlay from "./NavigationOverlay";
import { useNavigation } from "../contexts/NavigationContext";

export default function Header() {
    const { isMenuOpen, setIsMenuOpen } = useNavigation();

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup: restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white grid grid-cols-3 items-start py-4 px-2 lg:p-8">
                <div className="relative overflow-visible">
                    <Link href="/" className="block hover:opacity-70 transition-opacity">
                        <div className="text-4xl lg:text-9xl font-bold tracking-tighter text-[#2B292A] relative"
                             style={{fontFamily: 'N27, sans-serif'}}>
                            LM19
                            <span
                                className="absolute -top-1 lg:-top-0  text-[8px] lg:text-[10px] font-normal text-[#2B292A] tracking-wide"
                                style={{fontFamily: 'N27, sans-serif', letterSpacing: '0.5px'}}>
                                  interior std.
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex justify-center items-center">
                    <div className="text-sm text-left lg:text-lg leading-tight text-[#2B292A] mt-2"
                         style={{fontFamily: 'N27, sans-serif'}}>
                        <div className="font-bold">PETROS TZANIS</div>
                        <div className="lg:px-6">INTERIOR STUDIO</div>
                    </div>
                </div>

                <div className="flex justify-end items-center">
                    <button 
                        className="mt-3 z-50 relative hover:opacity-70 transition-all duration-200 ease-in-out hover:scale-105" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            // X close button
                            <div className="relative w-12 lg:w-24 h-12 lg:h-24 flex items-center justify-center">
                                <div className="absolute w-12 lg:w-24 h-0.5 lg:h-1.5 bg-[#2B292A] rotate-45"></div>
                                <div className="absolute w-12 lg:w-24 h-0.5 lg:h-1.5 bg-[#2B292A] -rotate-45"></div>
                            </div>
                        ) : (
                            // Hamburger menu
                            <div className="space-y-2.5">
                                <div className="w-12 lg:w-24 h-0.5 lg:h-1.5 bg-[#2B292A]"></div>
                                <div className="w-12 lg:w-24 h-0.5 lg:h-1.5 bg-[#2B292A]"></div>
                            </div>
                        )}
                    </button>
                </div>
            </header>

            <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}