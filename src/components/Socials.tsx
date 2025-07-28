import {SiFacebook, SiInstagram} from "@icons-pack/react-simple-icons";

export default function Socials() {
    return (
        <>
            <a href={"https://www.instagram.com/lm19.gr/"} target="_blank" rel="noopener noreferrer">
                <div
                    className="w-10 h-10 border-2 border-[#2B292A] rounded-full flex items-center justify-center">
                    <SiInstagram size={20} className="text-[#2B292A]"/>
                </div>
            </a>
            <a href={"https://www.facebook.com/profile.php?id=61565432978663"} target="_blank" rel="noopener noreferrer">
                <div
                    className="w-10 h-10 border-2 border-[#2B292A] rounded-full flex items-center justify-center">
                    <SiFacebook size={20} className="text-[#2B292A]"/>
                </div>
            </a>
        </>
    )
}