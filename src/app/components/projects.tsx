import { Tabs } from "@/components/ui/tabs";
import { IconLink } from "@tabler/icons-react";
import Image from "next/image";

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
        {
            title: "Martin Augustín",
            value: "augustin",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
                    <div className="z-10 mb-2"><p>Portfolio pre umelca - Martina Augustína</p>
                    </div>
                    <Image
                        src="/projects/martin-augustin.png"
                        alt="martin-augustin"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%]  w-[98%] rounded-xl mx-auto z-0"
                    />
                </div>
            ),
        },

    ];

    return (
        <section id="projects" className="py-12">
            <h2 className="text-4xl">Projects</h2>
            <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl w-full  items-start justify-start my-4">
                <Tabs tabs={tabs} />
            </div>
        </section>
    );
}

export default Projects;
