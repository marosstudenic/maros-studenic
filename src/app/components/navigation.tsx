"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
    const sections = [
        {
            id: 'about',
            title: 'About'
        },
        {
            id: 'projects',
            title: 'Projects'
        },
        {
            id: 'experience',
            title: 'Experience'
        },
        {
            id: 'technologies',
            title: 'Technologies'
        },
        {
            id: 'contact',
            title: 'Contact'
        }
    ]

    const [inView, setInView] = useState<string | null>("about");

    useEffect(() => {
        var observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    setInView(entry.target.id);
                    console.log(entry.target.id, "in view");
                }
            });
            // Two targets are observed so entries.length may be 1 or 2
            // entries.length will be 1 if thresholds of one of the targets is crossed
            // entries.length will be 2 if thresholds of both targets are crossed
        }, { threshold: [0.7] });

        sections.forEach((section) => {
            const element = document.querySelector(`#${section.id}`);
            if (element) {
                observer.observe(element);
            }
        });
    }, []);
    return (
        <div className="navigation fixed max-md:hidden">
            <ul className="text-lg flex flex-col gap-4">
                {sections.map((section) => (
                    <Link key={section.id} href={`#${section.id}`} className={cn("py-4 px-8  rounded-xl transition-all", inView === section.id ? "bg-gradient-to-br from-gray-600 to-orange-600" : "")}
                    > {section.title} </Link>
                ))}
            </ul>
        </div>
    )
}

export default Navigation;