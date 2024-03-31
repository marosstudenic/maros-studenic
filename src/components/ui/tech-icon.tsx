import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';

type SizeVariant = 'small' | 'medium' | 'large';

interface TechIconProps {
    name: string; // Change type to string
    variant?: SizeVariant;
}

const TechIcon: React.FC<TechIconProps> = ({ name, variant = 'small' }) => {
    // Map each technology name to its respective icon file path
    const iconMap: { [key: string]: string } = {
        nextjs: "/techstack/nextjs.svg",
        javascript: "/techstack/javascript.svg",
        firebase: "/techstack/firebase.svg",
        laravel: "/techstack/laravel.svg",
        mongodb: "/techstack/mongodb.svg",
        nestjs: "/techstack/nestjs.svg",
        react: "/techstack/react.svg",
        tailwind: "/techstack/tailwind.svg",
        docker: "/techstack/docker.svg",
        fastapi: "/techstack/fastapi.svg",
        django: "/techstack/django.svg",
        typescript: "/techstack/typescript.svg",
        postgresql: "/techstack/postgresql.svg",
        php: "/techstack/php.svg",
        redis: "/techstack/redis.svg",
        python: "/techstack/python.svg",
        "c++": "/techstack/cpp.svg",
        convex: "/techstack/convex.png",
        clerk: "/techstack/clerk.png",

        // Add additional mappings here if needed
    };

    // Check if the received technology name has a corresponding icon
    const sizeMap: { [key in SizeVariant]: string } = {
        small: "w-6 h-6",
        medium: "w-8 h-8",
        large: "w-12 h-12",
    };

    const iconSrc = iconMap[name.toLowerCase()];

    // Render the icon if it exists, otherwise render an error message
    return iconSrc ? (
        <div className="flex flex-col justify-end items-center gap-4">
            <Image src={iconSrc} alt={name} width={32} height={32} className={cn("mr-2 object-contain", sizeMap[variant])} />
            <span>{name}</span>
        </div>
    ) : (
        <div>{` "${name}" `}</div>
    );
};

export default TechIcon;
