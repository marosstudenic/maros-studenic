import { IconHeart, IconHeartExclamation } from "@tabler/icons-react";

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-600 flex gap-2 py-4 justify-center max-sm:flex-col px-4 text-white">
            <p className="max-sm:text-sm">Made by sweat, salty ocean water and craft beer. </p>

            <div className="flex gap-4 max-sm:text-sm">
                <IconHeart />
                <p>Love to <a href="https://ui.aceternity.com/" target="__blank" rel="nofollow" className="underline">Accernity</a> for amazing components. </p>
            </div>
        </footer>
    );
}

export default Footer;