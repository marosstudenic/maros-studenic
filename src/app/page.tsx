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
import Navigation from "./components/navigation";

// metadata
export const metadata: Metadata = {
  title: 'Maroš Studenič | Fullstack Developer | Portfolio',
  description: 'Are you looking for a fullstack developer? I am a fullstack developer with experience in React, Nextjs, TypeScript, and more. Check out my portfolio!',
}


export default function Home() {


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
                className="bg-background  text-white flex items-center space-x-2"
              >
                <span>Contact me</span>
              </HoverBorderGradient>
            </a>

            <a href="/maros-studenic.pdf" download>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-background text-orange-500 flex items-center space-x-2"
              >
                <span>Download CV</span>
              </HoverBorderGradient>
            </a>


          </div>
        </nav>
      </header >

      <div className="container md:flex align-top mx-auto py-12 md:py-40  md:gap-40 text-white">
        <Navigation />
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






