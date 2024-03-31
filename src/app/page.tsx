import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Tabs } from "@/components/ui/tabs";
import TechIcon from "@/components/ui/tech-icon";
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconBrandGithub, IconBrandLinkedin, IconClipboardCopy, IconFileBroken, IconLink, IconMail, IconPhone, IconSignature, IconTableColumn } from "@tabler/icons-react"; import Image from "next/image";
import { Spotify } from "./components/spotify";
import Experience from "./components/experience";
import FavoriteTechnologyStack from "./components/technology";
import Contacts from "./components/contacts";
import Projects from "./components/projects";
import Hero from "./components/hero";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";


export default function Home() {

  return (
    <>
      <header>
        <nav className="w-full flex justify-between py-8 container">
          <div>
          </div>
          {/* <div className="tac-one-regular text-4xl">Green Kiwi</div> */}
          <div className="flex gap-2">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Contact me</span>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-background bg-white text-orange-500 dark:text-orange-500 flex items-center space-x-2"
            >
              <span>Download CV</span>
            </HoverBorderGradient>


          </div>
        </nav>
      </header>

      <div className="container flex align-top mx-auto py-40 gap-40">
        <div className="navigation fixed">
          <ul className="text-lg flex flex-col gap-4">
            <Link href="#about" className="py-4 px-8 bg-gradient-to-br from-gray-600 to-orange-600
             rounded-xl"> About </Link>
            <Link href="#projects" className="py-4 px-8  rounded-xl"> Projects </Link>
            <Link href="#experience" className="py-4 px-8  rounded-xl"> Experience </Link>
            <Link href="#technologies" className="py-4 px-8  rounded-xl"> Technologies </Link>
            {/* <Link href="#blog" className="py-4 px-8  rounded-xl"> About </Link> */}
            <Link href="#contact" className="py-4 px-8  rounded-xl"> Contact</Link>

          </ul>
        </div>
        <div className="w-32"></div>
        <main className="space-y-60 flex-1">

          <Hero />
          <Projects />
          <Experience />
          <FavoriteTechnologyStack />
          <Spotify />
          <Contacts />

        </main>
      </div>

    </>
  );
}






