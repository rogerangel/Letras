import CardArticles from "@/components/CardArticles";
import { articles } from "@/components/articles";


export default async function Projects() {
    const post = articles
    return (
        <main className="min-h-screen w-full bg-stone-300 pb-10">
            <div className="flex flex-col items-center gap-4">
                <CardArticles projects={post} />
            </div>
        </main>
    );
}
