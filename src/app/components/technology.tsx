import TechIcon from "@/components/ui/tech-icon";

const FavoriteTechnologyStack = () => {
    const frontend = ['nextjs', 'react', 'typescript', 'tailwind', 'javascript'];
    const backend = ['django', 'python', 'fastapi'];
    const database = ['mongodb', 'postgresql', 'redis'];

    const smalldb = ['convex', 'clerk', 'nextjs'];



    return (
        <section className="max-w-xl p-4 space-y-10 py-12" id='technologies'>
            <p className="text-4xl font-semibold mb-4">My Favorite Tech Stack</p>
            <div className="space-y-8">
                <div className="space-y-4">
                    <p className="font-semibold mb-2 text-2xl">Frontend:</p>
                    <div className="flex flex-wrap gap-4 mb-6 max-sm:hidden">
                        {frontend.map((tech) => <TechIcon key={tech} name={tech} variant="large" />)}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-6 md:hidden">
                        {frontend.map((tech) => <TechIcon key={tech} name={tech} variant="medium" />)}
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="font-semibold mb-2 text-2xl">Backend:</p>
                    <div className="flex flex-wrap gap-4 mb-6 max-sm:hidden">
                        {backend.map((tech) => <TechIcon key={tech} name={tech} variant="large" />)}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-6 md:hidden">
                        {backend.map((tech) => <TechIcon key={tech} name={tech} variant="medium" />)}
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="font-semibold mb-2 text-2xl">Database:</p>
                    <div className="flex flex-wrap gap-4 mb-6 max-sm:hidden">
                        {database.map((tech) => <TechIcon key={tech} name={tech} variant="large" />)}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-6 md:hidden">
                        {database.map((tech) => <TechIcon key={tech} name={tech} variant="medium" />)}
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="font-semibold mb-2 text-2xl">For small personal projects:</p>
                    <p className="text-gray-200 mb-8">Because it allows me to quickly get to MVP with authentication, database, storage and seo optimalized site.</p>
                    <div className="flex flex-wrap gap-4 mb-6 max-sm:hidden">
                        {smalldb.map((tech) => <TechIcon key={tech} name={tech} variant="large" />)}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-6 md:hidden">
                        {smalldb.map((tech) => <TechIcon key={tech} name={tech} variant="medium" />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FavoriteTechnologyStack;