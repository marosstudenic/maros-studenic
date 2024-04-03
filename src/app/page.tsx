"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotify } from "./components/spotify";
import Experience from "./components/experience";
import FavoriteTechnologyStack from "./components/technology";
import Contacts from "./components/contacts";
import Projects from "./components/projects";
import Hero from "./components/hero";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import { Metadata } from "next";


export default function Home() {

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
    <>
      <header>
        <nav className="w-full flex justify-between max-sm:justify-center py-8 container mx-auto">
          <div>
          </div>
          {/* <div className="tac-one-regular text-4xl">Green Kiwi</div> */}
          <div className="flex gap-2">
            <a href="#contact" >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span>Contact me</span>
              </HoverBorderGradient>
            </a>

            <a href="/maros-studenic.pdf" download>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-background bg-white text-orange-500 dark:text-orange-500 flex items-center space-x-2"
              >
                <span>Download CV</span>
              </HoverBorderGradient>
            </a>


          </div>
        </nav>
      </header >

      <div className="container flex align-top mx-auto py-40 gap-40">
        <div className="navigation fixed max-md:hidden">
          <ul className="text-lg flex flex-col gap-4">
            {sections.map((section) => (
              <Link key={section.id} href={`#${section.id}`} className={cn("py-4 px-8  rounded-xl transition-all", inView === section.id ? "bg-gradient-to-br from-gray-600 to-orange-600" : "")}
              > {section.title} </Link>
            ))}
          </ul>
        </div>
        <div className="w-32 max-md:hidden"></div>
        <main className="space-y-20 md:space-y-60 flex-1 max-md:px-8">

          <Hero />
          <Projects />
          <Experience />
          <FavoriteTechnologyStack />
          <Spotify />
          <Contacts />
          {/* <ContactForm /> */}

        </main>
      </div >
      <Footer />

    </>
  );
}






