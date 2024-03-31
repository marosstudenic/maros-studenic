import { BackgroundGradient } from "@/components/ui/background-gradient"
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

const Contacts = () => {
    return (
        <section className=" py-12" id="contact">
            <h3 className="text-4xl font-bold mb-8">Contact</h3>
            <div className="flex gap-4">

                <a href="https://www.linkedin.com/in/maros-studenic/" className="cursor-pointer">
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <IconBrandLinkedin size={150} />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Maroš Studenič
                        </p>
                        <p className="text-gray-400">linkedin.com/in/maros-studenic/</p>
                    </BackgroundGradient>

                </a>
                <a href="https://github.com/marosstudenic">
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
                        <IconBrandGithub size={150} />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Maroš Studenič
                        </p>
                        <p className="text-gray-400">github.com/marosstudenic</p>
                    </BackgroundGradient>
                </a>
                <a href="tel:+421917481025">
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <IconMail size={150} />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            +421 917 481 025
                        </p>
                        <p className="text-gray-400">studenic.maros@gmail.com</p>
                    </BackgroundGradient>
                </a>
            </div>

        </section>
    )
}

export default Contacts;