import { Tabs } from "@/components/ui/tabs";
import { IconLink } from "@tabler/icons-react";
import Image from "next/image";

const Projects = () => {
    const tabs = [
        {
            title: "nasdomov.sk",
            value: "nasdomov",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 max-md:py-4 max-md:px-4 space-y-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-700 to-orange-900">

                    <div className="z-10">  <p>nasdomov.sk - affiliate catalogue</p>
                        <a href="https://nasdomov.sk/katalog" target="_blank" className="text-white underline text-sm flex gap-2 mt-4 cursor-pointer"><IconLink />nasdomov.sk/katalog</a>
                    </div>
                    <Image
                        src="/projects/nasdomov.png"
                        alt="nasdomov.sk/katalog"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%] md:h-[90%]  w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "3un.eu",
            value: "3un",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 max-md:py-4 max-md:px-4 space-y-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-purple-900">

                    <div className="z-10"> <p>3un.sk - digital agency website</p>
                        <a href="https://3un.eu" target="_blank" className="text-white underline text-sm flex gap-2 mt-4 cursor-pointer"><IconLink />3un.eu</a>
                    </div>
                    <Image
                        src="/projects/3un.png"
                        alt="3un.eu"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%]  w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "schulzconcept.eu",
            value: "schulzconcept",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 max-md:py-4 max-md:px-4 space-y-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">

                    <div className="z-10"> <p>Schulzconcept - digital agency website</p>
                        <a href="https://schulzconcept.eu" target="_blank" className="text-white underline text-sm flex gap-2 mt-4 cursor-pointer"><IconLink />schulzconcept.eu</a>
                    </div>
                    <Image
                        src="/projects/schulz.png"
                        alt="3un.eu"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%]  w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "amplion.eu",
            value: "camplion",
            content: (
                <div className="w-full overflow-hidden relative md:h-full rounded-2xl md:p-10 max-md:py-4 max-md:px-4 space-y-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-violet-900">
                    <div className="z-10"><p>Amplion.eu - cabater festival</p>
                        <a href="https://amplion.eu/" target="_blank" className="text-white underline text-sm flex gap-2 mt-4 cursor-pointer"><IconLink />amplion.eu</a>
                    </div>
                    <Image
                        src="/projects/amplion2.png"
                        alt="3un.eu"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top md:h-[90%]  w-[98%] rounded-xl mx-auto z-0"
                    />
                </div>
            ),
        },
        {
            title: "Edison electric",
            value: "edison",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 max-md:py-4 max-md:px-4 space-y-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
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
            title: "augustinmartin.com",
            value: "augustin",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 max-md:py-4 max-md:px-4 space-y-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
                    <div className="z-10 mb-2"><p>Portfolio website for renowned artist - Martin&nbsp;Augustín</p>
                        <a href="https://augustinmartin.com/" target="_blank" className="text-white underline text-sm flex gap-2 mt-4 cursor-pointer"><IconLink />augustinmartin.com</a>

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
        <>
            <section id="projects" className="py-12 max-md:hidden">
                <h2 className="text-4xl">Projects</h2>
                <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl w-full  items-start justify-start my-4">
                    <Tabs tabs={tabs} />
                </div>


            </section>
            <section id="projects" className="py-12 lg:hidden">
                <h2 className="text-2xl">Last Projects</h2>

                {tabs.map((tab, idx) => (
                    <div key={tab.title} className="my-8">
                        <h3 className="text-2xl font-bold mb-8">{tab.title}</h3>
                        {tab.content}
                    </div>
                ))}
            </section>
        </>
    );
}

export default Projects;
