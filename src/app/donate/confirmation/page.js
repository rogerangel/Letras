import Checkmark from "@/components/Checkmark";

export default async function Confirmation() {
    return (
        <div className="bg-stone-50 w-full md:w-1/2 py-10 gap-10 flex flex-col justify-start items-center text-center rounded-md">
            <Checkmark />
            <h3 className="mt-5 text-3xl font-bold text-emerald-700">
                Thank you for your donation!
            </h3>
            <p className="text-lg font-medium text-gray-700">
                You will receive an email confirmation shortly.
            </p>
        </div>
    )
}
