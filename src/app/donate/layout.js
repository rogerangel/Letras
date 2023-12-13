export default function DonateLayout({ children }) {
    return (
        <main className="relative flex flex-col md:flex-row h-screen">
            <div className="bg-stone-100 border-r-2 border-gray-300 w-full py-10 gap-10 flex flex-col justify-center items-center text-center">
                container
            </div>
            {children}
        </main>
    );
}
