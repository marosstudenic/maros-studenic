import { cn } from "@/utils/cn";
import { Label } from "@radix-ui/react-label";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans, IconBrandWhatsapp } from "@tabler/icons-react";
import { Input } from "../../components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="max-w-4xl w-full max-sm:mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">

                Would you like to share a message with me? Or perhaps you have a project in mind that you&apos;d like to discuss? Let&apos;s chat!
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Don&apos;t hesitate to contact me. I will be happy to help you with your project.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="md:flex-row space-y-2 md:space-y-4  mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">Email</Label>
                        <Input id="firstname" placeholder="hello@there.eu" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Message</Label>
                        <Textarea id="lastname" placeholder="I have this startup idea..." rows={4} />
                    </LabelInputContainer>
                </div>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Send me message &rarr;
                    <BottomGradient />
                </button>

                <div className="border-gray-500 border-b-2 my-4"></div>
                <div>
                    <a aria-label="Chat on WhatsApp" target="__blank" href="https://wa.me/+421917481025" className="flex gap-2 bg-[#25D366] rounded-xl py-2 px-4 items-center justify-center"><IconBrandWhatsapp size={42} />
                        <p className="text-2xl">Chat on Whatsapp</p>
                    </a>
                </div>



            </form>
        </div>
    );

}


const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
export default ContactForm;