import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/movinbg-border";
import { Tabs } from "@/components/ui/tabs";
import TechIcon from "@/components/ui/tech-icon";
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy, IconFileBroken, IconLink, IconSignature, IconTableColumn } from "@tabler/icons-react";
import Image from "next/image";
import { Key } from "react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Home() {
  return (
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

      <div className="container flex align-top mx-auto pt-40 gap-40">
        <div className="navigation">
          <ul className="text-lg flex flex-col gap-4">
            <li>About me</li>
            <li>Projects</li>
            <li>Technologies</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <main className="space-y-60 flex-1">
          <section className="space-y-4">
            <div className="w-6 border-b-2 border-white mb-12"></div>
            <h1 className="text-6xl">Hello, I'm <span className="bold">Maroš Studenič</span></h1>
            <p className="text-2xl">I'm a <span className="text-orange-500">software developer </span>based in the Portugal</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-4xl">Projects</h2>

            {/* <BentoGrid className="max-w-4xl mx-auto">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid> */}
            <Projects />

          </section>

          <section className="max-w-4xl">
            <Experience />
          </section>

          <section className="max-w-4xl">
            <FavoriteTechnologyStack />
          </section>

          <section>
            {/* <Contacts /> */}
          </section>
        </main>
      </div>
    </header>
  );
}


const Projects = () => {
  const tabs = [
    {
      title: "nasdomov.sk",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-700 to-orange-900">
          <p>nasdomov.sk - affiliate katalóg</p>
          <Image
            src="/projects/nasdomov.png"
            alt="nasdomov.sk/katalog"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "3un.eu",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-purple-900">
          <p>3un.sk - digital agency website</p>
          <Image
            src="/projects/3un.png"
            alt="3un.eu"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Schulzconcept",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>Schulzconcept</p>
          <Image
            src="/projects/schulz.png"
            alt="3un.eu"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Amplion",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-violet-900">
          <div className="z-10"><p>Amplion.eu - cabater festival</p>
            <a href="https://amplion.eu/" target="_blank" className="text-white underline text-sm flex gap-2 mt-4 cursor-pointer"><IconLink />amplion.eu</a>
          </div>
          <Image
            src="/projects/amplion2.png"
            alt="3un.eu"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%]  w-[98%] rounded-xl mx-auto z-0"
          />
        </div>
      ),
    },
    {
      title: "Edison electric",
      value: "edison",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <div className="z-10 mb-2"><p>Edison electric - internal system</p>
          </div>
          <Image
            src="/projects/edison-electric.png"
            alt="3un.eu"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%]  w-[98%] rounded-xl mx-auto z-0"
          />
        </div>
      ),
    },

  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
}

const Experience = () => {
  type ExperienceType = {
    title: string;
    company: string;
    link: string;
    date: string;
    description: string;
    techstack: string[];
  }

  const experiences: ExperienceType[] = [
    {
      title: "Software Architect, Account Manager",
      company: "BeCode s.r.o.",
      link: 'https://becode.sk/',
      date: "2023 - 2024",
      description: "As a Software Architect and Account Manager at BeCode s.r.o., I collaborated closely with the broader development team, overseeing website design, content management, and SEO marketing initiatives. Additionally, I contributed to branding and logo design activities.",
      techstack: ['nextjs', 'typescript', 'react', 'firebase', 'tailwind', 'nextjs', 'fastapi', 'django']
    },

    {
      title: "Backend Developer - NestJs",
      company: "Softacus s.r.o.",
      link: 'https://softacus.com/',
      date: "September 2023 - December 2023",
      description: "In my role as a Backend Developer at Softacus s.r.o., I work collaboratively with the development team to create a no-code tool aimed at building fast and scalable internal systems using NestJs.",
      techstack: ['nestjs', 'typescript', 'mongodb', 'docker']
    },

    {
      title: "Embedded Developer (Part-time)",
      company: "Beehivemonitoring s.r.o.",
      link: 'https://beehivemonitoring.com/',
      date: "2023 - Present",
      description: "As an Embedded Developer on a part-time basis at Beehivemonitoring s.r.o., I contribute to the development of new features for smart monitoring systems designed for beehives.",
      techstack: ['c++']
    },

    {
      title: "Backend Developer - Laravel",
      company: "Pixwell s.r.o.",
      link: 'https://pixwell.com/',
      date: "2020 - 2021",
      description: "At Pixwell s.r.o., I am a Backend Developer involved in the development of software tailored for managing social media under the project name Draxard.",
      techstack: ['laravel', 'php', 'postgresql', 'typescript', 'docker', 'redis']
    }
  ]

  return (
    <>
      <h2 className="text-4xl mb-4">Experience</h2>


      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.company}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.title}</p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
            <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 space-y-4">
              <p>Tech Stack:</p>
              <div className="flex gap-6">
                {item.techstack.map((tech) => <TechIcon key={tech} name={tech} />)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  )

};

const FavoriteTechnologyStack = () => {
  const frontend = ['nextjs', 'react', 'typescript', 'tailwind', 'javascript'];
  const backend = ['django', 'python', 'fastapi'];
  const database = ['mongodb', 'postgresql', 'redis'];

  const smalldb = ['convex', 'clerk', 'nextjs'];



  return (
    <div className="max-w-xl p-4 space-y-10">
      <p className="text-4xl font-semibold mb-4">My Favorite Tech Stack</p>
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="font-semibold mb-2 text-2xl">Frontend:</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {frontend.map((tech) => <TechIcon key={tech} name={tech} variant="large" />)}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold mb-2 text-2xl">Backend:</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {backend.map((tech) => <TechIcon key={tech} name={tech} variant="large" />)}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold mb-2 text-2xl">Database:</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {database.map((tech) => <TechIcon key={tech} name={tech} variant="large" />)}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold mb-2 text-2xl">For small personal projects:</p>
          <p className="text-gray-200 mb-8">Because it allows me to quickly get to MVP with authentication, database, storage and seo optimalized site.</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {smalldb.map((tech) => <TechIcon key={tech} name={tech} variant="large" />)}
          </div>
        </div>
      </div>



    </div>
  )
}

// const Contacts = () => {
//   return (
//     <div className="flex gap-4">
//       <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
//         <Image
//           src={`/jordans.webp`}
//           alt="jordans"
//           height="400"
//           width="400"
//           className="object-contain"
//         />
//         <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//           Air Jordan 4 Retro Reimagined
//         </p>

//         <p className="text-sm text-neutral-600 dark:text-neutral-400">
//           The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
//           February 17, 2024. Your best opportunity to get these right now is by
//           entering raffles and waiting for the official releases.
//         </p>
//         <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
//           <span>Buy now </span>
//           <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
//             $100
//           </span>
//         </button>
//       </BackgroundGradient>
//       <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
//         <Image
//           src={`/jordans.webp`}
//           alt="jordans"
//           height="400"
//           width="400"
//           className="object-contain"
//         />
//         <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//           Air Jordan 4 Retro Reimagined
//         </p>

//         <p className="text-sm text-neutral-600 dark:text-neutral-400">
//           The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
//           February 17, 2024. Your best opportunity to get these right now is by
//           entering raffles and waiting for the official releases.
//         </p>
//         <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
//           <span>Buy now </span>
//           <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
//             $100
//           </span>
//         </button>
//       </BackgroundGradient>
//     </div>
//   )
// }