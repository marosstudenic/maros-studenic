import TechIcon from "@/components/ui/tech-icon";

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
            techstack: ['nextjs', 'typescript', 'react', 'firebase', 'tailwind', 'fastapi', 'django']
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
        <section className="py-12" id="experience">
            <h2 className="text-4xl mb-4">Experience</h2>


            <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-3xl">
                {experiences.map((item, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.company}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.title}</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 space-y-4">
                            <p>Tech Stack:</p>
                            <div className="flex gap-6 flex-wrap">
                                {item.techstack.map((tech) => <TechIcon key={tech} name={tech} />)}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )

};


export default Experience;