import TechIcon from "@/components/ui/tech-icon";

const Hero = () => {
    return (
        <section className="space-y-4 min-h-90 py-12" id="about">
            <div className="w-6 border-b-2 border-white mb-12"></div>
            <h1 className="text-6xl max-sm:text-2xl">Hello, I&apos;m <span className="bold">Maroš Studenič</span></h1>
            <p className="text-2xl max-sm:text-lg">I&apos;m a <span className="text-orange-500">software developer </span>based in the Portugal</p>
            <div className="space-y-4">
                <p className="text-2xl max-sm:text-lg">Tech stack:</p>
                <div className="flex gap-4">
                    {
                        ["nextjs", "react", "typescript", "django", "python"].map((tech) => <TechIcon key={tech} name={tech} />)

                    }
                </div>


            </div>
        </section>
    )
}

export default Hero;