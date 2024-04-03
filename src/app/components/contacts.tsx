import { BackgroundGradient } from "@/components/ui/background-gradient"
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react"

const Contacts = () => {
    return (
        <section className=" py-12" id="contact">
            <h3 className="text-4xl max-sm:text-2xl font-bold mb-8">Contact</h3>
            <div className="my-8 max-w-lg max-sm:w-full">
                <a aria-label="Chat on WhatsApp" target="__blank" href="https://wa.me/+421917481025" className="flex gap-2 bg-[#25D366] rounded-xl py-2 px-4 items-center justify-center"><IconBrandWhatsapp size={42} />
                    <p className="text-2xl max-sm:text-lg">Chat on Whatsapp</p>
                </a>
            </div>
            <div className="flex flex-col md:flex-row  gap-4 ">
                <a href="tel:+421917481025">
                    <BackgroundGradient className="rounded-[22px] max-w-sm max-sm:w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <IconMail size={100} className="max-md:hidden" />
                        <IconMail size={40} className="md:hidden" />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            +421 917 481 025
                        </p>
                        <p className="text-gray-400">hello@fullstack-developer.sk</p>
                        <p className="text-gray-400">studenic.maros@gmail.com</p>
                    </BackgroundGradient>
                </a>

                <a href="https://www.linkedin.com/in/maros-studenic/" className="cursor-pointer">
                    <BackgroundGradient className="rounded-[22px] max-w-sm max-sm:w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <IconBrandLinkedin size={120} className="max-md:hidden" />
                        <IconBrandLinkedin size={40} className="md:hidden" />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Maroš Studenič
                        </p>
                        <p className="text-gray-400">linkedin.com/in/maros-studenic/</p>
                    </BackgroundGradient>

                </a>
                <a href="https://github.com/marosstudenic">
                    <BackgroundGradient className="rounded-[22px] max-w-sm max-sm:w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
                        <IconBrandGithub size={120} className="max-md:hidden" />
                        <IconBrandGithub size={40} className="md:hidden" />

                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Maroš Studenič
                        </p>
                        <p className="text-gray-400">github.com/marosstudenic</p>
                    </BackgroundGradient>
                </a>

            </div>



        </section>
    )
}

export default Contacts;