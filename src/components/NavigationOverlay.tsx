import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/Socials";


interface NavigationOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NavigationOverlay({isOpen, onClose}: NavigationOverlayProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white z-40 flex flex-col" style={{fontFamily: 'N27, sans-serif'}}>
            <div className="flex-1 flex">
                {/* Left side - Navigation links */}
                <div className="flex-1 flex flex-col justify-center pl-8 lg:pl-16">
                    <nav className="space-y-8 lg:space-y-12">
                        <Link
                            href="/about"
                            className="block text-4xl lg:text-6xl xl:text-7xl font-bold text-[#2B292A] hover:opacity-70 transition-opacity"
                            onClick={onClose}
                        >
                            about
                        </Link>
                        <Link
                            href="/what-we-do"
                            className="block text-4xl lg:text-6xl xl:text-7xl font-bold text-[#2B292A] hover:opacity-70 transition-opacity"
                            onClick={onClose}
                        >
                            what we do
                        </Link>
                        <Link
                            href="/projects"
                            className="block text-4xl lg:text-6xl xl:text-7xl font-bold text-[#2B292A] hover:opacity-70 transition-opacity"
                            onClick={onClose}
                        >
                            projects
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-4xl lg:text-6xl xl:text-7xl font-bold text-[#2B292A] hover:opacity-70 transition-opacity"
                            onClick={onClose}
                        >
                            contact
                        </Link>
                    </nav>
                </div>

                {/* Right side - LM19 logo and sketch */}
                <div className="flex-1 flex flex-col justify-center items-center pr-8 lg:pr-16">
                    <div className="text-center">
                        <div className="relative w-48 h-48 lg:w-64 lg:h-64 xl:w-[40vh] xl:h-[40vh] mx-auto mb-4">
                            <Link href="/" className="block hover:opacity-70 transition-opacity" onClick={onClose}>
                                <Image
                                    src="/sketch-transparent.png"
                                    alt="Interior Designer Sketch"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}